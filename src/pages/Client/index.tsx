import React from 'react';
import { AppBar, Avatar, Box, BoxProps, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Stack, Tab, Tabs, Typography, keyframes } from '@mui/material';
import { Call, Close, Email, Menu } from '@mui/icons-material';
import { RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';
import { connections } from '../../relay/environment';
import { ClientQuery } from './__generated__/ClientQuery.graphql';

const graphql = require('babel-plugin-relay/macro');

interface indexProps {

}

interface indexState {
    sidebarOpen: boolean;
    name: string;
    icon?: string;
    profession: string;
    description: string;
    emails?: string[];
    mobile?: Array<{
        id: string;
        number: string;
        countryCode: string;
    }>;
    lastUpdated?: string;
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


function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            component="div"
            sx={{
                animation: `${tabAnimation} 300ms ease-in-out both`,
                width: "100%",
                height: "max-content",
                minHeight: "200px",
                bgcolor: "background.paper",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                borderRadius: "1rem",
            }}
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


class Client extends React.Component<indexProps, indexState> {

    constructor(props: indexProps) {
        super(props);
        this.state = {
            sidebarOpen: false,
            name: "Jainam Shah",
            profession: "Founder | Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu lectus."
        };
    }

    _toggleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    Header = () => {
        const { sidebarOpen } = this.state;
        return (
            <Box sx={{
                width: "100%",
                height: "100px",
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
            }} >
                <IconButton
                    onClick={this._toggleSidebar}
                    sx={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backdropFilter: "blur(9px)",
                        background: "focal-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
                        zIndex: 99,
                        bgcolor: "background.backdrop",
                        color: "text.primary",
                        display: {
                            xs: "block",
                            md: "none"
                        }
                    }}
                >
                    {sidebarOpen ? <Close /> : <Menu />}
                </IconButton>
            </Box>
        )
    }

    SideBar = () => {
        const data = useLazyLoadQuery<ClientQuery>(
            graphql`
                query ClientQuery {
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

        const _onContactClick = (contact: any) => {
            this.setState({
                name: contact?.name,
                profession: contact?.profession,
                description: contact?.description,
                sidebarOpen: false,
                emails: contact?.emails,
                mobile: contact?.mobile?.edges?.map((edge: any) => edge?.node),
                lastUpdated: contact?.lastUpdated
            })

        }

        return (
            <Box
                sx={{ width: "100%", height: "100%", }}
            >

                <Stack>
                    <Box sx={{ py: 2 }}>
                        <Avatar sx={{ width: 56, height: 56, margin: "auto", mb: 3 }} />
                        <Typography sx={{ textAlign: "center" }} variant="h6" gutterBottom>
                            {data.connection?.app?.name}
                        </Typography>

                        <Divider sx={{ margin: "10px 0px" }} />

                        <List
                            sx={{
                                p: "1rem"
                            }}
                        >
                            {
                                data?.connection?.contacts?.edges
                                    ?.map(
                                        (contact, index) => {
                                            return (
                                                <ListItem
                                                    key={index}
                                                    sx={{
                                                        borderRadius: "1rem",
                                                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                                                        my: "0.5rem",
                                                        "&:hover": {
                                                            background: "linear-gradient(-90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
                                                            color: "white"
                                                        }
                                                    }}
                                                    button onClick={() => _onContactClick(contact?.node)} >

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

                                                    <ListItemIcon>
                                                    </ListItemIcon>

                                                </ListItem>
                                            )
                                        })
                            }
                        </List>

                    </Box>
                </Stack>

            </Box>
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
                        width: "100vw",
                        position: "absolute",
                        backdropFilter: "blur(9px)",
                        zIndex: 1,
                        top: 0,
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

    ProfileInfo = () => {
        const { name, profession } = this.state;
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
                        mx: {
                            md: "2rem"
                        },
                        my: "0.5rem"
                    }}
                >
                    <Avatar
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt={name ?? "icon"}
                        sx={{ objectFit: "fill" }}
                    />
                </IconButton>

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
                    children={profession}
                />

                <Button variant="outlined" sx={{ px: "1rem", borderColor: "#eee" }} >
                    Go to Github
                </Button>

            </Stack>
        )
    }

    ProfileTab = () => {
        return (
            <>
                <Typography
                    variant="subtitle2"
                >
                    Bio
                </Typography>
                <Typography
                    sx={{}}
                    variant="body1"
                >
                    {this.state.description ?? "No description"}
                </Typography>
            </>
        )
    }

    WorkHistoryTab = () => {
        return (
            <>
            </>
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
                                <IconButton color="success" >
                                    <Call />
                                </IconButton>
                                <Typography
                                    variant="caption"
                                    sx={{ ml: "0.5rem" }}
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
                                <IconButton color="info" >
                                    <Email />
                                </IconButton>
                                <Typography
                                    variant="caption"
                                    sx={{ ml: "0.5rem", flex: 1 }}
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
        const { ProfileTab, WorkHistoryTab, ContactTab } = this;
        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };

        return (
            <>

                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: "background.backdrop",
                        borderRadius: "0.5rem",
                        boxShadow: "none",
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
                        <Tab label="Profile"  {...a11yProps(0)} />
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

            </>
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
                    md: "0.5rem"
                }
            }} >

                <ProfileInfo />
                <ProfileTabs />

            </Box>
        )
    }

    render() {
        const { Header, Body, SideBar, SideBarContainer } = this;

        return (
            <RelayEnvironmentProvider environment={connections} >
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        p: 0,
                        bgcolor: 'background.paper',
                        overflowX: "hidden",
                        overflowY: "scroll",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "360px 1fr"
                        },

                        "&::-webkit-scrollbar": {
                            display: "none"
                        }
                    }}
                >

                    <SideBarContainer>
                        <React.Suspense fallback="looadding...." >
                            <SideBar />
                        </React.Suspense>
                    </SideBarContainer>

                    <Stack
                        flex={1}
                        pb={2}
                    >
                        <Header />
                        <Body />
                    </Stack>

                </Box>
            </RelayEnvironmentProvider>
        );
    }

}

export default Client;
