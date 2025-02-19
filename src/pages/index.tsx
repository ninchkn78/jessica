import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import NavBar from "@/components/NavBar";
import About from "@/components/sections/About"

import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex w-full">
      <NavBar />
      <div className="flex flex-col w-full h-full ml-64 p-4">
        {/* Sections with Framer Motion animations */}
        <About />

        <Element
          name="teaching"
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <motion.h2
            className="text-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Section 2
          </motion.h2>
        </Element>

        <Element
          name="service"
          className="h-screen flex items-center justify-center bg-gray-300"
        >
          <motion.h2
            className="text-4xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Section 3
          </motion.h2>
        </Element>

        <Element
          name="publications"
          className="h-screen flex items-center justify-center bg-gray-400"
        >
          <motion.h2
            className="text-4xl"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Section 4
          </motion.h2>
        </Element>
      </div>
    </div>
  );
}
