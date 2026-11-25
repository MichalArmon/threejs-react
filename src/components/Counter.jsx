import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("counter")) || 0;
  });

  useEffect(() => {
    const correctCount = localStorage.getItem("counter");
    setCount(Number(correctCount));
  }, [count]);

  const onInCount = () => {
    setCount((prev) => prev + 1);
    localStorage.setItem("counter", count + 1);
  };
  const onDeCount = () => {
    setCount((prev) => prev - 1);
    localStorage.setItem("counter", count - 1);
  };

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
        marginBottom: 10,
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
          onClick={onDeCount}
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
          onClick={onInCount}
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
        onClick={() => {
          setCount(0);
          localStorage.setItem("counter", 0);
        }}
        sx={{ mt: 3, color: "white", opacity: 0.7 }}
      >
        Reset
      </Button>
    </Box>
  );
}
