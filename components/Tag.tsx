import { TagType } from "@/types";
import React from "react";

const Tag = ({ tag }: { tag: TagType }) => {
  return (
    <div className="flex h-40 min-w-40 items-center justify-center rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 p-3 text-center">
      <p>{tag.title}</p>
    </div>
  );
};

export default Tag;
