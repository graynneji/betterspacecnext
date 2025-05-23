import SideBar from "@/app/_components/SideBar/SideBar";
import UserProvider from "@/app/_provider/UserProvider";
import "@/app/_styles/globalStyles.css";
import {
  getAllPatientsAttachedToTherapist,
  getTherapistsPatients,
  getTherpistInfo,
} from "../_lib/data-services";

import styles from "./layout.module.css";
import IncomingCallModal from "../_components/IncomingCallModal.js/IncomingCallModal";
// import CallUI from "../_components/CallUI/CallUI-v1";
import Stream from "../_components/Stream/Stream";

export default async function DashboardLayout({ children }) {
  const therepistPatient = await getAllPatientsAttachedToTherapist();
  const therapistInfo = await getTherpistInfo();

  return (
    <>
      <html lang="en">
        <body>
          <UserProvider>
            <div className={styles.appLayout}>
              <SideBar
                therepistPatient={therepistPatient}
                therapistInfo={therapistInfo}
              />
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
            <IncomingCallModal />
            <Stream />
          </UserProvider>
        </body>
      </html>
    </>
  );
}
