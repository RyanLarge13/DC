"use client";

import React from "react";

const Backdrop = ({ click }: { click: () => void }) => {
  return (
    <div
      className="fixed inset-0 isolate z-[999] bg-transparent"
      onClick={() => click()}
    ></div>
  );
};

export default Backdrop;
