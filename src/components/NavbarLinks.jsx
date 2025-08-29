import { Link, NavLink } from "react-router-dom";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { BsBoxArrowLeft } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const NavbarLinks = () => {
  return (
    <nav className="flex flex-col gap-4 border-r border-gray-200 h-[calc(100%-80px)] lg:h-full py-4 px-2 pl-4 dark:border-[#3A3A55]">
      <NavLink
        className={({ isActive }) =>
          `h-[40px] text-[#206862] flex items-center gap-2 transition-all duration-300  ${
            isActive
              ? "bg-[#f3f4f6e2] before:border before:border-amber-950 before:h-[40px] before:w-[5px] before:absolute before:left-[7px] before:rounded before:bg-teal-800 dark:before:bg-white"
              : "hover:text-[#682520] dark:text-white dark:border dark:border-gray-700 dark:hover:text-gray-300"
          }`
        }
        to={"/interns"}
        end
      >
        <PiUsers className="text-2xl" />
        All Interns
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `h-[40px] text-[#206862] flex items-center gap-2 transition-all duration-300 ${
            isActive
              ? "bg-[#f3f4f6e2] before:border before:border-amber-950 before:h-[40px] before:w-[5px] before:absolute before:left-[7px] before:rounded before:bg-teal-800 dark:before:bg-white"
              : "hover:text-[#682520] dark:text-white dark:border dark:border-gray-700 dark:hover:text-gray-300"
          }`
        }
        to={"/moderators"}
        end
      >
        <LiaChalkboardTeacherSolid className="text-2xl" />
        Moderators
      </NavLink>
      <div className="border-t border-gray-300 pt-4 flex flex-col gap-4 lg:gap-2 lg:pb-4 mt-auto dark:border-[#474760]">
        <NavLink
          className={({ isActive }) =>
            `h-[40px] text-[#206862] flex items-center gap-2 transition-all duration-300 ${
              isActive
                ? "bg-[#f3f4f6e2] before:border before:border-amber-950 before:h-[40px] before:w-[5px] before:absolute before:left-[7px] before:rounded before:bg-teal-800 dark:before:bg-white"
                : "hover:text-[#682520] dark:text-white dark:border dark:border-gray-700 dark:hover:text-gray-300"
            }`
          }
          to={"/settings"}
          end
        >
          <HiOutlineCog6Tooth className="text-2xl" />
          Settings
        </NavLink>
        <Link
          className={
            "flex relative items-center gap-2 text-[#206862] hover:text-[#682520] h-[40px] transition-all duration-300  dark:text-white dark:border dark:border-gray-700 dark:hover:text-gray-300"
          }
          to={"/logout"}
        >
          <BsBoxArrowLeft className="text-2xl" />
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLinks;
