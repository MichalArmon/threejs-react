import Scene from "./Scene";
import { Box, Typography, Button } from "@mui/material";

export default function App() {
  return (
    <>
      <Scene />

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          gap: 3,
        }}
      >
        <Typography variant="h2">
          My Website
        </Typography>

        <Typography variant="h5">
          Welcome to my world
        </Typography>

        <Button variant="contained">
          Get Started
        </Button>
      </Box>
    </>
  );
}