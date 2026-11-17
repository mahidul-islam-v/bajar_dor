import Link from "next/link";
import Date from "./extra/DateBn";
import { Suspense } from "react";
import SessionButton from "./SessionButton";

const Navbar = () => {
  
  return (
    <div className="container mx-auto my-2 flex justify-between px-4">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className=" bg-[#05893E] h-10 w-10 rounded-lg flex items-center justify-center text-2xl">
            🛒
          </div>
        </Link>
        <div>
          <Link href="/">
            <div className="font-bold text-xl">বাজার দর</div>
          </Link>
          <div className="text-gray-500 text-[12px]">
            <Date></Date>
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        <Suspense fallback="...loading">
          <SessionButton></SessionButton>
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
