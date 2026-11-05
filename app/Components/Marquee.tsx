"use cache";

import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { IProduct } from "../Interface/product";
import { Suspense } from "react";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const data = await res.json();
  return (
    <div className="border-b border-gray-100">
      <Suspense fallback={<div>Loading...</div>}>
        <MarqueeText direction="right">
          {data.map((product: IProduct) => (
            <div key={product.id} className="p-2 border-r border-gray-50">
              {product.image}{" "}
              <span className="font-semibold">{product.nameBn}</span>{" "}
              {product.today} ৳/{product.unit}{" "}
              {product.change.dir === "up" ? (
                <span className="text-green-500">▲ {product.change.pct}%</span>
              ) : (
                <span className="text-red-500">▼ {product.change.pct}%</span>
              )}
            </div>
          ))}
        </MarqueeText>
      </Suspense>
    </div>
  );
};

export default Marquee;
