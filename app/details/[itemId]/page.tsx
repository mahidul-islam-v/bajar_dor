import ProductDetails from "@/app/Components/ProductDetails";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}
