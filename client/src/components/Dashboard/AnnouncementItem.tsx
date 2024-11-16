import React from "react";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { Announcement } from "../../utils/types";

interface AnnouncementItemProps {
  announcement: Announcement;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  announcement,
}) => {
  return (
    <Stack direction="row">
      <Stack direction="row" flex={3}>
        <Avatar sx={{ mr: 2 }} src={announcement?.creatorId.photo} />

        <Box>
          <Typography variant="subtitle1" color="#788483">
            {announcement?.creatorId.name}
          </Typography>
          <Typography variant="body2" color="#bac9d3">
            {announcement?.courseId?.title}
          </Typography>
        </Box>
      </Stack>
      <Divider orientation="vertical" sx={{ mt: 2 }} />
      <Typography variant="body2" flex={8} color="#bac9d3">
        {announcement.content}
      </Typography>
    </Stack>
  );
};

export default AnnouncementItem;
