import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {

};

function Header(props: HeaderProps) {
    const nav = useNavigate();
    // const navigation = useNavigation();
    const _handleLogoClick = () => {
        nav("/");
    }

    return (
        <Box
            component="header"
            sx={{
                display: "flex",
                width: "100%",
                height: "80px",
                alignSelf: "flex-start",
                bgcolor: "background.paper",
                p: {
                    xs: "1rem",
                    md: "2rem"
                }
            }}
        >
            <IconButton onClick={_handleLogoClick} sx={{ ":hover": { scale: "1.05", transition: "scale 0.27ms" } }}>
                <img alt=" " src="/logo.svg" height="72px" width="72px" />
            </IconButton>
            <Typography variant="h4" sx={{ fontFamily: "Segoe UI Symbol", display: "flex", alignItems: "center", ml: "1rem" }}>
                Cloud Drobe
            </Typography>
        </Box>
    );

};

export default Header;
