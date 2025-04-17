import SideBar from "@/app/_components/SideBar/SideBar";
import UserProvider from "@/app/_provider/UserProvider";
import "@/app/_styles/globalStyles.css";
import {
  getAllPatientsAttachedToTherapist,
  getTherapistsPatients,
} from "../_lib/data-services";
import { signOut } from "../_lib/actions";
import styles from "./layout.module.css";

export default async function DashboardLayout({ children }) {
  const therepistPatient = await getAllPatientsAttachedToTherapist();

  // signOut();
  return (
    <>
      <html lang="en">
        <body>
          <UserProvider>
            <div className={styles.appLayout}>
              <SideBar therepistPatient={therepistPatient} />
              {/* <SideBar /> */}
              <main
                style={{
                  flexGrow: 1,
                  //   overflowY: "auto",
                  //   paddingTop: "60px",
                  //   paddingBottom: "60px",
                  //   paddingRight: "20px",
                  //   paddingLeft: "20px",
                }}
              >
                {children}
              </main>
            </div>
          </UserProvider>
        </body>
      </html>
    </>
  );
}
