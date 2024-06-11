import React from "react";
import map from "../../../assets/map.png";
import Image from "next/image";
import tech from "../../../assets/tech2.png";
import foundationElement from "../../../assets/foundation-element.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GrGithub } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { PiHandWavingLight } from "react-icons/pi";

const Grid = () => {
  return (
    <div className="w-[80vw]">
      <div className="grid grid-cols-3 grid-rows-4 gap-10">
        <div className="row-span-2 h-[93vh] border-[2px] rounded-[4vw] border-[#4b505f] px-3 py-3">
          <Image className="h-[85%] rounded-[4vw]" src={map} alt="map" />
          <div className="flex flex-col items-center p-5 gap-2">
            <div className="text-2xl font-normal text-slate-200 font-mono">
              Gujarat, India
            </div>
            <div className="text-sm font-normal text-[#9ca7c2db] font-mono">
              TIME
            </div>
          </div>
        </div>
        <div className="overflow-hidden border-[2px] rounded-[4vw] border-[#4b505f] flex flex-col items-center py-10 justify-between">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-slate-200 font-mono">
              My Library
            </div>
            <div className="text-sm font-semibold text-[#9ca7c2db] font-mono">
              Music I love listining
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2qHlyoJInKr2DrI9zeHnP2?utm_source=generator&theme=0"
              width="90%"
              height="152"
              frameBorder="0"
              // allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="border-[2px] overflow-hidden rounded-[4vw] border-[#4b505f] flex flex-col items-center pt-10 justify-between">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-slate-200 font-mono">
              Tech Stack
            </div>
            <div className="text-sm font-semibold text-[#9ca7c2db] font-mono">
              Tools I enjoy using
            </div>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50" />
            <Image
              className="object-cover translate-y-10"
              src={tech}
              alt="map"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-50" />
          </div>
        </div>
        <div
          className="border-[2px] overflow-hidden rounded-[4vw] border-[#4b505f] flex flex-col items-center pt-10 justify-between"
          style={{
            backgroundImage: "url('/about-me-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-slate-200 font-mono">
              About Me
            </div>
          </div>
        </div>
        <div className="border-[2px] overflow-hidden rounded-[4vw] border-[#4b505f] flex flex-col items-center pt-10 justify-between">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-slate-200 font-mono">
              Projects
            </div>
            <div className="text-sm font-semibold text-[#9ca7c2db] font-mono">
              Selected personal projects
            </div>
          </div>
          {/* <div className="relative w-full">
            <Image
              className="object-cover translate-y-10"
              src={tech}
              alt="map"
            />
          </div> */}
        </div>
        <div
          className="border-[2px] overflow-hidden rounded-[4vw] border-[#4b505f] flex flex-col items-center  justify-evenly col-span-2"
          style={{
            backgroundImage: "url('/foundation-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="uppercase text-md font-semibold text-slate-200 font-mono">
              Foundation of my work
            </div>
          </div>
          <div className="flex justify-center px-10">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col mt-2">
                <div className="text-2xl font-semibold text-slate-200 font-mono">
                  Functionality
                </div>
                <div className="text-sm font-semibold text-[#9ca7c2db] font-mono">
                  Build that serve a purpose
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-semibold text-slate-200 font-mono">
                  Simplicity
                </div>
                <div className="text-sm font-semibold text-[#9ca7c2db] font-mono w-48">
                  Complexity surfaced only when necessary
                </div>
              </div>
            </div>
            <div>
              <Image
                className="w-[40vh]"
                src={foundationElement}
                alt="element"
              />
            </div>
            <div className="flex flex-col pl-5">
              <div className="text-2xl font-semibold text-slate-200 font-mono">
                Emotion
              </div>
              <div className="text-sm font-semibold text-[#9ca7c2db] font-mono w-44">
                Products with a character & solutions optimized for emotion
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden flex border-[2px] rounded-[4vw] border-[#4b505f] h-full">
          <Carousel className="h-full w-full">
            <CarouselContent className="h-[43vh]">
              <CarouselItem className="h-full">
                <div
                  className="h-full w-full flex flex-col justify-center pt-20 items-center"
                  style={{
                    backgroundImage: "url('/manali.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <p className="text-xl font-medium">Manali</p>
                  <p className="font-semibold text-gray-400">
                    Favorite spot on Earth [so far]
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div
                  className="h-full w-full flex flex-col justify-center pt-20 items-center"
                  style={{
                    backgroundImage: "url('/kasol.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <p className="text-xl font-medium">Kasol</p>
                  <p className="font-semibold text-gray-400">
                    Favorite spot on Earth [so far]
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center border-[2px] rounded-[4vw] border-[#4b505f]">
          <GrGithub size={72} />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">Git Hub</p>
            <p className="font-semibold text-sm text-gray-400">
              Join My Developing Journey
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center border-[2px] rounded-[4vw] border-[#4b505f]">
          <ImLinkedin size={72} fill="#0077B5" />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium">Linkedin</p>
            <p className="font-semibold text-sm text-gray-400">
              Few of My Proffesional Works
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2 justify-center items-center border-[2px] rounded-[4vw] border-[#4b505f] bg-[#9ca7c2]">
          <PiHandWavingLight size={72} fill="#000000" />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium text-black">Say Hello!</p>
            <p className="font-semibold text-sm text-gray-600">
              For project inquiries or just connecting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
