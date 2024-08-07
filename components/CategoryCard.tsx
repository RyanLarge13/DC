import { ServiceType } from "@prisma/client";
import React from "react";

const CategoryCard = ({ category }: { category: ServiceType }): JSX.Element => {
  const { title } = category;
  return (
    <a
      href={`/services/category/${title}`}
      className="flex cursor-pointer flex-col items-center justify-center gap-y-3 rounded-md bg-gradient-to-tr from-fuchsia-500 to-cyan-500 p-5"
    >
      <p>{title}</p>
    </a>
  );
};

export default CategoryCard;
