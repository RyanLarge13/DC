"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AdCard = ({ card }) => {
  const [showDeets, setShowDeets] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -25 }}
      className="rounded-md shaodw-md bg-white bg-opacity-10 backdrop-blur-sm cursor-pointer"
    >
      <Image
        src={card.img}
        alt={card.title}
        className="w-[350px] h-[350px] object-cover rounded-md"
      />
      <div
        onClick={() => setShowDeets((prev) => !prev)}
        className="p-2 bg-white rounded-md"
      >
        <p>{card.title}</p>
        <div>{showDeets && <p>{card.desc}</p>}</div>
      </div>
    </motion.div>
  );
};

export default AdCard;
