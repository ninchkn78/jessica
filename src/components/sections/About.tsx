import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <Element name="about" className="h-screen flex items-center justify-center">
          <motion.h2
            className="text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Section 1
          </motion.h2>
        </Element>
  );
};

export default NavBar;
