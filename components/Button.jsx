"use client";

const Button = ({ text, key, click, classes }) => {
  return (
    <button type="button" key={key} onClick={click} className={`px-3 py-1 rounded-full shadow-md bg-gradient-to-r from-black to-sky-600 ${classes}`}>
      {text}
    </button>
  );
};

export default Button;
