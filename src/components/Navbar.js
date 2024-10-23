import "./Navbar.css";
import logo from "../images/logo.webp";
import { IoMenu } from "react-icons/io5";
import links from "../data";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="navigation">
        <div className="nav-header">
          <img src={logo} />
          <button onClick={() => setShowMenu(!showMenu)}>
            <IoMenu className="hamburger-icon" />
          </button>
        </div>
        <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
          <ul>
            {links.map((oneLink) => {
              const { id, url, text } = oneLink;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
