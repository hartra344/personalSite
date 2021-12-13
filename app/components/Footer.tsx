import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { gitHubURL, linkedInURL, twitterURL } from "./Global/globals";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer>
      <section className="footer social-media">
        <a
          className="footer-icon"
          href={gitHubURL}
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub title="GitHub icon" />
        </a>
        <a
          className="footer-icon"
          href={linkedInURL}
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn title="LinkedIn icon" />
        </a>
        <a
          className="footer-icon"
          href={twitterURL}
          title="Twitter"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter title="Twitter icon" />
        </a>
      </section>

      <p>&copy; {year} Travis Harris</p>
    </footer>
  );
};

export default Footer;
