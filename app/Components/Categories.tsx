"use cache"
import React, { Suspense } from "react";
import { ICategory } from "../Interface/category";

const Categories = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
  const data = await res.json()
  
  return (
    <div className="flex gap-1 px-4 font-semibold text-[12px]">
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((cat: ICategory) => (
          <div key={cat.id} className="p-2">
            {cat.icon} {cat.nameBn}
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default Categories;
