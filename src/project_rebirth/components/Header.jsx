import RebirthIcon from "../../website_assets/Rebirth-Icon.png";
import { projectNavigation } from "../../constants/PrimaryNavigation.js";
import { useLocation } from "react-router-dom";
import MenuSvg from "../../constants/MenuSvg";
import { useState } from "react";

const Header = () => {
  const pathName = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
    updateMenuIcon(openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50
    border-b border-white 
    lg:bg-neutral-800/90 ${
      openNavigation ? "bg-neutral-800" : "bg-neutral-800/90 backdrop-blur-sm"
    }`}
    >
      <div className="flex items-center justify-center py-4">
        <a
          className="flex ease-out transition hover:scale-[110%] mx-6 w-[4rem] xl:mr-8"
          href="#"
        >
          <img src={RebirthIcon} width={128} height={128} alt="Rebirth" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-neutral-800 lg:static lg:flex lg:mx-auto lg:bg-transparent justify-center`}
        >
          <div
            className={`flex ${
              openNavigation ? "flex-col" : "flex-row"
            }  justify-center items-center`}
          >
            {projectNavigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`  block relative font-code text-2xl uppercase
     text-neutral-100   hover:text-[#a22522]    transition-colors
      px-6 py-6 
      md:py-8 lg:-mr-0.25 lg:text-xs
      lg:font-semibold' 
      lg:leading-5 xl:px-12
      }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <button
          className="ml-auto lg:hidden mx-6"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg />
        </button>
      </div>

      <div />
    </div>
  );
};

export default Header;
