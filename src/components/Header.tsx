import "../assets/styles/Header.scss";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const profilePic = null;

  return (
    <header>
      <div className="header_wrapper">
        <form className="search_form">
          <input type="text" placeholder="Search friendZone" />
          <AiOutlineSearch />
        </form>

        <div className="header_items">
          <button className="header_plus-icon">
            <AiOutlinePlus />
          </button>
          <button className="header_notification">
            <IoMdNotifications />
          </button>
          <button className="header_mode">
            <MdOutlineLightMode />
          </button>
          <div className="header_user">
            {profilePic === null ? <FaUserCircle /> : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
