import "../assets/styles/MobileNav.scss";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);
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
      name: "Notification",
      url: "/notification",
      icon: <IoMdNotifications />,
    },
    {
      name: "Messages",
      url: "/messages",
      icon: <TbMessages />,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <div className="mobile_nav_wrapper">
      <nav className="mobile_nav">
        <ul className="mobile_nav_items">
          {navList.map((items, index) => (
            <li key={index}>
              <NavLink to={items.url}>{items.icon}</NavLink>
            </li>
          ))}
          {viewportWidth < 660 && (
            <li>
              <NavLink to="/trending">
                <AiOutlineSearch />
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
