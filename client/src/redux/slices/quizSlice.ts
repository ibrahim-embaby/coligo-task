import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: [],
    loading: false,
  },
  reducers: {
    setQuizzes(state, action) {
      state.quizzes = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
  },
});

export const quizReducer = quizSlice.reducer;
export const quizActions = quizSlice.actions;
