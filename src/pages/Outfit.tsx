import React from 'react';
import { Bookmark, BookmarkBorder, Star, StarBorder } from '@mui/icons-material';
import { Avatar, AvatarGroup, Box, Card, CardContent, CardMedia, Container, IconButton, Skeleton, Stack, Typography } from '@mui/material';

import { useLazyLoadQuery } from 'react-relay';
import { useParams } from 'react-router-dom';

import { OutfitQuery } from './__generated__/OutfitQuery.graphql';
const graphql = require('babel-plugin-relay/macro');

interface OutfitProps {

}

interface OutfitState {

}

class Outfit extends React.Component<OutfitProps, OutfitState> {

    constructor(props: OutfitProps) {
        super(props);
        this.state = {};
    }

    Loader = () => {
        return (
            <Stack gap={1} >
                <Skeleton variant="text" width={210} height={45} />
                <Skeleton variant="text" width={180} height={36} />
                <Skeleton variant="rounded" width={"100%"} height={300} />
                <Skeleton variant="text" width={180} />
                <Skeleton variant="text" width={150} />
                <Skeleton variant="rounded" width={"100%"} height={63} />
                <Skeleton variant="rounded" width={"70%"} height={63} />
            </Stack>
        )
    }

    Header = ({ title, subtitle, isLiked }: { isLiked?: boolean | null; title?: string | null; subtitle?: string | null; }) => {
        return (
            <Stack direction="row" sx={{ alignItems: "center", px: "0.5rem" }} >
                <Stack sx={{ flex: 1 }} >
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="body1" textTransform="capitalize">{subtitle}</Typography>
                </Stack>
                <IconButton>
                    {
                        isLiked ?
                            <Bookmark sx={{ color: "primary.main" }} />
                            : <BookmarkBorder sx={{ color: "secondary.neutral" }} />
                    }
                </IconButton>
            </Stack>
        )
    }


    LoadData = () => {
        const { id } = useParams();
        const { Header } = this;
        const data = useLazyLoadQuery<OutfitQuery>(
            graphql`
                query OutfitQuery($id: ID!) {
                outfit(id:$id){
                    id
                    name
                    description
                    isLiked
                    category
                    avrRating
                    numOfReviews
                    thumbnail {id url}
                    reviews{edges {node { id rating comment}}}
                    liked{edges {node { id handle icon {id url}}}}
                    items{edges{node{id name thumbnail{id url}}}}
                    alsoHas {edges {node { id handle icon{id url}}}}
                }
            }
            `,
            { id: id ?? "T3V0Zml0OjQzY2M1ZDFhLWIwOTktNDRlMi05YmQ5LWQ1MDAxYjEyN2ZkYg==" },
            { fetchPolicy: "store-or-network" }
        )

        return (
            <>
                <Header title={data?.outfit?.name} subtitle={data?.outfit?.category} isLiked={data?.outfit?.isLiked} />

                {/* thumbnail */}
                <Box sx={{ width: "90%", maxWidth: "sm", height: "300px", my: "1rem", mx: { xs: "auto", md: "1rem" } }}>
                    <img
                        // @ts-ignore
                        src={data?.outfit?.thumbnail?.url} alt={data?.outfit?.name}
                        // src="https://source.unsplash.com/random"
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }}
                    />
                </Box>


                {/* items */}
                <Box
                    sx={{
                        height: "max-content",
                        width: "100%",
                        overflowX: "scroll",
                        overflowY: "hidden",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        display: data.outfit?.items?.edges?.length === 0 ? "none" : "block"
                    }}>

                    <Typography variant="overline" sx={{ px: "1rem" }}>This outfit contains</Typography>

                    <Stack direction="row" gap={1} py="15px" pl="1rem" >
                        {
                            data.outfit?.items?.edges.map(
                                (x, i) => (
                                    <Card sx={{ width: "100px", height: "100px" }}>

                                        <CardMedia>
                                            <img
                                                src={x?.node?.thumbnail?.url ?? "https://source.unsplash.com/random"}
                                                key={x?.node?.id}
                                                alt={x?.node?.id}
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                    objectFit: "cover",
                                                    borderRadius: "1rem",
                                                    alignSelf: "center",
                                                }}
                                            />
                                        </CardMedia>

                                        <CardContent sx={{
                                            backdropFilter: "blur(9px)",
                                            position: "absolute",
                                            bottom: 0,
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            opacity: 0,
                                            transition: "opacity 0.3s ease-in-out",
                                            "&:hover": {
                                                opacity: 1,
                                            }
                                        }}>
                                            <Typography color="background.paper" variant="overline" flex={1} textAlign="center" >
                                                {x?.node?.name}
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                ))
                        }
                    </Stack>
                </Box>

                {/* reviews */}
                <Stack direction="row" my={1} gap={1}>
                    <Typography>
                        Ratings ({data?.outfit?.numOfReviews ?? 0})
                    </Typography>
                    {Array(Math.floor((data?.outfit?.avrRating ?? 0)))
                        .fill("")
                        .map(
                            (_, i) => (<Star sx={{ color: "gold" }} />)
                        )
                    }
                    {Array(Math.floor(5 - (data?.outfit?.avrRating ?? 0)))
                        .fill("")
                        .map(
                            (_, i) => (<StarBorder sx={{ color: "background.neutral", ":hover": { color: "gold" } }} />)
                        )
                    }
                </Stack>

                {/* description */}
                <Box sx={{ my: "1rem" }}>
                    <Typography variant="h5">Description</Typography>
                    <Typography
                        variant="caption"
                    >
                        {data?.outfit?.description?.length ? data?.outfit?.description : " no description available "}
                    </Typography>
                </Box>

                {/* liked by */}
                {data?.outfit?.liked?.edges?.length ?
                    <Stack direction="row" my="1rem" alignItems="center" gap={1} justifyContent="space-between" >
                        <Typography variant="overline">Likes </Typography>
                        <AvatarGroup>
                            {
                                data?.outfit?.liked?.edges
                                    ?.map(
                                        (owner) => (
                                            <Avatar
                                                src={owner?.node?.icon?.url ?? "https://source.unsplash.com/random"}
                                                alt={owner?.node?.handle ?? " - "}
                                                children={owner?.node?.handle?.charAt(0)}
                                            />
                                        )
                                    )
                            }
                        </AvatarGroup>
                    </Stack>
                    : null
                }

                {/* Also has this outfit */}
                {data?.outfit?.alsoHas?.edges?.length ?
                    <Stack direction="row" my="1rem" alignItems="center" gap={1} justifyContent="space-between" >
                        <Typography variant="overline">Accounts with this outfit</Typography>
                        <AvatarGroup>
                            {
                                data?.outfit?.alsoHas?.edges
                                    ?.map(
                                        (owner) => (
                                            <Avatar
                                                src={owner?.node?.icon?.url ?? "https://source.unsplash.com/random"}
                                                alt={owner?.node?.handle ?? " - "}
                                                children={owner?.node?.handle?.charAt(0)}
                                            />
                                        )
                                    )
                            }
                        </AvatarGroup>
                    </Stack>
                    : null
                }

            </>
        )
    }

    render() {
        const { Loader, LoadData } = this;

        return (
            <Container sx={{ pt: "2rem" }} >
                <React.Suspense fallback={<Loader />} >
                    <LoadData />
                </React.Suspense>
            </Container>
        );
    }

}

export default Outfit;
