import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Main Bout Section */}
      <h1>Alex Chao</h1>
      <div className="font-sans text-2xl pb-4">
        {" "}
        {/* this guy is special, only guy who looks like this */}
        PHD Student, Place, Email
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      {/* Education */}
      <div className="pt-12">
        <h2>Education</h2>
        <h3>Duke University | Durham, NC | 2022</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default About;
