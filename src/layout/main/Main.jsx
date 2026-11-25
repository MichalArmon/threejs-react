import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <Box
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
      }}
    >
      <Outlet />
    </Box>
  );
}

export default Main;
