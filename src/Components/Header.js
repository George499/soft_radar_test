import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="mx-auto flex justify-center items-center w-full">
      <div className="pt-[19px] pb-[19.6px] px-[64px] flex w-full justify-between">
        <a href="/" className="flex flex-col justify-center items-center">
          <p className=" text-2xl dark:text-white font-semibold">
            <img src="images/modshopLogo.png" alt="modshopLogo" />
          </p>
        </a>
        <nav className="items-center inline-flex text-[16px] cursor-pointer font-raleway font-extrabold">
          <Link
            to="/login"
            className={`pr-[44.5px] 
              ${
                location.pathname === "/login"
                  ? "text-[#a3a3a3]"
                  : "text-[#212121]"
              }`}
          >
            LOG IN
          </Link>
          <Link
            className={`${
              location.pathname === "/register"
                ? "text-[#a3a3a3]"
                : "text-[#212121]"
            }`}
            to="/register"
          >
            REGISTER
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
