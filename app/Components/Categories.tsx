"use cache"
import React, { Suspense } from "react";
import { ICategory } from "../Interface/category";
import Link from "next/link";

const Categories = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
  const data = await res.json()
  
  return (
    <div className="flex gap-1 px-4 font-semibold text-[12px] container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((cat: ICategory) => (
          <Link href={`/category/${cat.id}`} key={cat.id}>
            <button className="btn btn-ghost text-sm px-3 py-1 my-1 t">
              {cat.icon} {cat.nameBn}
            </button>
          </Link>
        ))}
      </Suspense>
    </div>
  );
};

export default Categories;
