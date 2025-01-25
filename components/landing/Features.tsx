"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  GraduationCap,
  Heart,
  HeartPulse,
  User,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    id: 0,
    icon: Users,
    title: "Connect With Players",
    description:
      "Discover and connect with people who share your passion for sports, whether they're nearby or part of a global community.",
    borderGradient:
      "linear-gradient(to right, rgba(0, 230, 118, 0.8), rgba(0, 153, 204, 0.8))",
  },
  {
    id: 1,
    icon: Calendar,
    title: "Create and Join Events",
    description:
      "Organize sports events with friends or join public events to meet new players and get active together.",
    borderGradient:
      "linear-gradient(to right, rgba(34, 139, 229, 0.8), rgba(136, 60, 235, 0.8))",
  },
  {
    id: 2,
    icon: User,
    title: "Find and Book Coaches",
    description:
      "Improve your skills by booking sessions with rated and reviewed coaches, making it easier to find the right fit for you.",
    borderGradient:
      "linear-gradient(to right, rgba(255, 182, 77, 0.8), rgba(255, 133, 51, 0.8))",
  },
  {
    id: 3,
    icon: HeartPulse,
    title: "Find and Provide Services",
    description:
      "Access wellness services like nutritionists, physical therapists, sports psychologists, etc., to support every step of your journey, whether you're improving fitness, recovering, or staying healthy.",
    borderGradient:
      "linear-gradient(to right, rgba(255, 77, 148, 0.8), rgba(153, 0, 153, 0.8))",
  },
];

export function Features() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="py-[72px] sm:py-24 px-8 lg:px-20">
      <h2 className="text-center font-bold text-2xl sm:text-6xl tracking-tight max-w-4xl mx-auto text-white">
        Discover the Power of Connection Through Sports
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-sm lg:text-xl text-white/70">
          HAZLO brings people together to play, learn, and inspire each other.
          Explore our features designed to make sports more social, accessible,
          and fun.
        </p>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div
          className="grid grid-cols-1 lg:grid-cols-7 lg:auto-rows-[200px] gap-4 mt-10 mx-auto"
          ref={ref}
        >
          {features.map((item, i) => {
            const isBigItem = i === 0 || i === 3;
            const animationDirection = isBigItem ? "left" : "right";

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: animationDirection === "left" ? -100 : 100,
                }}
                animate={mounted && inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                style={{ background: item.borderGradient }}
                className={`flex flex-col text-center rounded-lg p-[2px] ${
                  isBigItem ? "lg:col-span-4" : "lg:col-span-3"
                }`}
              >
                <div className="flex flex-col bg-background rounded-lg p-4 justify-center items-center gap-5 h-full w-full">
                  <item.icon size={24} color="white" />
                  <h4 className="font-semibold text-2xl text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm lg:text-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <h3 className="text-center font-bold text-xl sm:text-3xl tracking-tight max-w-4xl mx-auto text-white mt-12">
        Share Your Journey
      </h3>
      <div className="max-w-2xl mx-auto">
        <p className="text-center mt-4 text-sm lg:text-xl text-white/70">
          Post photos, videos, and updates to inspire others and celebrate a
          healthier lifestyle with the HAZLO community
        </p>
      </div>
    </div>
  );
}
