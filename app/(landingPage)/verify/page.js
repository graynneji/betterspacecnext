"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const VerifyEmail = dynamic(() => import("@/app/_components/VerifyEmail"), {
  ssr: false, // Disable SSR for the component
  loading: () => <div>Loading...</div>, // Fallback loading state
});

export default function Page() {
  const searchParams = useSearchParams();
  const emailId = searchParams?.get("emailId");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail emailId={emailId} />
    </Suspense>
  );
}
