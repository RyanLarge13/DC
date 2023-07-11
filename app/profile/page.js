"use client";

import { useSession } from "next-auth/react";
import quickLinks from "@/constants/quickLinks";
import Image from "next/image";
import Button from "@/components/Button";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <section>
      {/*<Image
        src={session?.user.image}
        alt="user"
        width={75}
        height={75}
        className="rounded-full shadow-md  object-contain"
      />*/} 
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl ml-2 mt-10 mr-5">
        Welcome To Your Profile
      </h1>
      <p className="text-4xl p-2 mt-5 ml-10 bg-gradient-to-r from-yellow-500 to-fuchsia-500 bg-clip-text text-transparent">
        {session?.user.name}
      </p>
      <div className="mt-10 px-5">
        {quickLinks.map((link) => (
          <Button text={link.title} click={null} params={null} classes="" />
        ))}
      </div>
      <div className="mt-10 px-3">
        <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl mt-10 mr-5">
          Your Information
        </h2>
        <div className="ml-2">
          <div className="rounded-md shadow-md p-2 my-2">
            <p>Your Email on file:</p>
            <p className="text-sm rounded-md p-2 bg-white">
              {session?.user.email}
            </p>
          </div>
          <div className="rounded-md shadow-md p-2 my-2">
            <p>Your phone number on file:</p>
            <p className="text-sm rounded-md bg-white p-2">
              {session?.user.phone ? session?.user.phone : "No number on file"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
