import { useState } from "react";
import { useTheme } from "react-daisyui";

export const ThemeMenu = () => {
  const { setTheme } = useTheme("corporate");
  const [checked, setCheck] = useState(false);

  const lineBackground: any = document.querySelector(".line-background");
  const dotBackground: any = document.querySelector(".dot-background");
  const companyIntroduce: any = document.getElementById("company-introduce");
  const navbarDropdown1: any = document.getElementById("navbar-dropdown1");

  function handleSwitch() {
    if (checked) {
      setCheck(false);
      lineBackground.style.background = "repeating-linear-gradient(45deg, #fff, #fff 13px, #f2f2f2 13px, #f2f2f2 14px)";
      dotBackground.style.removeProperty("background");
      companyIntroduce.style.removeProperty("background-color");
      navbarDropdown1.style.removeProperty("background-color");
      localStorage.setItem("dark", "false");
      setTheme("corporate");
      document.getElementsByTagName("html")[0].setAttribute("data-theme", "corporate");
    } else {
      navbarDropdown1.style.background = "#202020";
      companyIntroduce.style.background = "#202020";
      lineBackground.style.background = "#202020";
      dotBackground.style.background = "#202020";
      localStorage.setItem("dark", "true");
      setCheck(true);
      setTheme("business");
      document.getElementsByTagName("html")[0].setAttribute("data-theme", "business");
    }
  }

  return (
    <label className="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        value="business"
        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        onClick={() => {
          handleSwitch();
        }}
      />
      <svg
        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};
