"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AdCard = ({ card }) => {
  return (
    <motion.div className="relative rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm cursor-pointer">
      <Image
        src={card.img}
        alt={card.title}
        className="w-[175px] h-[175px] lg:w-[300px] lg:h-[300px] object-cover rounded-t-md shadow-md"
      />
      <div className="p-2 bg-white rounded-b-md">
        <p>{card.title}</p>
      </div>
    </motion.div>
  );
};

export default AdCard;
