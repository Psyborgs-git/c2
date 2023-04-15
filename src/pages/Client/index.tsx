import React from 'react';

// MUI
import { AppBar, Avatar, Box, BoxProps, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack, Tab, Tabs, TextField, Typography, keyframes } from '@mui/material';

// Icons
import { Add, Call, Close, Email, FilterList, Menu, Search } from '@mui/icons-material';

// Relay
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';

// components
import NoteMod from './NoteMod';
import Contact from './Contact';

// graphql
import { connections } from '../../relay/environment';
import { ClientQuery } from './__generated__/ClientQuery.graphql';
import { ClientContactNotesQuery } from './__generated__/ClientContactNotesQuery.graphql';

// 
const graphql = require('babel-plugin-relay/macro');


interface indexProps {

}

interface indexState {
    sidebarOpen: boolean;
    name: string;
    icon?: string;
    profession?: string;
    company?: string;
    description: string;
    emails?: string[];
    mobile?: Array<{
        id: string;
        number: string;
        countryCode: string;
    }>;
    lastUpdated?: string;
    selectedNode?: string;
    searchOpen?: boolean;
    search?: string;
    selectedGroup?: string;
    groupContacts?: { edges: Array<{ node: any }> };
}

const tabAnimation = keyframes`
    0% {
        transform: translateY(-30%) rotateX(-90deg);
        opacity: 0.3;
    }
    100% {  
        transform: translateY(0px) rotateX(0deg);
        opacity: 1;
    }
`;
const sideBarAnimation = keyframes`
    0% {
        transform : translateY(100%);
        opacity: 0.3;
        scale: 0.9;
    }
    100% {  
        transform : translateY(0%);
        opacity: 1;
        scale: 1;
    }
`;
const searchPanelAnimation = keyframes`
    0% {
        transform : translateX(100%);
        opacity: 0.3;
    }
    100% {  
        transform : translateX(0%);
        opacity: 1;
    }
`;


function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

