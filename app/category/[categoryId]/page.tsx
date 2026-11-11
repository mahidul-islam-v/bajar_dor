import ItemCard from "@/app/Components/items/ItemCard";
import { IProduct } from "@/app/Interface/product";
import { toBanglaNumber } from "@/app/lib/convertNumber";
import React, { Suspense } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const page = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data = await res.json();

  return (
    <Suspense fallback=" Loading...">
      <div className=" container mx-auto px-4 mt-6 mb-18">
        <div className="rounded-2xl p-4 flex flex-col gap-3 border border-[#E1E8E1] bg-[#FAFCFA] mb-6">
          <div className="flex gap-3">
            <div className="px-3 py-2 text-3xl rounded-lg flex justify-center items-center">
              {data[0].categoryIcon}
            </div>
            <div>
              <div className="text-2xl font-bold">{data[0].categoryNameBn}</div>
              <div>
                {toBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pr-10">
          <div className="text-[12px] rounded-2xl p-4 flex gap-3 items-center justify-end border border-[#E1E8E1] bg-[#FAFCFA]">
            <div>সাজান</div>
            <div className=" text-[12px] rounded-2  flex gap-1 items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-0 py-0 rounded-xl text-[12px]"
                >
                  ডিফল্ট
                  <RiArrowDropDownLine />
                </div>
                <ul
                  tabIndex={-1}
                  className="dropdown-content text-[12px] menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>ডিফল্ট</a>
                  </li>
                  <li>
                    <a>দাম</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p>মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে</p>

          <div className="grid-cols-3 grid gap-4">
            {data.map((product: IProduct) => (
              <ItemCard key={product.id} item={product}></ItemCard>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default page;
