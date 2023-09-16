"use client";

import { useState } from "react";
import Button from "@/components/Button";
import FilterMenu from "@/components/FilterMenu";

const FilterOptions = () => {
  const [price, setPrice] = useState(false);

  return (
    <>
      {price && <FilterMenu type={"price"} />}
      <div className="mt-5 grid grid-cols-2 gap-x-3">
        <Button
          text="price"
          click={() => setPrice(true)}
          params={null}
          classes=""
        />
        <Button text="category" click={null} params={null} classes="" />
        <Button text="type" click={null} params={null} classes="" />
        <Button text="time" click={null} params={null} classes="" />
      </div>
    </>
  );
};

export default FilterOptions;
