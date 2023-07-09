"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Button from "@/components/Button";

const ContactForm = () => {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")

  return (
    <form className="mt-5">
      <input
        className="border-none outline-none rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm p-3 w-full"
        placeholder="Name"
        value={session?.user ? session.user.name : name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border-none outline-none rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm p-3 w-full my-3"
        placeholder="Email"
        value={session?.user ? session.user.email : email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="border-none outline-none rounded-md shadow-md bg-white bg-opacity-10 backdrop-blur-sm p-3 w-full h-[200px]"
        placeholder="Message"
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      ></textarea>
      <Button text="Send" click={null} params={null} classes="" />
    </form>
  );
};

export default ContactForm;
