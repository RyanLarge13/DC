"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Button from "@/components/Button";

const Profile = () => {
  const { data: session } = useSession();

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`/api/user/${session.user.id}/data`);
      const data = res.json();
      setOrders(data.orders);
      setProducts(data.products);
      setServices(data.services);
    };
    if (session?.user) fetchUserData();
  }, []);

  return (
    <section>
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl ml-2 mt-10 mr-5">
        Welcome To Your Profile
      </h1>
      <p className="text-4xl p-2 mt-5 ml-10 bg-gradient-to-r from-yellow-500 to-fuchsia-500 bg-clip-text text-transparent">
        {session?.user.name}
      </p>
      <div className="mt-20 mx-3 p-2 rounded-md shadow-md bg-white bg-opacity-20 backdrop-blur-sm">
        <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl">
          Your Open Orders
        </h2>
        <p className="text-sm mt-5">Your outgoing orders will appear here...</p>
        <div className="mt-10">
          {orders && orders.length > 0 ? (
            orders.map((order) => <div></div>)
          ) : (
            <Button
              text="Shop your new website!"
              click={null}
              params={null}
              classes=""
            />
          )}
        </div>
      </div>
      <div className="mt-20 mx-3 p-2 rounded-md shadow-md bg-white bg-opacity-20 backdrop-blur-sm">
        <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl">
          Purchased Products
        </h2>
        <p className="text-sm mt-5">
          The products you have purchased and are currently in progress of
          completion
        </p>
        <div className="mt-10">
          {products && products.length > 0 ? (
            products.map((product) => <div></div>)
          ) : (
            <Button
              text="Bring your dreams to life!"
              click={null}
              params={null}
              classes=""
            />
          )}
        </div>
      </div>
      <div className="mt-20 mx-3 p-2 rounded-md shadow-md bg-white bg-opacity-20 backdrop-blur-sm">
        <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-2xl">
          Purchased Services
        </h2>
        <p className="text-sm mt-5">Your current service subscriptions</p>
        <div className="mt-10">
          {services && services.length > 0 ? (
            services.map((service) => <div></div>)
          ) : (
            <Button
              text="Build up your empire!"
              click={null}
              params={null}
              classes=""
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
