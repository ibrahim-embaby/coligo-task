import React, { useEffect } from "react";
import { Box, CircularProgress, Grid, useTheme } from "@mui/material";
import ExamsCard from "../components/Dashboard/ExamsCard";
import WhatsDue from "../components/Dashboard/WhatsDue";
import Layout from "../components/Layout/Layout";
import AnnouncementsList from "../components/Dashboard/AnnouncementsList";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchAllAnnouncements } from "../redux/api/announcementApi";

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { announcements, loading } = useAppSelector(
    (state: any) => state.announcements
  );

  useEffect(() => {
    dispatch(fetchAllAnnouncements());
  }, []);

  return (
    <Layout>
      <Box p={3}>
        <ExamsCard />
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <AnnouncementsList
              announcements={announcements}
              loading={loading}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <WhatsDue loading={loading} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;
