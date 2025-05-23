import TherapistWallet from "@/app/_components/TherapistWallet/TherapistWallet";
import { getTherpistInfo } from "@/app/_lib/data-services";
import React from "react";

export default async function Page() {
  const { therapistData } = await getTherpistInfo();
  return <TherapistWallet therapistData={therapistData} />;
}
