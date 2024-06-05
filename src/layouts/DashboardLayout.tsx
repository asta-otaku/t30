import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  DailyTaskIcon,
  Cog8ToothIcon,
  Hamburger,
  HomeIcon,
  LogoutIcon,
  SearchIcon,
  SupportIcon,
  UsersIcon,
} from "../assets/icons";
import logo from "../assets/dashboardlogo.svg";
import avatar from "../assets/Avatar.svg";
import ModalLayout from "./ModalLayout";
import useStore from "../store";

function DashboardLayout({ children }: any) {
  const currentModal = useStore((state: any) => state.currentModal);

  useEffect(() => {
    if (currentModal != null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [currentModal]);

  const location = useLocation();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [dailyTaskLink, setDailyTaskLink] = useState(true);
  const toggleNav = () => setNav(!nav);

  return (
    <div className="bg-white">
      {/* General Modal */}
      {currentModal && <ModalLayout />}
      <div
        className={`md:flex h-screen max-w-[1800px] mx-auto ${
          currentModal && "blur-sm"
        }`}
      >
        {/* Nav section */}
        <nav
          className="grow md:max-w-xs md:w-[300px]
          border-r w-full md:relative bg-[#fff] z-[100]
          flex justify-between"
        >
          <div className="w-full flex flex-col">
            <Link to="/" className="logo flex gap-2 items-center py-6 pl-5">
              <img src={logo} className="w-full" alt="logo" />
            </Link>
            <ul
              className={`${
                nav ? "block" : "hidden"
              } px-2 pt-5 pb-2 text-zinc-500 md:block grow`}
            >
              <li>
                <Link
                  to="/dashboard"
                  className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                    location.pathname === "/dashboard"
                      ? "text-white bg-black font-medium"
                      : "text-[#344054]"
                  }`}
                >
                  <HomeIcon
                    color={
                      location.pathname === "/dashboard" ? "white" : "black"
                    }
                  />
                  <h4>
                    {location.pathname === "/dashboard"
                      ? "Overview"
                      : "Dashboard"}
                  </h4>
                </Link>
              </li>
              <li className="mt-1">
                <button
                  onClick={() => setDailyTaskLink((prev) => !prev)}
                  className={`flex justify-between items-center p-3 hover:text-[#344054] hover:bg-black/10 w-full rounded ${
                    location.pathname.startsWith("/dashboard/daily")
                      ? "text-black font-medium"
                      : "text-[#344054]"
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <DailyTaskIcon />
                    <p>Daily tasks</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <h4 className="text-xs font-medium text-[#344054]">
                      {"10"}
                    </h4>
                    {dailyTaskLink ? (
                      <ChevronRightIcon className="w-4 h-4 -rotate-90" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <ul hidden={!dailyTaskLink}>
                  <li>
                    <Link
                      to="/dashboard/daily"
                      className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                        location.pathname === "/dashboard/daily"
                          ? "text-white bg-black font-medium"
                          : "text-[#344054]"
                      }`}
                    >
                      <h4 className="ml-8">Devotionals</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                        location.pathname === "/dashboard/daily/bible"
                          ? "text-white bg-black font-medium"
                          : "text-[#344054]"
                      }`}
                    >
                      <h4 className="ml-8">Bible Plan</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/daily/boost"
                      className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                        location.pathname === "/dashboard/daily/boost"
                          ? "text-white bg-black font-medium"
                          : "text-[#344054]"
                      }`}
                    >
                      <h4 className="ml-8">T30 Boost</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                        location.pathname === "/dashboard/daily/quiz"
                          ? "text-white bg-black font-medium"
                          : "text-[#344054]"
                      }`}
                    >
                      <h4 className="ml-8">Quiz</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                    location.pathname === "/dashboard/users"
                      ? "text-white bg-black font-medium"
                      : "text-[#344054]"
                  }`}
                >
                  <UsersIcon />
                  <h4>Users</h4>
                </Link>
              </li>

              <hr className="w-full my-8" />

              <li>
                <Link
                  to="#"
                  className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                    location.pathname === "/dashboard/settings"
                      ? "text-white bg-black font-medium"
                      : "text-[#344054]"
                  }`}
                >
                  <Cog8ToothIcon />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className={`flex gap-3 items-center p-3 hover:text-[#344054] hover:bg-black/10 rounded ${
                    location.pathname === "/dashboard/support"
                      ? "text-white bg-black font-medium"
                      : "text-[#344054]"
                  }`}
                >
                  <SupportIcon />
                  <span>Support</span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-between gap-1 w-full px-5 mb-3">
              <img src={avatar} alt="" />
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Olivia Rhye</h4>
                <p className="text-xs text-[#4A4A4A] md:max-w-[130px] overflow-auto truncate">
                  olivia@untitledui.com
                </p>
              </div>
              <LogoutIcon
                className="w-5 cursor-pointer"
                onClick={() => navigate("/login", { replace: true })}
              />
            </div>
          </div>
          <span
            className="md:hidden mt-10 mr-3 cursor-pointer"
            onClick={toggleNav}
          >
            {nav ? <CloseIcon /> : <Hamburger />}
          </span>
        </nav>

        <div className="main w-full flex flex-col">
          <header className="p-6 flex justify-end items-center gap-6 border border-l-0">
            <SearchIcon className="cursor-pointer" />
            <BellIcon className="cursor-pointer" />
          </header>
          <main className="dashboard__content grow overflow-y-scroll no-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
