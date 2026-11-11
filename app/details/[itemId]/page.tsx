import { IProduct } from "@/app/Interface/product";
import { toBanglaNumber } from "@/app/lib/convertNumber";
import React, { Suspense } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const page = async ({ params }: { params: Promise<{ itemId: string }> }) => {
  const { itemId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${itemId}`,
  );
  const item: IProduct = await res.json();
  const diff = item.yesterday - item.today;

  // https://api.api-store.workers.dev/api/bazardor/products/1

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <div className=" container mx-auto">
        <div className="my-6 text-[12px] flex gap-2 items-center">
          হোম <MdChevronRight />
          {item.categoryNameBn} <MdChevronRight />
          {item.nameBn}
        </div>

        <div>
          <section className=" mb-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="flex items-center gap-4">
              <div className="flex p-5 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-3xl">
                {item.image}
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl font-bold leading-tight">
                  {item.nameBn}
                </h1>
                <p className="text-xs text-gray-500">
                  প্রতি {item.unit} · {item.category}
                </p>
                <p className="mt-1 text-xs text-gray-700">
                  গতকালের তুলনায় আজ দাম
                  {item.change.dir === "down" ? (
                    <b> কমেছে </b>
                  ) : (
                    <b> বেড়েছে </b>
                  )}{" "}
                  · {toBanglaNumber(Math.abs(diff))} টাকা
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center self-start rounded-xl bg-gray-100 px-6 py-3 text-center sm:self-auto">
              <span className="text-xs text-gray-500">আজকের দাম</span>
              <span className="text-3xl font-bold leading-tight">
                {toBanglaNumber(item.today)}
              </span>
              <span className="text-xs text-gray-500">টাকা / {item.unit}</span>
              <span className="mt-0.5 text-xs font-semibold text-red-600">
                {item.change.dir === "up" ? (
                  <span className="text-[#D03739] bg-[#F0F5F0] px-2 py-0.5 rounded-full font-semibold">
                    ▲ {toBanglaNumber(item.change.pct)}%
                  </span>
                ) : (
                  <span className="text-[#1A9951] bg-[#F0F5F0] px-2 py-0.5 rounded-full font-semibold">
                    ▼ {toBanglaNumber(item.change.pct)}%
                  </span>
                )}
              </span>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="mb-3 text-base font-bold">দামের সারসংক্ষেপ</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs text-gray-600">সর্বনিম্ন দাম</p>
                <p className=" text-2xl font-bold text-green-600">
                  {toBanglaNumber(Math.min(...item.markets.map((t) => t.min)))}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  সবচেয়ে কম দামের বাজার
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs text-gray-600">সর্বাধিক দাম</p>
                <p className="mt-1 text-2xl font-bold text-red-600">
                  {toBanglaNumber(Math.max(...item.markets.map((t) => t.max)))}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-xs text-gray-600">গড় দাম</p>
                <p className="mt-1 text-2xl font-bold text-green-600">
                  {toBanglaNumber(item.today)}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>
                <p className="mt-0.5 text-xs text-gray-500">
                  প্রতি কেজি-এর হিসাবে
                </p>
              </div>
            </div>

            <h2 className="mb-3 mt-6 text-base font-bold">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-xl border font-medium border-gray-200">
              <table className="w-full min-w-160 text-left text-sm">
                <thead className="bg-gray-50 text-xs text-gray-500 font-bold">
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 font-medium">বাজার</th>
                    <th className="px-4 py-3 font-medium">বিভাগ</th>
                    <th className="px-4 py-3 text-right font-medium">
                      সর্বনিম্ন
                    </th>
                    <th className="px-4 py-3 text-right font-medium">
                      সর্বাধিক
                    </th>
                    <th className="px-4 py-3 text-right font-medium">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {item.markets.map((m) => (
                    <tr
                      key={`${m.market}-${m.division}`}
                      className="border-b border-gray-300 even:bg-gray-50 last:border-b-0"
                    >
                      <td className="px-4 py-3">{m.market}</td>
                      <td className="px-4 py-3 text-gray-600">{m.division}</td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        {toBanglaNumber(m.min)} টাকা
                      </td>
                      <td className="px-4 py-3 text-right text-gray-600">
                        {toBanglaNumber(m.max)} টাকা
                      </td>
                      <td className="px-4 py-3 text-right font-bold">
                        {toBanglaNumber((m.min + m.max) / 2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      ;
    </Suspense>
  );
};

export default page;
