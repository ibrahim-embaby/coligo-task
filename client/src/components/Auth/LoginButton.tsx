import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { loginUser } from "../../redux/api/authApi";

const LoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(loginUser());
    navigate("/dashboard");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogin}>
      Login
    </Button>
  );
};

export default LoginButton;
