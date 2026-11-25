import { Box } from "@mui/material";
import Counter from "../components/Counter";
import ContactCard from "../components/ContactCard";

const people = [
  {
    id: 1,
    name: "Emma Wilson",
    address: "15 Rothschild Blvd, Tel Aviv",
    phone: "050-123-4567",
  },
  {
    id: 2,
    name: "James Miller",
    address: "24 Dizengoff St, Tel Aviv",
    phone: "052-234-5678",
  },
  {
    id: 3,
    name: "Olivia Brown",
    address: "8 Bialik St, Ramat Gan",
    phone: "054-345-6789",
  },
  {
    id: 4,
    name: "Noah Davis",
    address: "32 Herzl St, Herzliya",
    phone: "053-456-7890",
  },
  {
    id: 5,
    name: "Sophia Taylor",
    address: "12 Weizmann St, Kfar Saba",
    phone: "058-567-8901",
  },
  {
    id: 6,
    name: "Liam Anderson",
    address: "45 Ben Gurion St, Bat Yam",
    phone: "050-678-9012",
  },
  {
    id: 7,
    name: "Isabella Martin",
    address: "7 Allenby St, Tel Aviv",
    phone: "052-789-0123",
  },
  {
    id: 8,
    name: "Lucas White",
    address: "19 Jabotinsky St, Ramat Gan",
    phone: "054-890-1234",
  },
];

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {people.map((p) => {
          return (
            <ContactCard name={p.name} phone={p.phone} address={p.address} />
          );
        })}
      </Box>
    </Box>
  );
}

export default Home;
