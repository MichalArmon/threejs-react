import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        width: 320,
        p: 5,
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ letterSpacing: 4, opacity: 0.7 }}>
        COUNTER
      </Typography>

      <Typography sx={{ fontSize: 100, fontWeight: 300, my: 2 }}>
        {count}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => setCount(count - 1)}
          sx={{
            color: "white",
            borderColor: "rgba(255,255,255,0.3)",
            fontSize: 30,
            borderRadius: 3,
          }}
        >
          −
        </Button>

        <Button
          variant="contained"
          onClick={() => setCount(count + 1)}
          sx={{
            backgroundColor: "#8064cf",
            fontSize: 30,
            borderRadius: 3,
          }}
        >
          +
        </Button>
      </Box>

      <Button
        onClick={() => setCount(0)}
        sx={{ mt: 3, color: "white", opacity: 0.7 }}
      >
        Reset
      </Button>
    </Box>
  );
}
