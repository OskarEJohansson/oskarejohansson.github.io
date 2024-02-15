import experiencePNG from "./media/experience.png";
import experiencePDF from "./media/OskarJohanssonResume.pdf";

const Home = () => {
  return (
    <div id="home">
      <img src={experiencePNG} id="home-img" alt="Picture" />
      <a href={experiencePDF} download="OskarJohanssonResume.pdf">
        <button id="button-resume">Download</button>
      </a>
    </div>
  );
};

export default Home;
