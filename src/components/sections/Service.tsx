import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <Element name="service" className="flex flex-col bg-gray-400">
      <h1>Academic Service</h1>
      
      {/* Carousel */}
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div>ACM SIGCSE TS</div>
          <ul>
            <li>[2024, 2025] Session Chair</li>
            <li>[2024, 2025] Reviewer</li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Service;
