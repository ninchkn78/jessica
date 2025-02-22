"use client";
import Image from "next/image";

import { Link as ScrollLink, Element, scroller } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import NavBar from "@/components/NavBar";
import About from "@/components/sections/About";
import Teaching from "@/components/sections/Teaching";
import Service from "@/components/sections/Service";
import Publications from "@/components/sections/Publications";

const SECTIONS = ["about", "teaching", "service", "publications"];

export default function Home() {
  return (
    <div className="flex w-full">
      <NavBar />
      <div className="flex flex-col w-full h-screen pl-64 overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <Element
          name="about"
          id="about"
          className="min-h-screen flex flex-col p-12 snap-start snap-always"
        >
          <About />
        </Element>
        <Element
          name="teaching"
          id="teaching"
          className="min-h-fit flex flex-col py-12 snap-start snap-always"
        >
          <Teaching />
        </Element>
        <Element
          name="service"
          id="service"
          className="flex flex-col p-12 bg-white shadow-lg snap-start snap-always"
        >
          <Service />
        </Element>
        <Element
          name="publications"
          id="publications"
          className="min-h-screen flex flex-col p-12 snap-start snap-always"
        >
          <Publications />
        </Element>
      </div>
    </div>
  );
}
