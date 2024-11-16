import { CircularProgress, Stack } from "@mui/material";
import AnnouncementItem from "./AnnouncementItem";
import DashboardSection from "../Layout/DashboardSection";
import { useTranslation } from "react-i18next";
import { Announcement } from "../../utils/types";

const AnnouncementsList = ({
  announcements,
  loading,
}: {
  announcements: Announcement[];
  loading: boolean;
}) => {
  return (
    <DashboardSection
      title={"Announcements"}
      description="We educate worries. Keep updated :]"
      link="/announcements"
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Stack gap={2}>
          {announcements.map((announcement: Announcement) => (
            <AnnouncementItem
              key={announcement._id}
              announcement={announcement}
            />
          ))}
        </Stack>
      )}
    </DashboardSection>
  );
};

export default AnnouncementsList;
