"use client";

import Image from "next/image";
import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxElement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-backdrop"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/top of image.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <motion.div
        className="z-10 relative grid place-items-center h-full"
        style={{
          y: textY,
          postion: "absolute",
          top: "-15%", // Adjust the vertical position (up a bit)
          left: "-20%",
        }}
      >
        <Image
          src="/Joe Galvin.png"
          alt="Joe Galvin"
          width={500}
          height={500}
          className="rounded-md"
        />
      </motion.div>

      {/* <motion.h1
        className="font-bold text-white text-sha text-7xl md:text-9xl z-10 relative grid place-items-center h-full"
        style={{ y: textY }}
      >
        PARALLAX
      </motion.h1> */}

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url('/bottom of image.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
