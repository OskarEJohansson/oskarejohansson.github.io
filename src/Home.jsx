import experiencePNG from "./media/experience.png";

const Home = () => {
  const handleDownloadClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1F83C2RzfpTfrNTyMdsSC2VP4ETNUuW43/view?usp=share_link";

    document.body
      .appendChild(
        Object.assign(document.createElement("a"), {
          href: pdfUrl,
          download: "OskarJohanssonResume.pdf",
        })
      )
      .click();
  };

  return (
    <div id="home">
      <img src={experiencePNG} id="home-img" alt="Picture" />
      <button id="button-resume" onClick={handleDownloadClick}>
        Download
      </button>
    </div>
  );
};

export default Home;
