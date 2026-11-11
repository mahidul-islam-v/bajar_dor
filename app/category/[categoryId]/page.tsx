import { Suspense } from "react";
import CategoryContent from "@/app/Components/CategoryContent";

export default function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
      <CategoryContent params={params} />
    </Suspense>
    </div>
  );
}
