import TherapyForPatients from "@/app/_components/TherapyForPatients/TherapyForPatients";
import Care from "../../_components/Care/Care";
import { getUsers } from "../../_lib/data-services";

export default async function Page() {
  const userInfo = await getUsers();

  // const patientInfo = await getPatients();

  if (userInfo) {
    // return <Care />;
    return <TherapyForPatients userInfo={userInfo} />;
  }
}
