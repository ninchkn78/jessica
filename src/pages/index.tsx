import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";

import NavBar from "@/components/NavBar";
import About from "@/components/sections/About"
import Teaching from "@/components/sections/Teaching";
import Service from "@/components/sections/Service";
import Publications from "@/components/sections/Publications";


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
      <div className="flex flex-col w-full h-full ml-64">
        <About />
        <Teaching/>
        <Service/>
        <Publications></Publications>
      </div>
    </div>
  );
}
