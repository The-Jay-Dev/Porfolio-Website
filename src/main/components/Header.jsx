import { homeNavigation } from "../../constants/PrimaryNavigation.js";
import { useLocation } from "react-router-dom";
import MenuSvg from "../../constants/MenuSvg";
import { useEffect, useState } from "react";
import CallToAction from "./Contact.jsx";
import CallToActionButton from "./CallToActionButton.jsx";

const Header = () => {
  const pathName = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const toggleNavigation = () => {
    var openNav = false;

    if (openNavigation) {
      openNav = false;
      setOpenNavigation(false);
    } else {
      openNav = true;
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        console.log("SMALL SCREEN");
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    });
  });
  return (
    <div
      className={`fixed font-primary  w-full z-50
    border-b border-white backdrop-blur-3xl flex flex-col justify-center items-center
     ${openNavigation ? "bg-neutral-800 h-full" : "h-fit"}`}
    >
      <div
        className={`${smallScreen ? "" : "hidden"} w-full flex  lg:justify-center items-center`}
      >
        <a
          className={`${openNavigation ? "hidden" : ""} lg:block ease-out transition hover:scale-[110%] mx-6 w-full  lg:w-[10%] p-6`}
          href="#"
        >
          <img src="/JayDevLogo.png" width={128} height={128} alt="JayDev" />
        </a>

        <button className="lg:hidden w-[8%] m-6" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>

      <div
        className={`flex ${
          openNavigation ? "flex-col h-full" : "flex-row"
        } ${smallScreen && !openNavigation ? "hidden" : ""} justify-center items-center w-full`}
      >
        <div className="w-full h-fit flex justify-start items-center">
          <a
            className={`${openNavigation ? "hidden" : ""}  transition hover:scale-[110%] mx-4 lg:mx-6 p-5 m-2`}
            href="#"
          >
            <img src="/JayDevLogo.png" className="lg:w-[25%]" alt="JayDev" />
          </a>
        </div>
        {homeNavigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            onClick={handleClick}
            className={`block relative font-code lg:text-[.8rem] uppercase
            text-neutral-100  hover:text-home-accent-primary  transition-colors
              px-6 py-6 
              md:py-8 lg:-mr-0.25
              lg:font-semibold' 
              lg:leading-5 xl:px-12
              }`}
          >
            {item.title}
          </a>
        ))}

        <div
          className={`${openNavigation ? "hidden" : ""} mx-12  h-fit w-full flex justify-end items-center`}
        >
          <CallToActionButton initialText="Contact"></CallToActionButton>
        </div>
      </div>

      <nav
        className={` items-center  left-0 right-0 bg-neutral-800  md:flex lg:mx-auto lg:bg-transparent justify-center`}
      ></nav>

      <div />
    </div>
  );
};

export default Header;
