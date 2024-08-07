import React from "react";
import { Tags } from "@prisma/client";

const TagCard = ({ tag }: { tag: Tags }) => {
  return (
    <a
      href={`/services/tag/${tag.title}`}
      className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center"
    >
      <p>{tag.title}</p>
    </a>
  );
};

export default TagCard;
