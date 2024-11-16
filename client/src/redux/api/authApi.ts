import { userActions } from "../slices/userSlice";
import { AppDispatch } from "../store";

export function loginUser() {
  return (dispatch: AppDispatch) => {
    try {
      dispatch(userActions.login());
    } catch (error) {
      dispatch(userActions.logout());
    }
  };
}

export function logoutUser() {
  return (dispatch: AppDispatch) => {
    dispatch(userActions.logout());
  };
}
