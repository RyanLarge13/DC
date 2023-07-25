"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import adCards from "@/constants/adCards";

const page = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const theProduct = adCards.filter((card) => card.id === parseInt(id, 10));
    setProduct(theProduct[0]);
  }, []);

  return (
    <section className="">
      {product && (
        <div>
          <p>{product.title}</p>
          <Image
            src={product.img}
            alt="product"
            width={400}
            height={400}
            className="rounded-md mt-10 ml-10 shadow-md"
          />
        </div>
      )}
    </section>
  );
};

export default page;
