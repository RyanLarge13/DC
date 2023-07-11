"use client";

import {useRouter} from "next/navigation"

const Button = ({ text, click, params, classes }) => {
	const router = useRouter()
	
  return (
    <button
      type="button"
      onClick={() => click === "route" ? router.push(params) : click && click(params)}
      className={`px-3 py-1 my-2 rounded-full shadow-md bg-gradient-to-r from-orange-300 to-pink-400 text-white font-semibold w-full ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
