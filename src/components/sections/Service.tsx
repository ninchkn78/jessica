import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      <h1>Academic Service</h1>
      {/* Carousel */}
      <div className="overflow-x-auto flex space-x-4 pt-2 pb-4">
        <div className="flex flex-col rounded-lg bg-secondary p-4 min-w-[300px]">
          <h3>ACM SIGCSE TS</h3>
          <ul>
            <li>[2024, 2025] Session Chair</li>
            <li>[2024, 2025] Reviewer</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-secondary p-4 min-w-[300px]">
          <h3>Another Service</h3>
          <ul>
            <li>[2023] Role Example</li>
            <li>[2024] Another Role</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-secondary p-4 min-w-[300px]">
          <h3>Another Service</h3>
          <ul>
            <li>[2023] Role Example</li>
            <li>[2024] Another Role</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-secondary p-4 min-w-[300px]">
          <h3>Another Service</h3>
          <ul>
            <li>[2023] Role Example</li>
            <li>[2024] Another Role</li>
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-secondary p-4 min-w-[300px]">
          <h3>Another Service</h3>
          <ul>
            <li>[2023] Role Example</li>
            <li>[2024] Another Role</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
