"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";

const Service = ({ service }) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      key={service.title}
      className="w-min rounded-md shadow-md p-2 my-5 flex-1"
    >
      <Image
        src={service.img}
        alt={service.title}
        className="rounded-md shadow-md min-w-[350px] min-h-[350px] md:max-h-[350px] object-cover"
      />
      <h3 className="mt-2 mb-1 lg:text-lg">{service.title}</h3>
      <p className="text-xs lg:text-md">{service.desc}</p>
      <Button text="read more" click={null} params={null} classes="" />
    </motion.div>
  );
};

export default Service;
