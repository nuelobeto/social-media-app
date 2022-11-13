import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useAppSelector } from "./app/hooks";
import Home from "./pages/Home";

const AppRoutes = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
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
