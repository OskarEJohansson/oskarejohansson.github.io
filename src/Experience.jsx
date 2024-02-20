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
    <section className="experience">
      <nav className="experience">
        <div className="experience">
          <fieldset className="experience">
            <button className="icons">
              <FaGithub
                size={100}
                onClick={handleGitOnClick}
                className="icons"
              />
            </button>
            <p className="eperience-p">
              Please visit my Github repository to follow my progress through my
              projects from my first ever Python project and my school projects
              "Dice" and "Dungeon Run". Both school projects are done with
              different techniques and show my progress from justing just plain
              Java to connect to a Database through JDBC followed by using
              Spring Boot to connect and handle services.
              <br /> <br />
              You can also find the repository for this website. More projects
              in Javascript/Typescript will be uploaded as our school year
              progresses and my knowledge of the front end aspect of the stack
              will grow. Beside school projects I will post my own projects to
              showcase my interesset in exploring the vast universe of
              development. As of the start of 2024 I'm taking MongoDB University
              courses to learn more about MongoDB and I will also keep on
              exploring Docker and the use of containers in back end
              applications.
            </p>
          </fieldset>
        </div>

        <div className="experience">
          <fieldset className="experience">
            <button className="icons">
              <FaLinkedinIn
                size={100}
                className="icons"
                onClick={handleLinkedinOnClick}
              />
            </button>

            <p className="eperience-p">
              Please visit my Linkedin profile for more information of my
              earlier work experience and to connect to my Linkedin profile!
            </p>
          </fieldset>
        </div>
      </nav>
    </section>
  );
};

export default Experience;
