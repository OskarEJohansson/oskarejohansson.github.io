import { MdFamilyRestroom } from "react-icons/md";
import { FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaRunning } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <MdFamilyRestroom size={100} className="icons" />
      <FaRunning size={100} className="icons" />
      <FaBookOpenReader size={100} className="icons" />
      <FaJava size={100} className="icons" />
      <DiJavascript size={100} className="icons" />
    </section>
  );
};

export default About;
