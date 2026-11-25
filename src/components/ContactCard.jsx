import { Box, Typography, Avatar, Divider } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
export default function ContactCard({ name, address, phone }) {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          backgroundColor: "rgba(255,255,255,0.12)",
        },
      }}
    >
      <Avatar
        sx={{
          width: 70,
          height: 70,
          backgroundColor: "rgba(255,255,255,0.1)",
        }}
      >
        <PersonOutlineIcon sx={{ fontSize: 35 }} />
      </Avatar>

      <Typography variant="h5" fontWeight={600}>
        {name}
      </Typography>

      <Divider
        sx={{
          width: "100%",
          borderColor: "rgba(255,255,255,0.2)",
        }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LocationOnOutlinedIcon />
        <Typography variant="body1">{address}</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PhoneOutlinedIcon />
        <Typography variant="body1">{phone}</Typography>
      </Box>
    </Box>
  );
}
