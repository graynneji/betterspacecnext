"use client";
import VerifyEmail from "@/app/_components/VerifyEmail";
import { useSearchParams } from "next/navigation";
import { Suspense, lazy } from "react";

const VerifyEmailPage = lazy(() => import("./VerifyEmailPage"));

export default function Page() {
  const searchParams = useSearchParams();
  const emailId = searchParams.get("emailId");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail emailId={emailId} />;
    </Suspense>
  );
}
