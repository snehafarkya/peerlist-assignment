"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import circlelogo from "../../public/images/circlelogo.svg";
import arrow from "../../public/images/downarrow.svg";
import akash from "../../public/images/akash.svg";
import scroll from "../../public/images/scroll.svg";
import project from "../../public/images/project.svg";
import inbox from "../../public/images/inbox.svg";
import job from "../../public/images/job.svg";
import search from "../../public/images/search.svg";
import network from "../../public/images/network.svg";
import user from "../../public/images/user.svg";
import loom from "../../public/images/Loom - jpeg 0.svg";
import share from "../../public/images/share.svg";
import sharee from "../../public/images/sharee.svg";
import threedot from "../../public/images/threedots.svg";
import edit from "../../public/images/edit.svg";
import Card from "./components/card";
import CardContainer from "./components/cardContainer";
import { useEffect, useState } from "react";
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (isSidebarOpen) {
      //@ts-ignore
      body.style.overflow = "hidden";
    } else {
      //@ts-ignore

      body.style.overflow = "auto";
    }

    return () => {
      //@ts-ignore

      body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const asideMenu = [
    {
      icon: scroll,
      label: "Scroll",
      social: edit,
      stat: "78",
      value: "Candidates",
    },
    {
      icon: project,
      label: "Project",
      social: share,
      stat: "68",
      value: "Applied w/ Peerlist",
    },
    {
      icon: inbox,
      social: sharee,
      label: "Inbox",
      stat: "2872",
      value: "Views",
    },
    {
      icon: job,
      social: threedot,
      label: "Job",
    },
    {
      icon: search,
      label: "Search",
    },
    {
      icon: network,
      label: "Network",
    },
  ];
  return (
    <>
      <main className={`md:px-40 flex  justify-start border-r border-[#E1E4E8]  items-start bg-white h-full min-h-screen ${isSidebarOpen ? 'overflow-hidden':''}`}>
        <aside className={`flex  flex-col py-4 md:sticky absolute bg-white md:top-0 pt-16 md:pt-4 pl-6 md:pl-0 left-0 z-50 overflow-auto ease-in-out transition-all duration-300 transform justify-between w-[224px] border-r   pr-6 h-auto min-h-screen   ${isSidebarOpen ? 'translate-x-0 w-full z-50 ' : ' md:translate-x-0 -translate-x-full overflow-hidden'}`}>
          <div className="">
            <Image src={logo} alt="logo" height={32} className="hidden md:flex" />
            <div className="flex flex-col gap-2 md:my-6 mt-0 mb-6">
              {asideMenu.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1 h-10 cursor-pointer"
                  >
                    <Image src={item.icon} alt="Icon here" />
                    <h4 className="font-semibold text-sm text-[#0D0D0D] leading-5">
                      {item.label}
                    </h4>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <Image src={user} alt="Icon here" />
                <h4 className="font-semibold text-sm text-[#0D0D0D] leading-5">
                  Yogini
                </h4>
              </div>
              <div className="flex  items-start gap-1 cursor-pointer">
                <Image src={loom} alt="Icon here" />
                <h4 className="font-semibold text-sm text-[#0D0D0D] leading-5">
                  Loom
                  <p className="text-[10px] ">Manage jobs, teams, & more →</p>
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-semibold  text-[#444D56] w-[188px]">
              Blog • Help Center • Feedback • Code of Conduct • Privacy • T&C
            </p>
            <p className="text-[#444D56] text-[10px]">© 2023 Peerlist Inc.</p>
          </div>
        </aside>
        <div className="md:hidden absolute flex justify-between border-b pb-4 top-4 px-6 w-full z-50">
        <button onClick={toggleSidebar}>
          {!isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          ): (<svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>)}
        </button>
        <Image src={logo} alt="logo" height={32} />

      </div>
        <div className=" flex flex-col gap-6 w-full border-r border-[#E1E4E8] border-solid mt-12 md:mt-0">
          <div className="flex p-6 flex-col gap-6 bg-[#FAFBFC] w-full border-b border-r border-[#E1E4E8]">
            <div className="flex justify-between w-full items-start">
              <div className="flex gap-4 md:items-center items-start">
                <Image
                  src={circlelogo}
                  alt="circlelogo"
                  className="border p-1 border-[#E1E4E8] rounded-2xl"
                />
                <div className="flex flex-col">
                  <p className="text-lg flex items-center gap-1 font-semibold text-[#0D0D0D] ">
                    Software Engineer, Front End
                    <span>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  </p>
                  <p className=" text-sm text-[#0D0D0D]">
                    at Dyte • Full time • Remote (United States, Canada)
                  </p>
                </div>
              </div>
              <div className="gap-2 md:flex hidden">
                {asideMenu.map((item, index) => {
                  return (
                    <>
                      {item.social ? (
                        <div
                          className="rounded-full cursor-pointer  p-1 border"
                          style={{ cursor: "pointer" }}
                        >
                          <Image
                            src={item.social}
                            alt=""
                            className="cursor-pointer "
                          />
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex md:flex-row  flex-col md:justify-between items-start gap-2 w-full md:pl-16">
              <div className="flex gap-4 ">
                {asideMenu.map((item, index) => {
                  return (
                    <>
                      {item.stat ? (
                        <div className="flex gap-1 justify-center">
                          <p className="text-xs font-semibold text-[#0D0D0D]">
                            {item.stat}
                          </p>
                          <p className="text-xs flex-wrap font-normal text-[#0D0D0D]">
                            {item.value}
                          </p>
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
              <p className="text-[10px] text-[#0D0D0D] flex justify-center gap-1 items-center">
                Posted <b>1d ago</b> by <Image src={akash} alt="" />{" "}
                <b>Akash Bhadange</b>
              </p>
            </div>
          </div>
          <CardContainer />
        </div>
      </main>
    </>
  );
}
