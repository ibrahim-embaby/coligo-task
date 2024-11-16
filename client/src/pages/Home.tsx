import React from "react";
import { Typography, Box } from "@mui/material";
import LoginButton from "../components/Auth/LoginButton";
import { useAppSelector } from "../redux/hooks";
import LogoutButton from "../components/Auth/LogoutButton";

const Home: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  return (
    <Box
      textAlign="center"
      height={"100vh"}
      py={"200px"}
      sx={{ backgroundColor: "hsl(213.33deg 36% 95.1%)" }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Anyware Software
      </Typography>
      {isAuthenticated === "true" ? <LogoutButton /> : <LoginButton />}
    </Box>
  );
};

export default Home;
