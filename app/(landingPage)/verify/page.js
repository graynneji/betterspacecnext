"use client";
import VerifyEmail from "@/app/_components/VerifyEmail";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const emailId = searchParams.get("emailId");
  return <VerifyEmail emailId={emailId} />;
}
