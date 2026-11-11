import Image from "next/image";
import banner from "@/app/assets/bazar-hero.png";
import DateBn from "./extra/DateBn";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="card rounded-3xl card-side bg-base-100 shadow-sm justify-between min-h-75">
        <div className="card-body justify-start p-0 max-w-[50%]">
          <div className="mb-2 badge badge-outline rounded-full bg-[#05893e16] text-[#05893E] border-none text-sm">
            <DateBn></DateBn>
          </div>
          <h2 className="mb-5 card-title text-4xl font-bold">
            আজকের বাজারের দাম এক নজরে
          </h2>
          <div>
            <p className="text-[#1d271fb3] text-sm">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <button className="mt-6 px-6 rounded-lg w-fit btn btn-success bg-[#05893E] text-white text-base">
              সব পণ্য দেখুন
            </button>
          </div>

          <div className="card-actions justify-end"></div>
        </div>
        <figure className="h-48 md:h-64 mr-10 overflow-visible">
          <Image
            src={banner}
            alt="banner"
            className="h-full w-auto object-contain"
          />
        </figure>
      </div>
    </div>
  );
};

export default HeroBanner;
