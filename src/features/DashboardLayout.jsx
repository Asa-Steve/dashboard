import { Link, Outlet } from "react-router-dom";
import NavbarLinks from "../components/NavbarLinks";
import { useEffect, useState } from "react";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(null);

  // Loading theme from localStorage on mount
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Applying theme class and saving to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="h-[100vh] w-[100dvw] overflow-hidden">
      <div className="h-[60px] w-full flex shadow-2xl items-center justify-between px-4 bg-white dark:bg-[#1E1E2F] dark:text-white dark:border-b dark:border-[#3A3A55]">
        <Link className="text-2xl lg:text-3xl border border-gray-300 dark:border-[#3A3A55]">
          Logo
        </Link>
        <div className="flex items-center gap-4 pr-3 md:pr-10">
          <div className="flex items-center gap-2 font-medium">
            <HiOutlineUserCircle className="text-2xl lg:text-3xl" />
            <h5>Admin</h5>
          </div>
          {!isDarkMode && (
            <BsToggle2Off
              className="text-2xl lg:text-3xl cursor-pointer"
              onClick={() => setIsDarkMode((prevState) => !prevState)}
            />
          )}
          {isDarkMode && (
            <BsToggle2On
              className="text-2xl lg:text-3xl cursor-pointer"
              onClick={() => setIsDarkMode((prevState) => !prevState)}
            />
          )}
        </div>
      </div>
      <main className="h-[calc(100vh-60px)] w-full flex relative overflow-hidden">
        <aside
          className={`absolute lg:relative h-[calc(100vh-60px)] w-[70%] md:w-[400px] lg:w-[400px] lg:left-[0] bg-white ${
            isSidebarOpen ? "left-[0%]" : "left-[-70%] md:left-[-400px]"
          } transition-all duration-300 z-1000  dark:bg-[#1E1E2F]`}
        >
          <NavbarLinks />
          <div
            className={`border border-gray-300 cursor-pointer absolute bottom-15 ${
              isSidebarOpen
                ? "right-[-8%]"
                : "right-[-12%] sm:right-[-8%] md:right-[-8%]"
            } text-white bg-teal-800 dark:bg-white dark:text-black p-3 rounded lg:hidden transition-all duration-300`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen && <RxDoubleArrowLeft />}
            {!isSidebarOpen && <RxDoubleArrowRight />}
          </div>
        </aside>
        <div className=" h-[calc(100vh-60px)] w-full lg:w-[100% - 400px] bg-gray-100 dark:bg-[#1E1E2F]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
