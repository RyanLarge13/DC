"use client";
import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="">
      <Bars
        height="80"
        width="80"
        color="#d946ef"
        visible={true}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
