"use client";

import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { FaCheckCircle, FaRegUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";

const SessionButton = () => {
  const handleSignout = async () => {
    authClient.signOut();
    toast("Signing Out...", {
      style: {
        borderRadius: "40px",
        background: "#333",
        color: "#fff",
        fontWeight: "600",
      },
    });
  }

  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return null;
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-2 items-center min-w-24">
          <div className="text-right pt-1">
            <h1 className="text-base leading-2">{session?.user.name}</h1>
            <h6>
              <h1 className="text-[12px] font-light ">{session?.user.email}</h1>
            </h6>
          </div>

          <FaRegUserCircle className="text-3xl" />
        </div>

        <button
          onClick={() => handleSignout() }
          className="btn btn-ghost text-sm hover:text-[#D03739]"
        >
          সাইন আউট
        </button>
      </div>
    );
  }

  return (
    <>
      <Link href="/sign-in" className="btn btn-ghost text-sm">
        সাইন ইন
      </Link>
      <Link
        href="/sign-up"
        className="btn btn-success bg-[#05893E] text-white text-sm"
      >
        সাইন আপ
      </Link>
    </>
  );
};

export default SessionButton;