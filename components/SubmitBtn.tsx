"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = ({ text, styles }: { text: string; styles: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      className={`${styles} w-full rounded-sm bg-gradient-to-tr from-orange-500 to-purple-500 px-5 py-2 ${pending ? "opacity-50" : "opacity-100"}`}
      disabled={pending}
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
