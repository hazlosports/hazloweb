"use client";

import Image from "next/image";
import instaProfile from "@/public/landing/instaProfile.png";
import instagram from "@/public/landing/instagram.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ProductShowcase() {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="text-white bg-gradient-to-b from-purple to-background py-[72px] sm:py-24 px-4">
      <div className="max-w-xl lg:max-w-6xl mx-auto relative">
        <h2 className="text-center text-xl sm:text-4xl font-medium tracking-tighter items-center">
          Join our{" "}
          <span className="inline-flex items-center gap-2">
            <Image
              src={instagram}
              alt="Instagram Icon"
              width={40}
              height={40}
              className="align-middle"
            />
            community of 9k+ people and be part of our progress
          </span>
        </h2>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={instaProfile}
            alt="Product Screenshot"
            className="mt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
}
