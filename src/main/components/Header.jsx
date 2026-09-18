import { homeNavigation } from "../../constants/PrimaryNavigation.js";
import { useLocation } from "react-router-dom";
import MenuSvg from "../../constants/MenuSvg";
import { updateMenuIcon } from "../../constants/MenuSvg";
import { useState } from "react";
import CallToAction from "./Contact.jsx";
import CallToActionButton from "./CallToActionButton.jsx";

const Header = () => {
  const pathName = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    var openNav = false;

    if (openNavigation) {
      openNav = false;
      setOpenNavigation(false);
    } else {
      openNav = true;
      setOpenNavigation(true);
    }
    updateMenuIcon(openNav);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed font-primary  w-full z-50
    border-b border-white backdrop-blur-3xl
     ${openNavigation ? "bg-neutral-800 h-full" : "h-fit"}`}
    >
      <nav
        className={`${
          openNavigation ? "hidden" : "flex"
        }  items-center  left-0 right-0 bg-neutral-800  md:flex lg:mx-auto lg:bg-transparent justify-center`}
      >
        <div
          className={`${openNavigation ? "hidden" : ""} flex-1 flex justify-start items-center`}
        >
          <a
            className="hidden lg:block ease-out transition hover:scale-[110%] mx-6 w-[10%] lg:w-[15%] xl:mr-8"
            href="#"
          >
            <img src="/JayDevLogo.png" width={128} height={128} alt="JayDev" />
          </a>
        </div>
        <div
          className={`flex ${
            openNavigation ? "flex-col" : "flex-row"
          }  justify-center items-center`}
        >
          {homeNavigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleClick}
              className={`  block relative font-code lg:text-[.8rem] uppercase
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
        </div>
        <div
          className={`${openNavigation ? "hidden" : ""} mx-6 flex-1 h-fit flex justify-end items-center`}
        >
          <CallToActionButton initialText="Contact"></CallToActionButton>
        </div>
      </nav>
      {/* <button className="md:hidden mx-6" px="px-3" onClick={toggleNavigation}>
        <MenuSvg />
      </button> */}
      <div />
    </div>
  );
};

export default Header;
