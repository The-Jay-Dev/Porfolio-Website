import React from "react";

export function updateMenuIcon(openNavigation) {
  const menuIcon = document.getElementById("menu");
  const closeIcon = document.getElementById("close");

  if (openNavigation) {
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}

const MenuSvg = () => {
  return (
    <div className="hover:scale-[105%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        id="menu"
        className={`size-6 `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        id="close"
        className={`size-6 hidden`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
export default MenuSvg;
