import { motion } from "framer-motion";
import about from '@/data/about.json';
import education from '@/data/education.json'

const About = () => {
  const aboutData = about[0];     // only take top most about object
  const headerItems = [aboutData.Title, aboutData.Place, aboutData.Email].filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Main Bout Section */}
      <h1>Alex Chao</h1>
      <div className="font-sans text-2xl pb-4">
        {headerItems.join(', ')}
      </div>
      <p>
        {aboutData.About}
      </p>

      {/* Education */}
      <div className="pt-12">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="my-2">
            <h3>{edu.School} | {edu.Place} | {edu.Year}</h3>
            <p>{edu.Notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
