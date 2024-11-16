import React, { Fragment, useEffect } from "react";
import { Box, CircularProgress, Divider, Stack } from "@mui/material";
import WhatsDueItem from "./WhatsDueItem";
import DashboardSection from "../Layout/DashboardSection";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllQuizzes } from "../../redux/api/quizApi";
import { Quiz } from "../../utils/types";

const WhatsDue = ({ loading }: { loading: boolean }) => {
  const dispatch = useAppDispatch();
  const { quizzes } = useAppSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(fetchAllQuizzes());
  }, []);

  return (
    <DashboardSection
      title="What's due"
      description='Sometimes "LATER" becomes "NEVER". Go Now!'
      link="/quizzes"
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          {quizzes.map((item: Quiz, index) => (
            <Fragment key={item._id}>
              <WhatsDueItem item={item} />
              {index !== quizzes.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Fragment>
          ))}
        </Box>
      )}
    </DashboardSection>
  );
};

export default WhatsDue;
