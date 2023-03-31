import React from 'react';
import { Avatar, Box, BoxProps, IconButton } from '@mui/material';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Header from './components/header';
import { Home } from '@mui/icons-material';

function Root(props: BoxProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        bgcolor: "background.paper",
        flexDirection: "column"
      }}
      {...props}
    />
  );
}

function Footer(props: BoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "3rem",
        alignSelf: "flex-start",
        bgcolor: "background.paper",
        p: "2rem",
        mt: "1rem"
      }}
      {...props}
    />
  );
}

function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        position: "relative",
        flexDirection: "column",
        overflowY: "scroll",
        overflowX: "hidden",
        bgcolor: "background.surface",
        borderRadius: "2rem",
        boxShadow: "0 0 0.5rem 0.1rem rgba(0,0,0,0.2)",

        "&::-webkit-scrollbar": {
          display: "none",
        }
      }}
      {...props}
    />
  );
}

function NavBar(props: BoxProps) {
  return (
    <Box
      component="nav"
      sx={[
        theme => ({
          display: "flex",
          height: "96%",
          width: {
            xs: "4rem",
            md: "6rem",
          },
          alignSelf: "center",
          flexDirection: "column",
          bgcolor: "background.paper",
          borderRadius: "1.5rem",
          py: "1rem",
          px: "0.5rem",
          boxShadow: "0 0 0.5rem 0.1rem rgba(0,0,0,0.2)",
          zIndex: 1,
          overflowY: "scroll",
          overflowX: "hidden",

          "&::-webkit-scrollbar": {
            display: "none",
          },

          // ":hover": {
          //   boxShadow: "0 0 0.5rem 0.1rem rgba(0,0,0,0.4)",
          //   transform: "translateX(-6rem)",
          //   transition: "transform 0.5s ease-in-out",
          // }
        })
      ]}
      {...props}
    />
  )
}

function Content(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        borderRadius: "2rem",
        gap: "0.5rem",
        overflow: "hidden",
        position: "relative",
        m: {
          xs: "0.33rem",
          sm: "1rem",
          md: "2rem",
        },
        p: {
          xs: "0.5rem",
          md: "0.9rem",
        },
        height: {
          xs: "calc(100vh - 40px)",
          md: "calc(100vh - 40px - 2rem)",
        },
      }}
      {...props}
    />
  )
}

function Layout() {
  const nav = useNavigate();
  return (
    <Root>

      <Header />

      <Content>

        <NavBar>
          <IconButton
            sx={{
              alignSelf: "center",
              mb: "1rem",
            }}
            children={<Avatar children='JS' />}
            onClick={() => nav("/auth")}
          />

          <IconButton
            sx={{
              alignSelf: "center",
              mb: "1rem",
            }}
            children={<Home />}
            onClick={() => nav("/")}
          />

        </NavBar>

        <Main>
          <Outlet />

          <Footer />
        </Main>

      </Content>

    </Root>
  );
}

export default Layout;
