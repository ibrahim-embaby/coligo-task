import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { Button } from "@mui/material";
import { logoutUser } from "../../redux/api/authApi";

function LogoutButton() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
