import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";

const ExamsCard: React.FC = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          height={{ xs: "auto", md: 180 }}
        >
          <Box flex={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h4"
              sx={{
                background:
                  "linear-gradient(90deg, rgba(29,93,128,1) 0%, rgba(143,210,204,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
                lineHeight: "1",
              }}
              gutterBottom
            >
              EXAMS TIME
            </Typography>
            <Typography variant="body1" color="#808b8a">
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </Typography>
            <Typography
              variant="body2"
              color="hsl(0deg 0.58% 66.47%)"
              sx={{ mt: 1 }}
              fontStyle={"italic"}
            >
              "Nothing happens until something moves." - Albert Einstein
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#4ecdc4",
                fontWeight: "bold",
              }}
            >
              View exams tips
            </Button>
          </Box>
          {/* <Box
            flex={1}
            sx={{ width: "100%", height: { xs: "200px", md: "100%" } }}
          >
            <img
              src="https://img.freepik.com/free-vector/education-learning-concept-love-reading-people-reading-students-studying-preparing-examination-library-book-lovers-readers-modern-literature-flat-cartoon-vector-illustration_1150-60938.jpg?semt=ais_hybrid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box> */}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ExamsCard;
