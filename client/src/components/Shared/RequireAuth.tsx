import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  return isAuthenticated === "true" ? children : <Navigate to="/" />;
};

export default RequireAuth;
