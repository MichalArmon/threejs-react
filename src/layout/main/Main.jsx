import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap: 3,
        position: "relative",
        zIndex: 1,
        mt: 10,
      }}
    >
      <Outlet />
    </Container>
  );
}

export default Main;
