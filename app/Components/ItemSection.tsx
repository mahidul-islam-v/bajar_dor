"use cache";
import React from "react";
import PriceIncrease from "./items/PriceIncrease";
import PriceDecrease from "./items/PriceDecrease";
import AllProducts from "./items/AllProducts";
import { toBanglaNumber } from "../lib/convertNumber";

const ItemSection = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  return (
    <div className="container mx-auto flex flex-col gap-10 pb-18">
      <div>
        <h2 className="text-xl font-bold mb-3">
          <span className="text-[#D03739]">▲</span> আজ দাম বেড়েছে
        </h2>
        <PriceIncrease products={data}></PriceIncrease>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">
          <span className="text-[#1A9951]">▼</span> আজ দাম কমেছে
        </h2>
        <PriceDecrease products={data}></PriceDecrease>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">সব পণ্য</h2>
        <p className="text-sm text-[#1D271Fb3] mb-4">
          মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে
        </p>
        <AllProducts products={data} />
      </div>
    </div>
  );
};

export default ItemSection;
