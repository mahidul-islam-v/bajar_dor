import { IProduct } from "@/app/Interface/product";
import { toBanglaNumber } from "@/app/lib/convertNumber";
import React from "react";

const ItemCard = ({ item }: { item: IProduct }) => {
  return (
    <div className="rounded-2xl p-4 flex flex-col gap-3 border border-[#E1E8E1] bg-[#FAFCFA]">
      <div className="flex gap-3">
        <div className="px-3 py-2 bg-[#F0F5F0] rounded-lg flex justify-center items-center">
          {item.image}
        </div>
        <div>
          <div>{item.nameBn}</div>
          <div>প্রতি {item.unit}</div>
        </div>
      </div>
      <div className="flex justify-between text-[12px]">
        <div>
          <div>আজকের দাম</div>
          <div className="flex items-end font-semibold">
            <span className="font-bold text-xl mr-1">
              {toBanglaNumber(item.today)}
            </span>{" "}
            টাকা
          </div>
        </div>
        <div className="self-end text-[12px]">
          {item.change.dir === "up" ? (
            <span className="text-[#D03739] bg-[#F0F5F0] px-2 py-0.5 rounded-full font-semibold">
              ▲ {toBanglaNumber(item.change.pct)}%
            </span>
          ) : (
            <span className="text-[#1A9951] bg-[#F0F5F0] px-2 py-0.5 rounded-full font-semibold">
              ▼ {toBanglaNumber(item.change.pct)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
