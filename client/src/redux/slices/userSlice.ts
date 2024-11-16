// src/features/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: localStorage.getItem("isAuhtenticated") || "false",
  },
  reducers: {
    login: (state) => {
      localStorage.setItem("isAuhtenticated", "true");
      state.isAuthenticated = localStorage.getItem("isAuhtenticated") || "true";
    },
    logout: (state) => {
      localStorage.removeItem("isAuhtenticated");
      state.isAuthenticated = "false";
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
