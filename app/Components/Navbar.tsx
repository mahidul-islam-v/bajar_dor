import Link from "next/link";
import Date from "./extra/DateBn";

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
        <Link href="/sign-in">
          <button className="btn btn-ghost text-sm">সাইন ইন</button>
        </Link>
        <Link href="/sign-up">
          <button className="btn btn-success bg-[#05893E] text-white text-sm">
            সাইন আপ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
