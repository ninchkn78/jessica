import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-64 shadow-lg z-10 p-4 bg-[#613F75]">
      <div className="flex flex-col space-y-10 w-full text-center pt-32">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white font-bold hover:underline"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="teaching"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white font-bold hover:underline"
        >
          Teaching
        </ScrollLink>
        <ScrollLink
          to="service"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white font-bold hover:underline"
        >
          Academic Service
        </ScrollLink>
        <ScrollLink
          to="publications"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white font-bold hover:underline"
        >
          Publications
        </ScrollLink>
      </div>
    </nav>
  );
};

export default NavBar;
