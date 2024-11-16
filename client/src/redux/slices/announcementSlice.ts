import { createSlice } from "@reduxjs/toolkit";

const announcementSlice = createSlice({
  name: "announcements",
  initialState: {
    announcements: [],
    loading: false,
  },
  reducers: {
    setAnnouncements(state, action) {
      state.announcements = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});

export const announcementReducer = announcementSlice.reducer;
export const announcementActions = announcementSlice.actions;
