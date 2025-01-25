"use client";

import Image from "next/image";
import Coins from "@/public/landing/coins.png";
import location from "@/public/landing/location.png";
import atlanta from "@/public/landing/atlanta.png";
import newyork from "@/public/landing/newyork.png";
import miami from "@/public/landing/miami.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Location() {
  const containierRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containierRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-20, 70]);
  return (
    <div className="bg-gradient-to-b from-background to-blue py-[72px] sm:py-24">
      <h2 className="text-center font-bold text-2xl sm:text-6xl tracking-tight max-w-4xl mx-auto text-white">
        And here’s the best part
      </h2>
      <div className="max-w-lg lg:max-w-2xl mx-auto flex mt-10">
        <div className="">
          <Image
            src={Coins}
            alt=""
            height={150}
            width={150}
            className="max-w-none"
            draggable="false"
          />
        </div>
        <p className="text-left mt-5 text-sm lg:text-xl text-white/70">
          Hazlo lets everyone monetize their passion. Athletes, coaches, and
          creators can earn by sharing their expertise, teaching lessons,
          offering services, or hosting events.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-20 lg:py-44">
        <div className="flex items-center gap-4">
          {" "}
          <h2 className="font-bold text-2xl sm:text-6xl tracking-tight text-white ml-12">
            First City
          </h2>
          <Image
            src={location}
            alt=""
            height={50}
            width={50}
            className="max-w-none"
          />
        </div>
        <div
          className="flex flex-col lg:flex-row gap-4 items-center lg:justify-between max-w-4xl mx-auto mt-20 px-4"
          ref={containierRef}
        >
          <div className="flex flex-col gap-4">
            <Image
              src={atlanta}
              alt="Atlanta"
              height={250}
              width={250}
              className="max-w-none rounded-md"
            />
            <p className="font-semibold text-white text-xl text-center">
              Atlanta, GA
            </p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div className="relative">
              <Image
                src={newyork}
                alt="Atlanta"
                height={250}
                width={250}
                className="max-w-none rounded-md blur-sm"
              />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 flex items-center justify-center bg-black/60 text-white text-lg font-semibold rounded-md">
                Coming Soon
              </div>
            </div>
            <p className="font-semibold text-white text-xl text-center">
              New York, NY
            </p>
          </div>
          <div className="flex flex-col gap-4 relative">
            <div className="relative">
              <Image
                src={miami}
                alt="Atlanta"
                height={250}
                width={250}
                className="max-w-none rounded-md blur-sm"
              />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 flex items-center justify-center bg-black/60 text-white text-lg font-semibold rounded-md">
                Coming Soon
              </div>
            </div>
            <p className="font-semibold text-white text-xl text-center">
              Miami, FL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
