import RebirthIcon from "../../website_assets/Rebirth-Icon.png";
import { navigation } from "../../constants/primaryNavigation";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../../JSMasteryHamburgerBtn";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50
    border-b border-neutral-600 
    lg:bg-neutral-800/90 lg:backdrop-blur-sm ${
      openNavigation ? "bg-neutral-800" : "bg-neutral-800/90 backdrop-blur-sm"
    }`}
    >
      <div
        className="flex items-center justify-center px-5 
        lg:px-7.5 xl:px-10 max-lg: py-4"
      >
        <a
          className="flex justify-center items-center transition hover:scale-[110%] w-fit"
          href="/projectRebirth#"
        >
          <img src={RebirthIcon} width={64} height={64} alt="Rebirth" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-neutral-800 lg:static lg:flex justify-center items-center lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center  lg:flex-row">
            <a
              key={0}
              href={"/"}
              onClick={handleClick}
              className={`block relative font-code text-2xl uppercase
     text-neutral-100 transition-color hover:hover:text-[#15eadc]  px-6 py-6 
      md:py-8 lg:-mr-0.25 lg:text-xs
      lg:font-semibold' 
      text-center
        z-2 lg:text-neutral-100
      lg:leading-5 xl:px-12
      }`}
            >
              {"Back to Porfolio"}
            </a>
          </div>
        </nav>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>

      <div />
    </div>
  );
};

export default Header;
