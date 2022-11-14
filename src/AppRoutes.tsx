import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useAppSelector } from "./app/hooks";
import Home from "./pages/Home";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";

const AppRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  const pathExclusionArray = ["/", "/register", "/login"];

  return (
    <>
      {pathExclusionArray.indexOf(pathname) < 0 && (
        <>
          <Header />
          <Sidenav />
        </>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedRoutes isAllowed={user} />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
