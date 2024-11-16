import { configureStore } from "@reduxjs/toolkit";
import { announcementReducer } from "./slices/announcementSlice";
import { quizReducer } from "./slices/quizSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    announcements: announcementReducer,
    quizzes: quizReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
