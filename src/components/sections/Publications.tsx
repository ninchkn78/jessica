import { useState } from "react";
import Link from "next/link";
import publications from '@/data/publications.json';
import { PawPrint } from "lucide-react";

interface Publication {
  Name: string;
  Link?: string;
  Description: string;
}

interface ConferenceEntry {
  Year: string;
  Conference: string;
  Publications: Publication[];
}

const Publications: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen">
      <h1>Publications</h1>
      <div className="relative mt-10 mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 rounded-lg bg-highlight1 h-full"></div>

        {publications.map((entry: ConferenceEntry, index: number) => (
          <div key={index} className={`relative flex items-center mb-10 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
            {/* Year Label */}
            <div className={`w-1/2 p-6  ${index % 2 === 1 ? "ml-auto text-right pr-12" : "mr-auto pl-12"}`}>
              <h3 className="text-primary">{entry.Year}</h3>
            </div>

            {/* Timeline Node */}
            <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-highlight1 border-4 border-highlight2 w-12 h-12 rounded-full">
              <PawPrint className="w-6 h-6 text-highlight2" /> 
            </div>

            {/* Content Box */}
            <div className={`w-1/2 ${index % 2 === 0 ? "mr-auto pr-12" : "ml-auto pl-12"}`}>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h5>{entry.Conference}</h5>

                {entry.Publications.map((pub, pubIndex) => (
                  <div key={pubIndex} className="mt-4">
                    <h6>
                      <button
                        onClick={() => toggleExpand(`${index}-${pubIndex}`)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        {pub.Link ? (
                          <Link href={pub.Link} target="_blank" className="hover:underline ">
                            {pub.Name}
                          </Link>
                        ) : (
                          pub.Name
                        )}
                        <span className="ml-2">{expanded[`${index}-${pubIndex}`] ? "▲" : "▼"}</span>
                      </button>
                    </h6>

                    {expanded[`${index}-${pubIndex}`] && (
                      <p className="pt-2">{pub.Description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
