import React from 'react';

// @mui
import { Avatar, Box, Grid, IconButton, InputAdornment, Skeleton, Stack, TextField, Typography, keyframes } from '@mui/material';

// @relay
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import { Clients_data$key } from './__generated__/Clients_data.graphql';
import { ClientsQuery } from './__generated__/ClientsQuery.graphql';
import { ArrowBackIosNewSharp, Call, Cancel, FilterList, GridOff, GridOn, Search, SearchOff } from '@mui/icons-material';

const graphql = require('babel-plugin-relay/macro');

const searchEnter = keyframes`
    0% {
        opacity: 0; 
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);   
    }
`

interface ClientsProps {

}

interface ClientsState {
    ClientIconDirection: "row" | "column";
    filters: {
        nickname: string;
        name: string;
        mobile: string;
    }
}

class Clients extends React.Component<ClientsProps, ClientsState> {

    constructor(props: ClientsProps) {
        super(props);
        this.state = {
            ClientIconDirection: "row",
            filters: {
                nickname: "",
                name: "",
                mobile: ""
            }
        };
    }

    ClientIcon = (props: {
        name: string;
        mobile: { edges: any[] };
    }) => {
        const { ClientIconDirection } = this.state;

        return (
            <Stack
                spacing={1}
                sx={{
                    alignItems: "center",
                    width: {
                        xs: ClientIconDirection === "row" ? "100%" : "max-content",
                        sm: "max-content"
                    },
                    m: 2,
                }}
                direction={ClientIconDirection}
            >
                <Avatar
                    alt={props.name ?? ""}
                    children={props.name?.split(" ").map((e: string) => e.charAt(0))}
                    src="https://source.unsplash.com/random"
                    sx={{ width: "120px", height: "120px", fontWeight: "bold", fontSize: "21px", borderRadius: "2rem " }}
                />

                <Stack
                    sx={{
                        alignItems: ClientIconDirection === "column" ? "center" : "flex-start",
                        width: "max-content",
                        p: 1,
                    }}
                >
                    <Typography
                        variant="h6"
                        color="primary"
                        children={props.name}
                    />
                    {
                        props.mobile?.edges?.map(
                            (edge: any, index: number) => {
                                return (
                                    <Stack direction={"row"} alignItems="center" p={1} boxShadow="2px 3px 4px #eee" borderRadius="4px" >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                padding: "4px 8px",
                                                cursor: "pointer"
                                            }}
                                            children={`${edge?.node?.countryCode ?? ""} ${edge?.node?.number ?? "-"}`}
                                        />
                                        <IconButton
                                            href={`tel:${edge?.node?.countryCode ?? ""}${edge?.node?.number ?? "-"}`}
                                            onClick={
                                                () => { }
                                            }
                                        >
                                            <Call color="success" />
                                        </IconButton>
                                    </Stack>
                                )
                            }
                        )
                    }
                </Stack>
            </Stack>
        )
    }

    RenderFetchedData = ({ dref }: { dref: Clients_data$key }) => {
        const { ClientIcon } = this;
        const { ClientIconDirection } = this.state
        const {
            data,
            hasNext,
            hasPrevious,
            loadNext,
            loadPrevious,
            refetch
        } = usePaginationFragment(
            graphql`
            fragment Clients_data on Query 
            @argumentDefinitions(
                first: { type: "Int", defaultValue: 10 }
                after: { type: "String" }
                nickname: { type: "String" }
                name: { type: "String" }
                createdBefore: { type: "DateTime" }
                createdAfter: { type: "DateTime" }
                mobile: { type: "String" }
            ) 
            @refetchable(queryName: "ClientsQuery_clients")
            {
                userAccount 
                { 
                    id
                    clients(
                        first: $first,
                        after: $after,
                        nickname_Icontains: $nickname,
                        name_Icontains: $name,
                        createdAt_Lt :$createdBefore,
                        createdAt_Gt: $createdAfter,
                        mobile_Number_Icontains: $mobile
                    ) 
                    @connection(key: "Clients_clients"){
                        edges {
                            node {
                            id
                            name
                            mobile  {
                                    edges{
                                        node{
                                            id countryCode number
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
            dref
        )
        const _renderClients = (edge: any, index: number) => {
            return (
                <ClientIcon
                    name={edge?.node?.name ?? ""}
                    mobile={edge?.node?.mobile ?? { edges: [] }}
                />
            )
        };

        React.useEffect(() => {
            refetch({
                ...this.state.filters
            })
        }, [this.state.filters])

        return (
            <Grid
                container
                justifyContent="space-between"
                columns={
                    ClientIconDirection === "row" ?
                        { xs: 12, sm: 8, md: 6, lg: 4 } :
                        { xs: 5, md: 4, lg: 3 }
                }
            >
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
                {data.userAccount?.clients?.edges?.map(_renderClients)}
            </Grid>
        )
    }

    LazyInitQuery = () => {
        const { RenderFetchedData } = this;
        const data = useLazyLoadQuery<ClientsQuery>(
            graphql`    
            query ClientsQuery {
                    ...Clients_data
            }
        `,
            {},
            { fetchPolicy: 'store-or-network' }
        )

        return (
            <>
                {data && <RenderFetchedData dref={data} />}
            </>
        )
    }

    Header = () => {
        const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
        const [search, setSearch] = React.useState<string>("");
        const { ClientIconDirection } = this.state;

        const _toggleSearch = () => {
            setSearchOpen(!searchOpen);
        };
        const _toggleClientIconDirection = () => {
            return this.setState({ ClientIconDirection: ClientIconDirection === "row" ? "column" : "row" });
        };

        return (
            <Box sx={[
                theme => ({
                    width: "100%",
                    position: "sticky",
                    top: 0,
                    left: 0,
                    right: 0,
                    background: `linear-gradient(to bottom, ${theme.palette.background.default} 63%, transparent 100%)`,
                    zIndex: 100,
                })
            ]}>

                {/* header stack */}
                <Stack direction="row" alignItems="center" >

                    {/* back button */}
                    <IconButton sx={{ m: 1 }} >
                        <ArrowBackIosNewSharp />
                    </IconButton>


                    {/* header title */}
                    <Typography
                        variant="subtitle1"
                        color="info"
                        children="Clients contact list"
                    />
                    {/*  */}

                    {/* search butotn */}
                    <IconButton sx={{ ml: "auto", mr: "1rem" }} onClick={_toggleSearch} >
                        {searchOpen ? <SearchOff color="error" /> : <Search color='info' />}
                    </IconButton>
                    {/*  */}

                </Stack>
                {/*  */}

                {/* search filters */}
                <Stack direction="row" alignItems="center" px="1rem" >
                    {/* search field */}
                    <TextField
                        variant="outlined"
                        placeholder='Search'
                        value={search}
                        color="secondary"
                        onChange={(e: any) => {
                            setSearch(e.target.value);
                            this.setState({ filters: { ...this.state.filters, name: e.target.value } })
                        }}
                        sx={{
                            m: 1,
                            display: searchOpen ? "flex" : "none",
                            width: {
                                xs: "80%",
                                md: "75%",
                                lg: "50%",
                            },
                            transition: "width 300ms ease-in-out",
                            animation: `${searchEnter} 300ms ease-in-out both 1 normal`,
                            mr: "auto"
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <Search />
                                </InputAdornment>
                            ),
                            endAdornment: search.length > 2 && (
                                <InputAdornment position="end" >
                                    <IconButton onClick={() => setSearch((""))} >
                                        <Cancel />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {/*  */}
                    <IconButton sx={{ ml: "auto" }}>
                        <FilterList />
                    </IconButton>
                    <IconButton onClick={_toggleClientIconDirection}>
                        {ClientIconDirection === "row" ? <GridOff /> : <GridOn />}
                    </IconButton>
                </Stack>
                {/*  */}

            </Box>
        )
    }

    Loading = () => {
        return (
            <Grid justifyContent="space-evenly" container columns={{ xs: 12, sm: 6, md: 4, lg: 3 }} >
                {Array(10).fill(0).map((e, i) => {
                    return (
                        <Box sx={{ display: 'flex', flexDirection: "column", gap: 1, m: 1 }}>
                            <Skeleton sx={{ alignSelf: "center" }} variant="circular" width={90} height={90} />
                            <Skeleton variant="rectangular" width={210} height={30} />
                            <Skeleton variant="rectangular" width={210} height={12} />
                        </Box>
                    )
                })}
            </Grid>
        )
    }

    render() {
        const { LazyInitQuery, Header, Loading } = this;

        return (
            <>
                <Header />
                <React.Suspense fallback={<Loading />} >
                    <LazyInitQuery />
                </React.Suspense>
            </ >
        );
    }

}

export default Clients;
