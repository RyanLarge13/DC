"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const Profile = () => {
  const { data: session } = useSession();

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`/api/user/${session.user.id}/data`);
      const data = await res.json();
      setOrders(data.orders);
      setProducts(data.products);
      setServices(data.services);
    };
    if (session?.user) fetchUserData();
  }, [session?.user]);

  return (
    <section className="px-3">
      <h1 className="text-7xl ml-2 mt-10 mr-5">
        Welcome To Your{" "}
        <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
          Profile
        </span>
      </h1>
      <p className="text-4xl p-2 mt-5 ml-10 bg-gradient-to-r from-yellow-500 to-fuchsia-500 bg-clip-text text-transparent">
        {session?.user.name}
      </p>
      <div className="mt-20">
        <h2 className="text-4xl">
          <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent ">
            Open
          </span>{" "}
          Orders
        </h2>
        <div className="mt-10">
          {orders.length > 0 &&
            orders.map((order) => (
              <div
                key={order._id}
                className="p-3 rounded-md shadow-lg bg-white bg-opacity-20 backdrop-blur-sm mb-5"
              >
                <div className="flex justify-between items-center border-b">
                  <h3 className="text-2xl bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-cyan-500">
                    {order.title}
                  </h3>
                  <p>{new Date(order?.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="my-3">
                  <p className="bg-slate-100 px-2 rounded-md shadow-lg">
                    Message to developer:
                  </p>
                  <p className="bg-white p-2 rounded-md mt-3">
                    {order.message}
                  </p>
                </div>
                <Button
                  text="Cancel order"
                  click={null}
                  params={null}
                  classes=""
                />
              </div>
            ))}
          <Button
            text="Shop your new website!"
            click={"route"}
            params={"/products"}
            classes=""
          />
        </div>
      </div>
      <div className="mt-20 mx-3 p-2 rounded-md shadow-md bg-white bg-opacity-20 backdrop-blur-sm">
        <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-3xl">
          Purchased Products
        </h2>
        <p className="mt-5">
          Purchased products currently in progress of completion
        </p>
        <div className="mt-10">
          {products && products.length > 0 ? (
            products.map((product) => <div></div>)
          ) : (
            <Button
              text="Bring your dreams to life!"
              click={"route"}
              params={"/products"}
              classes=""
            />
          )}
        </div>
      </div>
      <div className="mt-20 mx-3 p-2 rounded-md shadow-md bg-white bg-opacity-20 backdrop-blur-sm">
        <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-3xl">
          Purchased Services
        </h2>
        <p className="mt-5">Current service subscriptions</p>
        <div className="mt-10">
          {services && services.length > 0 ? (
            services.map((service) => <div></div>)
          ) : (
            <Button
              text="Build up your empire!"
              click={"route"}
              params={"/services"}
              classes=""
            />
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Profile;
