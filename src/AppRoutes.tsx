import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useAppSelector } from "./app/hooks";
import Home from "./pages/Home";
import Sidenav from "./components/Sidenav";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import MobileNav from "./components/MobileNav";

const AppRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  const pathExclusionArray = ["/register", "/login"];
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <>
      {pathExclusionArray.indexOf(pathname) < 0 && (
        <>
          <Header />
          {viewportWidth > 768 ? <Sidenav /> : <MobileNav />}
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
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
