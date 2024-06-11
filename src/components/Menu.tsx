"use client";

import React, { useState } from "react";
import Image from "next/image";
import memoji from "../assets/memoji.png";
import { LuMenu } from "react-icons/lu";
import { MdOutlineAccountCircle, MdOutlineLibraryMusic } from "react-icons/md";
import { AiOutlineFolderOpen, AiOutlineMessage } from "react-icons/ai";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const MENU_ITEMS = [
  {
    icon: <MdOutlineAccountCircle className="w-6 h-6 fill-black" />,
    name: "About Me",
    route: "/",
  },
  {
    icon: <MdOutlineLibraryMusic className="w-6 h-6 fill-black" />,
    name: "Library",
    route: "/",
  },
  {
    icon: <AiOutlineFolderOpen className="w-6 h-6 fill-black" />,
    name: "Projects",
    route: "/",
  },
  {
    icon: <AiOutlineMessage className="w-6 h-6 fill-black" />,
    name: "Contact",
    route: "/",
  },
  {
    icon: <RiGithubLine className="w-6 h-6 fill-black" />,
    name: "Github",
    route: "/",
  },
  {
    icon: <RiLinkedinLine className="w-6 h-6 fill-black" />,
    name: "Linkedin",
    route: "/",
  },
];

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sticky top-10 z-10">
      {!isHovered && (
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
        >
          <div className="flex items-center w-11 h-11 bg-gray-300 rounded-2xl">
            <Image src={memoji} alt="memoji" />
          </div>
          <span className="font-mono font-bold text-slate-200 text-xl">
            Yash
          </span>
          <LuMenu />
        </div>
      )}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="flex flex-col gap-5 py-3 pb-12 px-12 rounded-[50px] border-[1px] border-[#4b505f] items-center justify-center bg-gradient-to-b from-[#252a34] to-[#1b1e26] cursor-pointer sticky"
            onMouseLeave={() => setIsHovered(false)}
            initial={{ height: 0, width: 0 }}
            animate={{ height: 400, width: 500 }}
            transition={{ ease: "linear", duration: 0.4 }}
            exit={{
              height: 0,
              width: 0,
              transition: { duration: 0.4, ease: "linear" },
              opacity: 0,
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 bg-gray-300 rounded-2xl">
                <Image src={memoji} alt="memoji" />
              </div>
              <span className="font-mono font-bold text-slate-200 text-lg">
                Yash
              </span>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "50vh", opacity: 1 }}
              transition={{ ease: "anticipate", delay: 0.2, duration: 0.4 }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.1, ease: "linear" },
              }}
              className="grid grid-rows-2 grid-flow-col gap-2"
            >
              {MENU_ITEMS.map((menu, index) => (
                <div
                  key={index}
                  className="bg-[#2b2f39] flex flex-col justify-center items-center px-8 py-6 gap-4 rounded-3xl border-[1px] border-[#383c47]"
                >
                  <div className="flex flex-col justify-center items-center bg-[#bac5df] w-10 h-10 gap-3 rounded-xl border-[1px] border-white">
                    {menu.icon}
                  </div>
                  <span className="uppercase text-[12px] font-semibold">
                    {menu.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
