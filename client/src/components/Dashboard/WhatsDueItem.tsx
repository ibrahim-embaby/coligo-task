import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Quiz } from "../../utils/types";
import { formatDate } from "../../utils/helpers";

function WhatsDueItem({ item }: { item: Quiz }) {
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box sx={{ mt: 2, textAlign: isSmallScreen ? "center" : "left" }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: isSmallScreen ? "center" : "flex-start",
        }}
      >
        {item.type === "Quiz" ? (
          <HourglassTopIcon sx={{ color: "#4dcdc4" }} />
        ) : (
          <AssignmentTurnedInIcon sx={{ color: "#4dcdc4" }} />
        )}
        <Typography color="#647170" fontWeight={"bold"} variant="subtitle2">
          {item.title}
        </Typography>
      </Typography>
      <Box my={1}>
        <Typography variant="body2" sx={{ color: "#bbcad3" }}>
          Course: {item?.courseId.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbcad3" }}>
          Topic: {item.topic}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbcad3", mt: 0.5 }}>
          Due to: {formatDate(new Date(item.dueDate))}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mt: 1,
          textTransform: "none",
          width: "100%",
          color: "#4dcdc4",
          fontWeight: "bold",
          backgroundColor: "transparent",
          border: "2px solid #4dcdc4",
          borderRadius: "10px",
        }}
      >
        {item.type === "quiz" ? "View Quiz" : "Complete Assignment"}
      </Button>
    </Box>
  );
}

export default WhatsDueItem;
