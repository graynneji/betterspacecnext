"use client";
import VerifyEmail from "@/app/_components/VerifyEmail";
import { useSearchParams } from "next/navigation";
import { Suspense, lazy } from "react";

const VerifyEmailWrapper = lazy(() => {
  const searchParams = useSearchParams();
  const emailId = searchParams?.get("emailId");

  return <VerifyEmail emailId={emailId} />;
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailWrapper />
    </Suspense>
  );
}
