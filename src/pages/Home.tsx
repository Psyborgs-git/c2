import { StarBorder } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ImageListItemProps, ImageListProps, Skeleton, Stack, Typography, keyframes, useMediaQuery } from '@mui/material';
import React from 'react';
import fadeIn from '../animations/fadeIn';

interface HomeProps {

}

interface HomeState {

}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}



class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {};
    }

    _image_list_item = ({ item, index }: { item: any, index: number }) => {

        return (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
                sx={{
                    animation: `${fadeIn} 1s ease-in-out both`,
                    animationDelay: `${index * 200}ms`,
                }}
            >
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    sx={{
                        background:
                            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                    }}
                    title={item.title}
                    position="bottom"
                    actionIcon={
                        <IconButton
                            sx={{ color: 'white' }}
                            aria-label={`star ${item.title}`}
                        >
                            <StarBorder />
                        </IconButton>
                    }
                    actionPosition="left"
                />
            </ImageListItem>
        )
    }

    RenderSkeleton = () => {
        const { List } = this;

        return (
            <List >
                {
                    Array(10).fill("").map(
                        (_, index) => {
                            return (
                                <ImageListItem
                                    cols={3 - (index % 3)}
                                    rows={2 - (index % 3)}
                                >
                                    <Skeleton
                                        variant="rounded"
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </ImageListItem>
                            )
                        })
                }
            </List>
        );
    }

    List = ({ header, children, ...props }: (ImageListProps & { header?: ImageListItemProps })) => {
        const dims = useMediaQuery("(min-width: 1000px)")
        console.log(dims);

        return (
            <ImageList
                sx={{ width: "100%", height: "max-content" }}
                variant="quilted"
                cols={dims ? 8 : 4}
                rowHeight={121}
                {...props}
            >
                {
                    header &&
                    (
                        <ImageListItem
                            cols={dims ? 8 : 4}
                            rows={0.5}
                            sx={{
                                bgcolor: "background.neutral",
                                p: "0.5rem",
                                borderRadius: "0.5rem",
                                alignItems: "center",
                                mb: "1rem",
                            }}
                            {...header}
                        />
                    )
                }
                {children}

            </ImageList>
        )
    }

    RenderData = () => {
        const { List, _image_list_item } = this;

        return (
            <List
                header={{
                    children: (
                        <Box
                            sx={{
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                height: "100%",
                                fontFamily: "Roboto, sans-serif"
                            }}>
                            <Typography variant="h6"  >
                                Trending Now
                            </Typography>
                        </Box>
                    )
                }}
                children={itemData.map((i, x) => <_image_list_item item={i} index={x} />)}
            />
        )
    }

    render() {
        const { } = this.state;
        const { RenderSkeleton, RenderData } = this;

        return (
            <Container sx={{ width: "100%", pt: "1rem" }} >
                <React.Suspense fallback={<RenderSkeleton />}>
                    <RenderData />
                </React.Suspense>
            </Container>
        );
    }

}

export default Home;
