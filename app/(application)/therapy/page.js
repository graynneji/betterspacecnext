import Care from "../../_components/Care";
import { getPatients } from "../../_lib/data-services";

export default async function Page() {
  const userInfo = await getPatients();

  // const patientInfo = await getPatients();
  console.log(userInfo);
  if (userInfo) {
    // return <Care />;
    return <Care userInfo={userInfo} />;
  }
}
