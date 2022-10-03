import { Outlet } from "react-router-dom";
import Login from "../Pages/Login";

function PrivateRoutes({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Login />;
}

export default PrivateRoutes;
