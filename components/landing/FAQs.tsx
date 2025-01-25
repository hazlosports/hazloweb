"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const items = [
  {
    id: 0,
    question: "How do I find people to play sports with near me?",
    answer:
      "HAZLO’s search and connect features allow you to find people with similar interests nearby. Simply search by sport, location, or skill level to connect with others looking to play.",
  },
  {
    id: 1,
    question: "Can anyone become a coach on HAZLO?",
    answer:
      "Yes, any user with the right skills and experience can apply to be a coach. Our review system ensures that users can find coaches who meet their needs and skill level.",
  },
  {
    id: 2,
    question: "Are the events on HAZLO free to join?",
    answer:
      "Many events are free, while others may have a small fee depending on the organizer. Each event listing will clearly indicate any costs involved.",
  },
  {
    id: 3,
    question: "How does the booking process for coaching sessions work?",
    answer:
      "You can browse available coaches, read reviews, and choose a session that suits your schedule. Once booked, you’ll receive a confirmation and details about the session.",
  },
];

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7">
      <div
        className="flex items-center border-b border-white/30 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex-1 text-md lg:text-lg font-bold">{question}</span>
        {!isOpen ? <Plus /> : <Minus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            className="text-sm lg:text-lg"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQs() {
  return (
    <div className="text-white bg-gradient-to-b from-blue to-purple pt-[20px] pb-[72px] sm:pt-10 sm:pb-24 px-8 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl lg:text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
