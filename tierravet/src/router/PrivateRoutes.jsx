import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ redirectPath = "/login" }) => {
  const { isAuth } = useSelector((store) => store.auth);
  if (!isAuth) return <Navigate to={redirectPath} />;
  return <Outlet />;
};

export default PrivateRoutes;
