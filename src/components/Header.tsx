import "../assets/styles/Header.scss";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const profilePic = null;
  const [viewportWidth, setviewPortWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setviewPortWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [viewportWidth]);

  return (
    <header>
      <div className="header_wrapper">
        {viewportWidth <= 768 && (
          <div className="header_logo">
            <img src={logo} alt="" />
          </div>
        )}

        {viewportWidth > 660 && (
          <form className="search_form">
            <input type="text" placeholder="Search friendZone" />
            <AiOutlineSearch />
          </form>
        )}

        <div className="header_items">
          <button className="header_plus-icon">
            <AiOutlinePlus />
          </button>
          <button className="header_mode">
            <MdOutlineLightMode />
          </button>
          {viewportWidth >= 768 && (
            <button className="header_notification">
              <IoMdNotifications />
            </button>
          )}
          <div className="header_user">
            {profilePic === null ? <FaUserCircle /> : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
