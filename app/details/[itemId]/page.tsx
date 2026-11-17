"use client"
import ProductDetails from "@/app/Components/ProductDetails";
import { authClient } from "@/app/lib/auth-client";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ itemId: string }>;
  }) {
  const { data: session, isPending } = authClient.useSession();
  
    if (isPending) {
      return null;
    }
  
  if (session?.user) {
    return (
      <Suspense fallback={<div>...Loading</div>}>
        <ProductDetails params={params} />
      </Suspense>
    );
  } else { 
      redirect("/sign-in");
  }
}
