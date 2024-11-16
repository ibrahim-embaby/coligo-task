import React, { useState } from "react";
import {
  List,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Drawer,
  IconButton,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BookIcon from "@mui/icons-material/Book";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import AnnouncementsIcon from "@mui/icons-material/Announcement";

const menuItems = [
  { id: 1, text: "Dashboard", icon: <HomeIcon /> },
  { id: 2, text: "Schedule", icon: <EventNoteIcon /> },
  { id: 3, text: "Courses", icon: <BookIcon /> },
  { id: 4, text: "Gradebook", icon: <AssignmentIcon /> },
  { id: 5, text: "Performance", icon: <BarChartIcon /> },
  { id: 6, text: "Announcements", icon: <AnnouncementsIcon /> },
];

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(menuItems[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check screen size for responsiveness
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const sidebarContent = (
    <Box
      sx={{
        width: 240,
        background:
          "linear-gradient(90deg, rgba(21,85,122,1) 0%, rgba(76,149,162,1) 100%);",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          padding: 2,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
        }}
      >
        Coligo
      </Typography>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              sx={{
                cursor: "pointer",
                color: item.id === selectedItem ? "#4ecdc4" : "white",
                backgroundColor: item.id === selectedItem ? "white" : "unset",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#4ecdc4",
                  "& .MuiListItemIcon-root": {
                    color: "#4ecdc4",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    menuItems[index].id === selectedItem ? "#4ecdc4" : "white",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight:
                    menuItems[index].id === selectedItem ? "bold" : "unset",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          sx={{
            position: "fixed",
            top: 10,
            left: 10,
            zIndex: 1201,
            color: "black",
          }}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant={isMobile ? "temporary" : "permanent"}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 241,
          },
        }}
      >
        {sidebarContent}
      </Drawer>

      {!isMobile && (
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: 240,
            flexShrink: 0,
          }}
        >
          {sidebarContent}
        </Box>
      )}
    </>
  );
};

export default Sidebar;
