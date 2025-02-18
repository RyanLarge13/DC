"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const PasswordInput = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex w-full items-center justify-between rounded-md bg-slate-700 px-4 py-2 text-lg">
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        name="password"
        id="password"
        className="w-full bg-transparent outline-none focus:shadow-md focus:shadow-slate-700 focus:outline-none"
      />
      <button type="button" onClick={() => setShow((prev) => !prev)}>
        {show ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
