import "../assets/styles/Sidenav.scss";
import logo from "../assets/images/logo.png";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/authSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

const Sidenav = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
  const profilePic = null;
  const navList = [
    {
      name: "Home",
      url: "/home",
      icon: <AiFillHome />,
    },
    {
      name: "Explore",
      url: "/explore",
      icon: <MdOutlineExplore />,
    },
    {
      name: "Messages",
      url: "/messages",
      icon: <TbMessages />,
    },
    {
      name: "Profile",
      url: "/profile",
      icon: (
        <>
          {profilePic === null ? (
            <FaUserCircle />
          ) : (
            <div className="user"></div>
          )}
        </>
      ),
    },
  ];

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <aside>
      <div className="logo">
        <img src={logo} alt="" />
        <span>friendZone</span>
      </div>

      <nav className="side_nav">
        <ul className="nav_items">
          {navList.map((item, index) => (
            <li key={index}>
              <NavLink to={item.url}>
                {item.icon} <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
          {viewportWidth <= 900 && (
            <li>
              <NavLink to="/trending">
                <AiOutlineSearch />
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      <div className="side_nav_logout">
        <button onClick={handleLogout}>
          <BiLogOut /> <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidenav;
