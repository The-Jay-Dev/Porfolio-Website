import JayDevLogo from "../../website_assets/JayDevLogo.png";
import { navigation } from "../../constants/primaryNavigation";
import { useLocation } from "react-router-dom";
import Button from "../../JSMasteryHamburgerBtnRender";
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
    border-b border-white 
    lg:bg-neutral-800/90 lg:backdrop-blur-sm ${
      openNavigation ? "bg-neutral-800" : "bg-neutral-800/90 backdrop-blur-sm"
    }`}
    >
      <div
        className="flex items-center px-5 
        lg:px-7.5 xl:px-10 max-lg: py-4"
      >
        <a
          className="block ease-out transition hover:scale-[110%] w-[4rem] xl:mr-8"
          href="#"
        >
          <img src={JayDevLogo} width={128} height={128} alt="JayDev" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-neutral-800 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`  block relative font-code text-2xl uppercase
     text-neutral-100  hover:text-[#15eadc]  transition-colors
      ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 
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
