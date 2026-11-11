"use cache";

import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { IProduct } from "../Interface/product";
import { Suspense } from "react";
import { toBanglaNumber } from "../lib/convertNumber";
import Link from "next/link";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  return (
    <div className="text-base">
      <Suspense fallback={<div>Loading...</div>}>
        <MarqueeText direction="right">
          {data.map((product: IProduct) => (
            <Link href={`/details/${product.id}`} key={product.id}>
              <div className="group p-3 border-r border-gray-100">
                {product.image}{" "}
                <span className="font-semibold group-hover:underline">
                  {product.nameBn}
                </span>{" "}
                &nbsp;
                {toBanglaNumber(product.today)} ৳/{product.unit}{" "}
                {product.change.dir === "up" ? (
                  <span className="text-text-[#D03739]">
                    ▲ {toBanglaNumber(product.change.pct)}%
                  </span>
                ) : (
                  <span className="text-[#1A9951]">
                    ▼ {toBanglaNumber(product.change.pct)}%
                  </span>
                )}
              </div>
            </Link>
          ))}
        </MarqueeText>
      </Suspense>
    </div>
  );
};

export default Marquee;
