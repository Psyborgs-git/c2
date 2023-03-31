import { CircularProgress, Container, Skeleton } from "@mui/material";

function FallBackLoader() {
    return (
        <Container
            sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}  >
            <Skeleton />
        </Container>
    );
}

export default FallBackLoader;