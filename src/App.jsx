import Main from "./layout/main/Main";
import Home from "./pages/Home";
import Scene from "./Scene";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
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

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
