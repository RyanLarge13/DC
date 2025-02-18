"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Notifications = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const err = searchParams.get("error");
    const success = searchParams.get("success");

    if (err) {
      setMessage(err);
      setError(true);
    }
    if (success) setMessage(success);

    if (err || success) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
      const newParams = new URLSearchParams(searchParams.toString());

      newParams.delete("error");
      newParams.delete("success");

      router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
    }
  }, [searchParams]);

  return (
    <div
      className={`fixed left-5 top-5 z-[1000] max-w-[400px] rounded-md bg-gradient-to-tr ${error ? "from-red-500" : "from-green-500"} ${show ? "pointer-events-auto opacity-90" : "pointer-events-none opacity-0"} to-black p-5 text-sm shadow-md shadow-[#333] outline outline-1 outline-slate-300 backdrop-blur-sm duration-200 ease-in-out`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Notifications;
