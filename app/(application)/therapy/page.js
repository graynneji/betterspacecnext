import Care from "../../_components/Care";
import { getPatients } from "../../_lib/data-services";

export default async function Page() {
  const patientInfo = await getPatients();

  if (patientInfo) {
    return <Care />;
  }
}
