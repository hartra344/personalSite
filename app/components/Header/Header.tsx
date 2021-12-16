import { useState, useEffect } from "react";
import Nav from "./Nav";

import { hamburgerIcon, closeIcon, myLogo } from "../Global/icon";
import { NavLink } from "remix";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleShowHide = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 576px)");
    mediaQuery.addEventListener("change", isDesktop);
    return () => mediaQuery.removeEventListener("change", isDesktop);
  }, []);

  // prevent scroll when mobile nav is open
  useEffect(
    () =>
      (document.body.style.overflow = (navOpen ? "hidden" : "unset") as any),
    [navOpen]
  );

  return (
    <header className={navOpen ? "active" : undefined}>
      <div className="top-bar">
        <div className="header-logo-container">
          <NavLink to="/" className="header-logo">
            {myLogo}
          </NavLink>
        </div>
        <button
          onClick={handleShowHide}
          className="btn-main-nav"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {!navOpen ? hamburgerIcon : closeIcon}
        </button>
        <Nav handleShowHide={handleShowHide} />
      </div>
    </header>
  );
};

export default Header;
