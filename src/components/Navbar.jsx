import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex itms-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src="" alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/amit-kumar-patro-a5a658275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/patro-amit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.codechef.com/users/lonely_beam_98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodechef />
        </a>
        <a
          href="https://www.hackerrank.com/profile/ap3967"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHackerrank />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
