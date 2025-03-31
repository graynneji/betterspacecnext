import Care from "../../_components/Care";
import { getPatients } from "../../_lib/data-services";

export default async function Page() {
  const patientInfo = await getPatients();

  // const patientInfo = await getPatients();
  console.log(patientInfo);
  if (patientInfo) {
    // return <Care />;
    return <Care initialPatientInfo={patientInfo} />;
  }
}
