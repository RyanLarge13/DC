"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <section>
      <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent text-4xl ml-2 mt-10 mr-5">
        Welcome To Your Profile
      </h1>
      <p className="text-4xl p-2 mt-5 ml-10 bg-gradient-to-r from-yellow-500 to-fuchsia-500 bg-clip-text text-transparent">
        {session?.user.name}
      </p>
    </section>
  );
};

export default Profile;
