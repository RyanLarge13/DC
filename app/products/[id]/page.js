"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import adCards from "@/constants/adCards";

const page = () => {
  const [product, setProduct] = useState(null);
  const [imageWidth, setImageWidth] = useState(400);
  const prodImage = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const theProduct = adCards.filter((card) => card.id === parseInt(id, 10));
    setProduct(theProduct[0]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (prodImage) {
        const parentOffsetTop = prodImage.offsetTop;
        const scrollPosition = window.scrollY;
        if (scrollPosition >= parentOffsetTop) {
          setImageWidth(200);
        } else {
          setImageWidth(400);
        }
      }
      window.addEventListener("scroll", handleScroll);
    };
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative px-1">
      {product && (
        <div>
          <div ref={prodImage} className="flex justify-center items-center">
            <Image
              src={product.img}
              alt="product"
              style={{ width: imageWidth, height: 300 }}
              className={`rounded-md`}
            />
          </div>
          <h1 className="text-7xl m-10 ml-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent border-b border-b-slate-300">
            {product.title}
          </h1>
          <div className="px-3">
            <p>{product.about}</p>
            <h2 className="mt-20 text-4xl bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
              Details
            </h2>
            <div className="ml-2">
              {product.details.map((detail) => (
                <div>
                  <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent mt-5">
                    {detail.title}
                  </h3>
                  <p className="">{detail.desc.text}</p>
                  {detail.desc.items && (
                    <ul className="ml-10">
                      {detail.desc.items.map((item) => (
                        <li className="list-disc">{item}</li>
                      ))}
                    </ul>
                  )}
                  <p>{detail.desc?.text2}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-20 text-4xl bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
              Features
            </h2>
            <div>
              {product.features.map((feature) => (
                <div>
                  <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent mt-5">
                    {feature.title}
                  </h3>
                  <div>
                    {feature.list.map((subject) => (
                      <div>
                        <p className="ml-2 mt-2 bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
                          {subject.title}
                        </p>
                        <p className="ml-3">{subject.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="mt-20 text-4xl bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
              Instructions
            </h2>
            <div>
              {product.instructions.map((instruction) => (
                <div>
                  <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent mt-5 border-b mb-2">
                    {instruction.title}
                  </h3>
                  <p className="bg-white bg-opacity-30 backdrop-blur-sm shadow-sm rounded-md p-2">
                    {instruction.instruction}
                  </p>
                  <div className="p-3 flex justify-between items-center">
                    {instruction.btns.map((btn) => (
                      <Button
                        text={btn.text}
                        click={null}
                        params={null}
                        classes=""
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="mt-20 text-4xl bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent mb-3">
                Examples
              </h2>
              {product.examples.map((example) => (
                <div className="my-5 rounded-md shadow-md p-3">
                  <p>{example.title}</p>
                  <img src={example.img} alt="projevt" />
                  <p>
                    <span className="text-4xl">"</span>
                    {example.quote}
                    <span className="text-4xl">"</span>
                  </p>
                  <p>{example.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
