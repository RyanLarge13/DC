"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FilterMenu = ({ type }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed z-[999] top-20 left-10 right-10 rounded-md shadow-lg bg-white"
    >
      {type === "price" && (
        <div className="grid grid-cols-4">
          <p className="p-2 border-slate-100 border">$</p>
          <p className="p-2 border-slate-100 border">$$</p>
          <p className="p-2 border-slate-100 border">$$$</p>
          <p className="p-2 border-slate-100 border">$$$$</p>
          <p className="p-2 border-slate-100 border">$-$$</p>
          <p className="p-2 border-slate-100 border">$-$$$</p>
          <p className="p-2 border-slate-100 border">$-$$$$</p>
          <p className="p-2 border-slate-100 border">$-$$$$$</p>
        </div>
      )}
    </motion.div>
  );
};

export default FilterMenu;
