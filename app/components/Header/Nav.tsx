import { NavLink } from "remix";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { gitHubURL, linkedInURL, twitterURL } from "../Global/globals";

const Nav = ({ handleShowHide }: { handleShowHide: () => any }) => {
  return (
    <nav onClick={handleShowHide} className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/photography">Photography</NavLink>
        </li>

        <li className="nav-social-media">
          <a
            className="nav-social-icon"
            href={gitHubURL}
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="nav-social-icon"
            href={linkedInURL}
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="nav-social-icon"
            href={twitterURL}
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
