"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AdCard = ({ card }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -25 }}
      className="relative rounded-md shaodw-md bg-white bg-opacity-10 backdrop-blur-sm cursor-pointer"
    >
      <Image
        src={card.img}
        alt={card.title}
        className="w-[175px] h-[175px] object-cover rounded-md"
      />
      <div className="p-2 bg-white rounded-md">
        <p>{card.title}</p>
      </div>
    </motion.div>
  );
};

export default AdCard;
