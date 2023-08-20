"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

const AdCard = ({ card }) => {
  return (
    <motion.div className="my-40">
      <Image
        src={card.img}
        alt={card.title}
        className="h-[300px] w-[300px] object-cover rounded-lg shadow-2xl"
      />
      <div className="mt-10">
        <p className="text-lg font-semibold">{card.title}</p>
        <p className="text-slate-700">{card.priceRange}</p>
        <p>{card.desc}</p>
      </div>
      <Button
        text={`View ${card.title}`}
        click={"route"}
        params={`/products/${card.id}`}
        classes=""
      />
    </motion.div>
  );
};

export default AdCard;
