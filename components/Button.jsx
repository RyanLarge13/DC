"use client";

const Button = ({ text, click, params, classes }) => {
  return (
    <button
      type="button"
      onClick={() => click(params)}
      className={`px-3 py-1 rounded-full shadow-md bg-gradient-to-r from-orange-300 to-pink-400 text-white font-semibold ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
