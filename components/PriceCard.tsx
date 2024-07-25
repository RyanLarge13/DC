import React from "react";
import Image from "next/image";
import Check from "@/public/assets/check-mark.svg";

type PropTypes = {
  title: string;
  tag: string;
  price: string;
  benefits: string[];
  desc: string;
  btnTxt: string;
  styles: string;
};

const PriceCard = ({
  title,
  tag,
  price,
  benefits,
  desc,
  btnTxt,
  styles,
}: PropTypes) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-between rounded-md p-5 shadow-lg shadow-slate-950 duration-500 hover:z-10 hover:scale-105 ${styles}`}
    >
      <h3 className="mb-3 font-semibold">{title}</h3>
      <p className="mb-2 w-min whitespace-pre rounded-lg bg-white px-5 py-2 text-black">
        {tag}
      </p>
      <p className="mb-5 mt-2 text-4xl font-bold">${price}</p>
      <div className="flex flex-col items-center justify-center gap-y-3">
        {benefits.map((benefit: string) => (
          <div className="flex items-center justify-between gap-x-2">
            <Image src={Check} alt="check mark" className="w-5" />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
      <hr className="my-10 w-full border-t border-t-slate-500" />
      <div>
        <p className="px-5">{desc}</p>
        <button className="mt-10 w-full rounded-sm bg-gradient-to-tr from-orange-500 to-fuchsia-500 px-10 py-3 text-white duration-500 hover:from-cyan-500 hover:to-fuchsia-500">
          {btnTxt}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
