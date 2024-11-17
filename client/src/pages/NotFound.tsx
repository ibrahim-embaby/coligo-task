import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box textAlign={"center"} pt={"100px"}>
      <Typography variant="h5">404 - Page Not Found</Typography>
      <Link to={"/"}>return to home</Link>
    </Box>
  );
};

export default NotFound;
