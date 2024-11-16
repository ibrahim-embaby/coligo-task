import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../Dashboard/Sidebar";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "hsl(213.33deg 36% 95.1%)" }}
      >
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
