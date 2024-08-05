import React from "react";

type PropTypes = {
  title: string;
  icon: React.ReactNode;
};

const CategoryCard = ({ title, icon }: PropTypes): JSX.Element => {
  return (
    <a
      href={`/services/category/${title}`}
      className="flex cursor-pointer flex-col items-center justify-center gap-y-3 rounded-md bg-gradient-to-tr from-fuchsia-500 to-cyan-500 p-5"
    >
      <p>{icon}</p>
      <p>{title}</p>
    </a>
  );
};

export default CategoryCard;
