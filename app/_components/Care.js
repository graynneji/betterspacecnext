// import { createClient } from "../utils/supabase/server";
import { getPatients } from "../_lib/data-services";
import styles from "./Care.module.css";
import Header from "./Header";
import Nav from "./Nav";

export default async function Care() {
  const patientInfo = await getPatients();

  const selected = JSON.parse(patientInfo[0].selected);
  {
    /* <p>Hello {patientInfo[0].name}</p> */
  }

  {
    /* <p>Hello {patientInfo[0].selected}</p> */
  }

  return (
    <div className={styles.careContainer}>
      {/* <Header /> */}
      <p>Hello {patientInfo[0].name}</p>
    </div>
  );
  //   return <p>Hello {data.user.email}</p>;
}