interface TabPanelProps extends BoxProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, sx, ...other } = props;

    return (
        <Box
            component="div"
            sx={[{
                animation: `${tabAnimation} 500ms ease-in-out both`,
                width: "100%",
                height: "max-content",
                minHeight: "200px",
                bgcolor: "background.paper",
                borderRadius: "1rem",
                mb: "6rem"
            },
            ...(Array.isArray(sx) ? sx : [sx])
            ]}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

const addShadow = { boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)" };


class Client extends React.Component<indexProps, indexState> {

    constructor(props: indexProps) {
        super(props);
        this.state = {
            sidebarOpen: true,
            name: "Jainam Shah",
            profession: "Founder | Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus.",
            company: "Shah Enterprises",
            selectedNode: undefined,
            searchOpen: false,
            search: "",
        };
    }

    _toggleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }
    _toggleSearchbar = () => {
        this.setState({ searchOpen: !this.state.searchOpen });
    }
    _onContactClick = (contact: any) => {
        this.setState({
            name: contact?.name,
            description: contact?.description ?? "",
            sidebarOpen: false,
            emails: contact?.emails,
            mobile: contact?.mobile?.edges?.map((edge: any) => edge?.node),
            lastUpdated: contact?.lastUpdated,
            selectedNode: contact?.id,
            profession: contact?.currentPosition ?? undefined,
            company: contact?.company ?? undefined,
        })

    }
    _render_contact = (contact: any, index: number) => {
        const { _onContactClick } = this;

        return (
            <ListItem
                key={contact?.node?.id}
                sx={{
                    borderRadius: "1rem",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                    my: "0.5rem",
                    "&:hover": {
                        background: "linear-gradient(-90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
                        color: "white"
                    }
                }}
                button
                onClick={() => _onContactClick(contact?.node)}
            >

                <ListItemAvatar>
                    <Avatar >
                        {contact?.node?.name?.charAt(0)}
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={contact?.node?.name}
                    secondary={
                        `${contact?.node?.emails?.length} emails | ${contact?.node?.mobile?.edges?.length} mobiles`
                    }
                />

            </ListItem>
        )
    }
    _onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            search: event.target.value
        })
    }
    _onGroupClick = (group: any) => {
        this.setState({
            selectedGroup: group?.node?.id,
            groupContacts: group?.node?.contacts
        })
    }

    Header = () => {
        return (
            <Box
                sx={{
                    height: "100px",
                    width: "100%",

                }}
            >

            </Box>
        );
    }

    HeaderButtons = () => {
        const { sidebarOpen, searchOpen } = this.state;
        return (
            <Box sx={{
                position: "absolute",
                top: "10px",
                left: "0",
                right: "0",
                width: "100vw",
                zIndex: 99,
                justifyContent: "space-between",
                flexDirection: "row",
                p: 1,
                display: {
                    xs: "flex",
                    md: "none"
                },
            }}>

                {
                    (!searchOpen) && (
                        <IconButton
                            onClick={this._toggleSidebar}
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                backdropFilter: "blur(9px)",
                                bgcolor: "background.backdrop",
                                color: "text.primary",
                                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                            }}
                        >
                            {sidebarOpen ? <Close /> : <Menu />}
                        </IconButton>
                    )
                }

                <Box flex={1}>

                </Box>

                {
                    (!sidebarOpen) && (
                        <IconButton
                            onClick={this._toggleSearchbar}
                            sx={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                backdropFilter: "blur(9px)",
                                bgcolor: "background.backdrop",
                                color: "text.primary",
                                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                            }}
                        >
                            {searchOpen ? <Close /> : <Search />}
                        </IconButton>
                    )
                }

            </Box>
        )
    }

    SideBar = () => {
        const data = useLazyLoadQuery<ClientQuery>(
            graphql`
                query ClientQuery {
                    groups {
                        edges {
                            node {
                                id
                                name
                                contacts {
                                    edges {
                                        node {
                                            id
                                            name
                                            description
                                            emails
                                            lastUpdated
                                            currentPosition
                                            company
                                            mobile {
                                                edges {
                                                    node {
                                                        id
                                                        number
                                                        countryCode
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    connection {
                        id
                        userIsOwner
                        app {
                            id
                            name
                        }
                        contacts {
                            edges {
                                node {
                                    id
                                    name
                                    description
                                    emails
                                    lastUpdated
                                    currentPosition
                                    company
                                    mobile {
                                        edges {
                                            node {
                                                id
                                                number
                                                countryCode
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            {},
            { fetchPolicy: "store-or-network" }
        );
        const { _render_contact } = this;
        const { groupContacts, selectedGroup } = this.state;

        return (
            <Stack sx={{ py: 2, height: "100vh", display: "block" }}>

                <Avatar sx={{ width: 56, height: 56, margin: "auto", mb: 3 }} />

                <Typography sx={{ textAlign: "center" }} variant="h6" gutterBottom>
                    {data.connection?.app?.name}
                </Typography>

                <Divider sx={{ margin: "10px 0px" }} />


                {/* groups */}
                <Stack >
                    <Typography sx={{ textAlign: "center" }} variant="overline" gutterBottom> Groups </Typography>
                    <Box sx={{ width: "100%", height: "70px", overflowX: "scroll", overflowY: "hidden" }}>
                        <Stack
                            direction="row"
                            gap={1}
                            sx={{ p: "1rem", flex: 1 }}
                        >
                            <IconButton>
                                <Add />
                            </IconButton>

                            {
                                data?.groups?.edges?.map(
                                    (group, index) => {
                                        return (
                                            <Button
                                                key={group?.node?.id}
                                                sx={[
                                                    addShadow,
                                                    {
                                                        borderRadius: "1rem",
                                                        p: 1,
                                                        bgcolor: "background.paper",
                                                        width: "max-content",
                                                        color: "text.primary",
                                                        "&:hover": {
                                                            bgcolor: "background.backdrop",
                                                            color: "text.main",
                                                        },
                                                        ...(
                                                            (selectedGroup === group?.node?.id) && {
                                                                border: "1px solid",
                                                                borderColor: "primary.main"
                                                            }
                                                        )
                                                    }
                                                ]}
                                                onClick={() => this._onGroupClick(group)}
                                            >
                                                <Typography >
                                                    {group?.node?.name}
                                                </Typography>
                                            </Button>
                                        )
                                    }
                                )
                            }
                        </Stack>

                    </Box>
                </Stack >
                {/*  */}


                < Divider sx={{ margin: "10px 6px" }
                } />

                {/* contacts list */}
                <List
                    sx={{ p: "1rem", flex: 1 }}
                    children={
                        (selectedGroup ? groupContacts : data?.connection?.contacts)?.edges?.map(_render_contact)
                    }
                />
                {/*  */}

            </Stack >
        )
    }

    SideBarContainer = (props: BoxProps) => {
        const { sidebarOpen } = this.state;

        return (
            <Box
                sx={theme => ({
                    height: "100vh",
                    width: {
                        xs: "100vw",
                        md: "100%"
                    },
                    bgcolor: "background.paper",
                    zIndex: 89,
                    overflowX: "hidden",
                    overflowY: "scroll",

                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    [theme.breakpoints.down("md")]: {
                        animation: `${sideBarAnimation} 500ms ease-in-out ${this.state.sidebarOpen ? "both" : "reverse"}`,
                        display: sidebarOpen ? "block" : "none",
                        position: "absolute",
                        backdropFilter: "blur(9px)",
                        zIndex: 1,
                        top: 0,
                        bottom: 0,
                        left: 0,
                    },
                    [theme.breakpoints.up("md")]: {
                        display: "block",
                        width: "360px",
                    }
                })}
                {...props}
            />
        )
    }

    SearchPanel = () => {
        const { searchOpen, search } = this.state;

        return (
            <Box
                sx={
                    theme =>
                    ({
                        bgcolor: "backgroud.paper",
                        height: "100vh",
                        minWidth: "sm",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        p: 1,
                        pt: {
                            xs: 3,
                            md: 1
                        },
                        [theme.breakpoints.down("md")]: {
                            display: "none",
                            ...(searchOpen && {
                                display: "block",
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                zIndex: 2,
                                backdropFilter: "blur(9px)",
                                animation: `${searchPanelAnimation} 500ms ease-in-out ${this.state.searchOpen ? "both" : "reverse"}`,
                                pt: "72px"
                            })
                        },
                        [theme.breakpoints.up("md")]: {
                            display: "flex",
                            flex: 1
                        }
                    })
                }
            >
                <Stack width={"100%"} gap={1} p={1} alignItems="center" >

                    <Stack width={"100%"} maxWidth="sm" direction='row' mb={2} position="sticky" >
                        <TextField
                            sx={{
                                flex: 1,
                                borderRadius: "1rem",
                                height: "45px",
                                mx: 1
                            }}
                            placeholder='Type your search here'
                            label='Search'
                            value={search}
                            onChange={this._onSearchChange}
                        />
                        <IconButton>
                            <FilterList />
                        </IconButton>
                    </Stack>

                    <Contact />
                </Stack>
            </Box>
        )
    }

    ProfileInfo = () => {
        const { name, profession, company } = this.state;
        return (
            <Stack
                direction={{
                    xs: "column",
                    md: "row"
                }}
                justifyContent="center"
                alignItems={{
                    md: "center"
                }}
                gap={1}
            >
                <IconButton
                    sx={{
                        background: "focal-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
                        backdropFilter: "blur(9px)",
                        height: "100px",
                        width: "100px",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                        my: "0.5rem"
                    }}
                >
                    <Avatar
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt={name ?? "icon"}
                        sx={{ objectFit: "cover" }}
                    />
                </IconButton>

                <Stack flex={1} gap={0.33} >
                    <Typography
                        flex={1}
                        ml={{
                            xs: "0.5px",
                            md: "2rem"
                        }}
                        sx={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "text.primary",
                            top: "-9px"
                        }}
                        children={name}
                    />
                    <Stack>
                        <Typography
                            flex={1}
                            ml={{
                                xs: "0.5px",
                                md: "2rem"
                            }}
                            variant="caption"
                            sx={{
                                fontSize: "1rem",
                                color: "text.primary",
                            }}
                            children={profession ? profession : " - "}
                        />
                        {
                            company &&
                            <Typography
                                flex={1}
                                ml={{
                                    xs: "0.5px",
                                    md: "2rem"
                                }}
                                variant="overline"
                                sx={{
                                    fontSize: "0.72rem",
                                    color: "text.primary",
                                }}
                                children={("@" + company)}
                            />
                        }
                    </Stack>
                </Stack>

                <Button variant="outlined" sx={{ px: "1rem", borderColor: "#eee" }} >
                    Go to Github
                </Button>

            </Stack>
        )
    }

    ProfileTab = () => {
        return (
            <Stack
                sx={[addShadow, { p: "1rem", borderRadius: "1rem" }]}
            >

                <Typography
                    variant="subtitle2"
                >
                    About
                </Typography>

                <Typography
                    variant="body1"
                >
                    {this.state.description.length > 0 ? this.state.description : "No description"}
                </Typography>

            </Stack>
        )
    }

    WorkHistoryTab = () => {
        return (
            <Stack>

            </Stack>
        )
    }

    NoteTab = () => {
        const { selectedNode } = this.state;
        const notes = useLazyLoadQuery<ClientContactNotesQuery>(
            graphql`
                query ClientContactNotesQuery($contactId: ID!)
                {
                    notes(contactId: $contactId) {
                        edges {
                            node {
                                id 
                                title
                                content
                                userIsOwner
                                createdAt
                                lastUpdated
                            }
                        }
                    }
                }
            `,
            // @ts-ignore
            { contactId: selectedNode },
            { fetchPolicy: "store-or-network" }
        )

        return (
            <Stack gap={1} >
                <NoteMod />
                {
                    notes
                        ?.notes
                        ?.edges
                        ?.map(
                            (note, index) => {
                                return (
                                    <Stack
                                        key={note?.node?.id}
                                        gap={1}
                                        p={1}
                                        sx={[addShadow, {
                                            borderRadius: "0.5rem",
                                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                                            my: "0.5rem"
                                        }]}
                                    >
                                        <Typography variant="h6" >
                                            Title : {note?.node?.title ?? " - "}
                                        </Typography>

                                        <Typography variant='body1' >
                                            Note : {note?.node?.content ?? " - "}
                                        </Typography>

                                        <Stack gap={1} justifyContent="space-between" >
                                            <Typography variant="caption" fontSize="0.33rem" >
                                                last Updated : {new Date(note?.node?.lastUpdated).toLocaleString()}
                                            </Typography>
                                            <Typography variant="caption" fontSize="0.33rem" >
                                                created At : {new Date(note?.node?.createdAt).toLocaleString()}
                                            </Typography>
                                        </Stack>

                                    </Stack>
                                )
                            })
                }
            </Stack>
        )
    }

    ContactTab = () => {
        const { mobile, emails } = this.state;
        return (
            <Stack gap={1} >
                {
                    mobile?.map((m, index) => {
                        return (
                            <Stack direction="row" alignItems="center" >
                                <IconButton color="success" sx={[addShadow]} >
                                    <Call />
                                </IconButton>
                                <Typography
                                    variant="caption"
                                    sx={[{ ml: "0.5rem" }]}
                                    children={`${m?.countryCode} ${m?.number}`}
                                />
                            </Stack>
                        )
                    })
                }
                {
                    emails?.map((mail, index) => {
                        return (
                            <Stack direction="row" alignItems="center" >
                                <IconButton color="info" sx={[addShadow]}>
                                    <Email />
                                </IconButton>
                                <Typography
                                    variant="caption"
                                    sx={[{ ml: "0.5rem" }]}
                                    children={mail}
                                />
                            </Stack>
                        )
                    })
                }
            </Stack>
        )
    }

    ProfileTabs = () => {
        const [value, setValue] = React.useState(0);
        const { ProfileTab, WorkHistoryTab, ContactTab, NoteTab } = this;
        const { selectedNode } = this.state;
        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };

        return (
            <Stack>

                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "background.backdrop",
                        borderRadius: "0.5rem",
                        boxShadow: "none",
                        pt: "0.5rem",
                    }} >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="full width tabs example"
                        sx={{ color: "text.primary", }}
                    >
                        <Tab
                            label="Profile"
                            {...a11yProps(0)}
                        />
                        <Tab
                            label="Work History"
                            disabled
                            {...a11yProps(1)}
                        />
                        <Tab
                            label="Contact"
                            disabled={this.state.mobile?.length === 0 && this.state.emails?.length === 0}
                            {...a11yProps(2)}
                        />
                        <Tab
                            label="Notes"
                            {...a11yProps(3)}
                            disabled={!selectedNode}
                        />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} >
                    <ProfileTab />
                </TabPanel>
                <TabPanel value={value} index={1} >
                    <WorkHistoryTab />
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <ContactTab />
                </TabPanel>
                <TabPanel value={value} index={3} >
                    <React.Suspense fallback={<Skeleton variant="rounded" width="100%" height='200px' />} >
                        <NoteTab />
                    </React.Suspense>
                </TabPanel>

            </Stack>
        )
    }

    Body = () => {
        const { ProfileInfo, ProfileTabs } = this;

        return (
            <Box sx={{
                width: "100%",
                height: "max-content",
                minHeight: "200px",
                px: {
                    xs: "1rem",
                    md: "1.5rem"
                }
            }} >

                <ProfileInfo />
                <ProfileTabs />

            </Box>
        )
    }

    render() {
        const { Header, Body, SideBar, SideBarContainer, HeaderButtons, SearchPanel } = this;

        return (
            <RelayEnvironmentProvider environment={connections} >
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        bgcolor: 'background.paper',
                        overflowX: "hidden",
                        overflowY: "scroll",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 2fr 1fr",
                            lg: "1fr 3fr 2fr"
                        },

                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }}
                >

                    <HeaderButtons />

                    <SideBarContainer>
                        <React.Suspense fallback="loading...." >
                            <SideBar />
                        </React.Suspense>
                    </SideBarContainer>

                    <Stack
                        flex={1}
                        pb={2}
                        sx={{
                            overflowY: "scroll",
                            overflowX: "hidden",
                            flex: 1,
                            height: "100vh",
                            pt: {
                                xs: "3rem",
                                md: "1rem"
                            },
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}
                    >

                        <Header />
                        <Body />
                    </Stack>

                    <SearchPanel />

                </Box>
            </RelayEnvironmentProvider>
        );
    }

}

export default Client;
