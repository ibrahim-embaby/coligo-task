import axios from "axios";
import { quizActions } from "../slices/quizSlice";
import { AppDispatch } from "../store";
import { apiUrl } from "../../utils/constants";

export function createQuizApi() {}
export function fetchAllQuizzes() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(quizActions.setLoading());
      const { data } = await axios.get(
        `${apiUrl}/api/v1/quizzes?userId=6739137e057c81165c6ba600`
      );
      dispatch(quizActions.setQuizzes(data.data));
      dispatch(quizActions.clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(quizActions.clearLoading());
    }
  };
}
