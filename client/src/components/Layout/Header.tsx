import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Badge,
  Stack,
  BadgeProps,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC<{ toggleSidebar?: () => void }> = ({
  toggleSidebar,
}) => {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "40px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    color: "#a8bbc6",
    border: "1px solid #a8bbc6",
    width: isSmallScreen ? "100%" : "240px",
    margin: isSmallScreen ? "10px 0" : "0 20px",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 3,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#4dcdc4",
    },
  }));

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "white",
          padding: isSmallScreen ? "10px" : "20px",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: isSmallScreen ? "flex-start" : "center",
        }}
      >
        {isSmallScreen && toggleSidebar && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ marginBottom: "10px" }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          color="#5f6d6c"
          fontWeight="bold"
          variant="h5"
          sx={{
            flexGrow: isSmallScreen ? 0 : 1,
            width: isSmallScreen ? "100%" : "auto",
            textAlign: isSmallScreen ? "center" : "left",
            marginBottom: isSmallScreen ? "10px" : 0,
          }}
        >
          Welcome Ibrahim,
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Stack
          direction="row"
          gap={2}
          alignItems={"center"}
          sx={{
            marginTop: isSmallScreen ? "10px" : 0,
            justifyContent: isSmallScreen ? "center" : "flex-end",
            width: isSmallScreen ? "100%" : "auto",
          }}
        >
          <StyledBadge badgeContent={1}>
            <NotificationsIcon
              sx={{
                color: "#3b8297",
                fontSize: "30px",
              }}
            />
          </StyledBadge>
          <StyledBadge badgeContent={3}>
            <MailIcon
              sx={{
                color: "#3b8297",
                fontSize: "30px",
              }}
            />
          </StyledBadge>
          <Avatar
            src="https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg"
            sx={{
              width: isSmallScreen ? 35 : 50,
              height: isSmallScreen ? 35 : 50,
            }}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
