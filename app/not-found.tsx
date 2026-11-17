import Link from "next/link";
import { toBanglaNumber } from "./lib/convertNumber";
export default function NotFound() {
  return (
    <div className="container mx-auto mt-30 flex flex-col items-center gap-4">
      <h2 className="text-8xl font-bold">{toBanglaNumber(404)}</h2>
      <p className="text-4xl font-semibold text-gray">পেজ টি পাওয়া যায় নি</p>
      <Link href={"/"}>
        <button className="mt-2 px-6 py-4 rounded-xl w-fit btn btn-success bg-[#05893E] text-white font-normal text-base">
          হোম পেজে ফিরে যান
        </button>
      </Link>
    </div>
  );
}
