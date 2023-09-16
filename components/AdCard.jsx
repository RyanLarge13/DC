"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

const AdCard = ({ card }) => {
  return (
    <motion.div className="my-20">
      <Image
        src={card.img}
        alt={card.title}
        className="h-[300px] w-[300px] object-cover rounded-lg shadow-2xl"
      />
      <h3 className="mt-2 mb-1 text-lg font-semibold">{card.title}</h3>
      <p className="text-slate-700">{card.priceRange}</p>
      <p>{card.desc}</p>
      <Button
        text={`View ${card.title}`}
        click={"route"}
        params={`/products/${card.id}`}
        classes="mt-3"
      />
    </motion.div>
  );
};

export default AdCard;
