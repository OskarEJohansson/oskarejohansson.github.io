import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Experience = () => {
  const handleLinkedinOnClick = () => {
    window.location.href = "https://www.linkedin.com/in/oskar-e-johansson";
  };

  const handleGitOnClick = () => {
    window.location.href = "https://www.github.com/OskarEJohansson";
  };

  return (
    <section id="experience">
      <div>
        <nav id="experience-nav">
          <FaLinkedinIn
            size={100}
            className="icons"
            onClick={handleLinkedinOnClick}
          />
          <FaGithub size={100} onClick={handleGitOnClick} className="icons" />
        </nav>
      </div>
    </section>
  );
};

export default Experience;
