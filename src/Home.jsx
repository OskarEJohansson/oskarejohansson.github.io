const Home = () => {
  const handleDownloadClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1F83C2RzfpTfrNTyMdsSC2VP4ETNUuW43/view?usp=share_link";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "OskarJohanssonResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home">
      <img
        src="https://drive.google.com/file/d/1ushmaQmOiqu4JpFDhY-vG86T1fhWVVlW/view?usp=share_link"
        id="home-img"
        alt="Picture"
      />
      <button id="button-resume" onClick={handleDownloadClick}>
        Download
      </button>
    </div>
  );
};

export default Home;
