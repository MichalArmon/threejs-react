import Counter from "./components/Counter";
import Scene from "./Scene";
import { Box, Typography, Button } from "@mui/material";
Counter;

export default function App() {
  return (
    <>
      {/* BACKGROUND */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Scene />
      </Box>

      <Box
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
        <Counter />
      </Box>
    </>
  );
}
