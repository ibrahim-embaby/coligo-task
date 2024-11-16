import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAnnouncements } from "../redux/api/announcementApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import AnnouncementsList from "../components/Dashboard/AnnouncementsList";
import AnnouncementItem from "../components/Dashboard/AnnouncementItem";
import { Announcement } from "../utils/types";

const Announcements: React.FC = () => {
  const dispatch = useAppDispatch();
  const { announcements } = useAppSelector((state: any) => state.announcements);

  useEffect(() => {
    dispatch(fetchAllAnnouncements());
  }, []);
  return (
    <Stack>
      {announcements.map((announcement: Announcement, index: number) => (
        <AnnouncementItem key={index} announcement={announcement} />
      ))}
    </Stack>
  );
};

export default Announcements;
