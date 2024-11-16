import axios from "axios";
import { apiUrl } from "../../utils/constants";
import { announcementActions } from "../slices/announcementSlice";
import { AppDispatch } from "../store";

export function fetchAllAnnouncements() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(announcementActions.setLoading());
      const { data } = await axios.get(
        `${apiUrl}/api/v1/announcements?userId=6739137e057c81165c6ba600`
      );
      dispatch(announcementActions.setAnnouncements(data.data));
      dispatch(announcementActions.clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(announcementActions.clearLoading());
    }
  };
}
