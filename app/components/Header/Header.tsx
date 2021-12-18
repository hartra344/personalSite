import Nav from "./Nav";
import { useLockBodyScroll, useToggle } from "react-use";
import { hamburgerIcon, closeIcon, myLogo } from "../Global/icon";
import { NavLink } from "remix";
import { useMedia } from "react-use";

const Header = () => {
  const mediaQuery = useMedia("(min-width: 576px)");
  const [navOpen, toggleNav] = useToggle(false);

  const navOpenV = navOpen && !mediaQuery;
  useLockBodyScroll(navOpenV);
  return (
    <header className={navOpenV ? "active" : undefined}>
      <div className="top-bar">
        <div className="header-logo-container">
          <NavLink to="/" className="header-logo">
            {myLogo}
          </NavLink>
        </div>
        <button
          onClick={toggleNav}
          className="btn-main-nav"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {!navOpenV ? hamburgerIcon : closeIcon}
        </button>
        <Nav handleShowHide={toggleNav} />
      </div>
    </header>
  );
};

export default Header;
