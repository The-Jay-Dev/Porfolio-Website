import resume from "/JadonMResume.pdf";

const DownloadResumeButton = () => {
  // const resume = "/JadonMResume.pdf";
  function downloadResume(url) {
    const fileName = "Jadon Montgomery 2026 Resume";
    const aTag = document.createElement("a");
    aTag.href = resume;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <button
      onClick={downloadResume}
      className="mt-6 p-6 scale-90 cursor-pointer text-center flex hover:scale-[95%] hover:shadow-[0_0_20px_#7c3fff]/80 items-center duration-200 transition justify-center hover:bg-white hover:text-home-accent-primary  border-white border-2 font-primary text-white rounded-2xl"
    >
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
