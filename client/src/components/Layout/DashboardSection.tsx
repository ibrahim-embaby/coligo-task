import React from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Link } from "react-router-dom";

const DashboardSection: React.FC<{
  children: React.ReactNode;
  title: string;
  description: string;
  link: string;
}> = ({ children, title, description, link }) => {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Card>
      <CardContent>
        <Box
          mb={3}
          display={"flex"}
          flexDirection={isSmallScreen ? "column" : "row"}
          justifyContent={isSmallScreen ? "center" : "space-between"}
        >
          <Stack
            textAlign={isSmallScreen ? "center" : "left"}
            mb={isSmallScreen ? 2 : 0}
          >
            <Typography
              variant="h6"
              fontWeight={"bold"}
              color="#647170"
              lineHeight={1}
            >
              {title}
            </Typography>
            <Typography color="#d5dee4" fontSize={12}>
              {description}
            </Typography>
          </Stack>
          <Link to={link} style={{ textDecoration: "none" }}>
            <Typography
              color="#4ecdc4"
              fontWeight={"bold"}
              sx={{
                cursor: "pointer",
              }}
            >
              All
            </Typography>
          </Link>
        </Box>
        {children}
      </CardContent>
    </Card>
  );
};
export default DashboardSection;
