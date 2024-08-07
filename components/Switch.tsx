"use client";
import React from "react";

const Switch = ({
  title,
  styles,
  value,
  toggle,
}: {
  title: string;
  styles: string;
  value: boolean;
  toggle: (value: boolean) => void;
}) => {
  return (
    <button
      onClick={() => toggle(!value)}
      className={`${styles} flex w-full items-center justify-between`}
    >
      <p>{title}</p>
      <div className="relative h-[20px] w-[40px] rounded-full bg-slate-950 bg-opacity-95">
        <div
          className={`absolute bg-gradient-to-tr from-cyan-500 to-fuchsia-500 bg-[length:90px_20px] ${value ? "left-[20px] bg-left" : "left-0 bg-right"} h-[20px] w-[20px] rounded-full duration-300`}
        ></div>
      </div>
    </button>
  );
};

export default Switch;
