import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "../ui/Buttons";
import Image from "next/image";
import Basketball from "@/public/landing/Basketball.png";
import Gymming from "@/public/landing/Gymming.png";
import Football from "@/public/landing/Football.png";
import Tennis from "@/public/landing/Tennis.png";

interface HeroProps {
  ctaRef: React.RefObject<HTMLDivElement>;
}

export function Hero({ ctaRef }: HeroProps) {
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(60px 40px at ${xPercentage}% ${yPercentage}%, #0E0E0E, transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollToCTA = () => {
    if (ctaRef.current) {
      ctaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 lg:py-0 px-8 lg:px-24 overflow-hidden">
    <div className="relative overflow-hidden">
      <div className="container max-w-full relative">
        <div className="flex items-center justify-center w-full">
          <div className="border border-white/30 flex py-1 px-2 items-center rounded-lg relative">
            <motion.div
              ref={tabRef}
              style={{ maskImage }}
              className="absolute inset-0 -m-px border border-[#364CE7] rounded-lg"
            />
            <p className="flex items-center gap-2 text-white">
              Introducing the
              <span className="bg-[linear-gradient(to_right,#0EA8F5,#692EF8)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                Hazlo
              </span>
              app
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4 w-full">
          <div className="inline-flex relative w-full justify-center">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex text-white">
              Connect, <br /> Play, Inspire.
            </h1>
            <motion.div
              className="absolute left-[85%] top-[5%] hidden lg:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={Football}
                alt=""
                height={250}
                width={250}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute right-[80%] top-[10%] hidden lg:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={Tennis}
                alt=""
                height={300}
                width={300}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="max-w-2xl mt-8 mx-auto w-full">
          <div
            className="flex flex-col text-center rounded-lg p-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(34, 139, 229, 1), rgba(136, 60, 235, 1))",
            }}
          >
            <div className="flex flex-col bg-background rounded-lg p-2 justify-center items-center gap-5 h-full w-full">
              <h2 className="text-white max-w-xl font-medium text-3xl">
                Welcome to Hazlo! <br/> The Social Sports Network
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center relative">
        <p className="text-center text-md lg:text-lg mt-8 mb-8 max-w-xl text-white">
          Whether you're a pro or just starting out, Hazlo connects you with like-minded athletes. Create your profile, share your progress, and find others to train, play, or compete with!
        </p>
          <motion.div
              className="absolute left-[75%] top-[55%] hidden lg:inline"
              drag
            dragSnapToOrigin
          >
            <Image
              src={Gymming}
              alt=""
              height={200}
              width={200}
              className="max-w-none"
              draggable="false"
            />
          </motion.div>
          <motion.div
              className="absolute right-[68%] top-[70%] hidden lg:inline"
              drag
            dragSnapToOrigin
          >
            <Image
              src={Basketball}
              alt=""
              height={200}
              width={200}
              className="max-w-none"
              draggable="false"
            />
          </motion.div>
        </div>
        <div className="flex justify-center mt-12 mb-12 w-full">
  <Button
    onClick={handleScrollToCTA}
    className="text-[1.5rem] font-semibold w-[15em] h-[4em] flex items-center justify-center text-center
              bg-blue-500 hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 
              rounded-full shadow-lg hover:shadow-xl"
  >
    Join the Waitlist
  </Button>
</div>
      </div>
    </div>
  </section>
  );
}
