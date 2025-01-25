import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingProps {
  size?: number;
}

const Loading: React.FC<LoadingProps> = ({ size = 40 }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensuring the component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="relative overflow-hidden"
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
        animate={{
          rotate: 360, // Rotate 360 degrees
        }}
        transition={{
          duration: 2, // Total time for one complete rotation
          repeat: Infinity, // Keep rotating infinitely
          ease: "linear", // Smooth rotation without easing
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#0EA8F5] to-[#692EF8] rounded-full" />
      </motion.div>
    </div>
  );
};

export default Loading;
