import Link from "next/link";
import { motion } from "framer-motion";
import services from '@/data/service.json';

const Service = () => {
  return (
    <div>
      <h1>Academic Service</h1>
      {/* Carousel */}
      <div className="overflow-x-auto flex space-x-4 pt-2 pb-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col rounded-lg bg-secondary p-4 min-w-[300px]">
            <h3>{service.Conference}</h3>
            <ul>
              {service.Role.map((roleItem, roleIndex) => (
                <li key={roleIndex}>
                  [{roleItem.Year.join(", ")}] {roleItem.Role}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
