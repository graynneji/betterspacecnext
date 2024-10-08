"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, lazy } from "react";

const VerifyEmail = lazy(() => import("@/app/_components/VerifyEmail"));

export default function Page() {
  const searchParams = useSearchParams();
  const emailId = searchParams.get("emailId");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail emailId={emailId} />;
    </Suspense>
  );
}
