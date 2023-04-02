import { Avatar, AvatarGroup, Box, Collapse, Container, IconButton, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { useParams } from 'react-router-dom';
import { ApparelQuery } from './__generated__/ApparelQuery.graphql';
import { Bookmark, BookmarkBorder, Star, StarBorder } from '@mui/icons-material';

const graphql = require('babel-plugin-relay/macro');

interface ApparelProps {

}

interface ApparelState {

}

class Apparel extends React.Component<ApparelProps, ApparelState> {

    constructor(props: ApparelProps) {
        super(props);
        this.state = {};
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

    RenderData = () => {
        const { id } = useParams();
        const { Header } = this;
        const data = useLazyLoadQuery<ApparelQuery>(
            graphql`
                query ApparelQuery($id: ID!) {
                    apparel(id: $id) {
                        id
                        name
                        description
                        price
                        category
                        avrRating
                        isLiked
                        reviews {
                            edges {
                                node {
                                    id
                                    rating
                                    comment
                                }
                            }
                        }
                        owners {
                            edges {
                                node {
                                    id
                                    handle
                                    icon{
                                    id url
                                    }
                                }
                            }
                        }
                        outfits {
                            edges {
                                node {
                                    id
                                    thumbnail{
                                    id url
                                    }
                                }
                            }
                        }
                        media {
                            edges {
                                node {
                                    id
                                    url
                                    type
                                }
                            }
                        }
                        numOfReviews
                        thumbnail{
                            id url
                        }
                    }
                }
            `,
            { id: id ?? "QXBwYXJlbDo4ZjRkYjZiYi1kZmNhLTQ3ZGQtYjE0MC1lNTRlZjc1NmFhMDg=" },
            { fetchPolicy: 'store-or-network' }
        );


        return (
            <>
                <Header
                    title={data?.apparel?.name}
                    subtitle={data?.apparel?.category}
                    isLiked={data?.apparel?.isLiked}
                />


                {/*  thumbnail  */}
                <Box sx={{ width: "90%", maxWidth: "sm", height: "300px", my: "1rem", mx: { xs: "auto", md: "1rem" } }}>
                    <img
                        // @ts-ignore
                        src={data?.apparel?.thumbnail?.url} alt={data?.apparel?.name}
                        // src="https://source.unsplash.com/random"
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }}
                    />
                </Box>


                {/* other media list */}
                <Box
                    sx={{
                        height: "120px",
                        width: "100%",
                        overflowX: "scroll",
                        overflowY: "hidden",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        display: data.apparel?.media?.edges?.length === 0 ? "none" : "block"
                    }}>
                    <Stack direction="row" gap={1} my="10px" pl="1rem" >
                        {
                            data.apparel?.media?.edges.map(
                                (x, i) => (
                                    <img
                                        src={x?.node?.url ?? "https://source.unsplash.com/random"}
                                        key={x?.node?.id}
                                        alt={x?.node?.id}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                            borderRadius: "1rem"
                                        }}
                                    />
                                ))
                        }
                    </Stack>
                </Box>

                {/* ratings */}
                <Stack direction="row" my={1} gap={1}>
                    <Typography>
                        Ratings ({data?.apparel?.numOfReviews ?? 0})
                    </Typography>
                    {Array(Math.floor((data?.apparel?.avrRating ?? 0)))
                        .fill("")
                        .map(
                            (_, i) => (<Star sx={{ color: "gold" }} />)
                        )
                    }
                    {Array(Math.floor(5 - (data?.apparel?.avrRating ?? 0)))
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
                        {data?.apparel?.description?.length ? data?.apparel?.description : " no description available "}
                    </Typography>
                </Box>

                {/* Outfits list */}
                <Stack >
                    <Typography variant="overline" >Outfits containing {data?.apparel?.name ?? " - "} </Typography>
                    <Box
                        sx={{
                            height: "120px",
                            width: "100%",
                            overflowX: "scroll",
                            overflowY: "hidden",
                            "&::-webkit-scrollbar": {
                                display: "none",
                            }
                        }}
                    >
                        <Stack direction="row" gap={1} my="10px" >
                            {
                                Array(10).fill("").map((_, i) => (
                                    <img
                                        src="https://source.unsplash.com/random"
                                        alt="random"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "fill",
                                            borderRadius: "1rem"
                                        }}
                                    />
                                ))
                            }
                        </Stack>
                    </Box>
                </Stack>

                {/* owners list */}
                {data?.apparel?.owners?.edges?.length ?
                    <Stack direction="row" my="1rem" alignItems="center" gap={1} justifyContent="space-between" >
                        <Typography variant="overline">Proud Owners</Typography>
                        <AvatarGroup>
                            {
                                data?.apparel?.owners?.edges
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
        const { RenderData } = this;

        return (
            <Container sx={{ pt: "1rem" }}>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <RenderData />
                </React.Suspense>
            </Container>
        );
    }

}

export default Apparel;
