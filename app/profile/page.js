"use client"

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <section>
      <p>profile</p>
    </section>
  );
};

export default Profile;
