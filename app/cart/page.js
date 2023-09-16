"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Button from "/components/Button";
import Footer from "@/components/Footer";

const page = () => {
  const { data: session } = useSession();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await fetch(`/api/user/${session?.user.id}/cart`);
      const data = await res.json();
      setItems(data);
      setLoading(false);
    };
    if (session?.user.id) {
      setLoading(true);
      fetchCartItems();
    }
  }, [session?.user.id]);

  return (
    <section className="px-3">
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl mt-10 mr-5">
        Your Cart
      </h1>
      {loading ? (
        <p>Loading items...</p>
      ) : (
        <div>
          {items.length > 0 ? (
            <div>
              <p>Here are all the items in your cart..</p>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 mt-20 rounded-md shadow-md">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="my-5 p-2 rounded-md shadow-md bg-white"
                  >
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
              <Button
                text="Checkout"
                click={null}
                params={null}
                classes="mt-5"
              />
            </div>
          ) : (
            <div>
              <h2 className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent text-4xl mt-10 ml-5">
                Is Empty
              </h2>
            </div>
          )}
        </div>
      )}
      <Footer />
    </section>
  );
};

export default page;
