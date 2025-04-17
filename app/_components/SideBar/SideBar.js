"use client";
import styles from "./SideBar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Company Logo.svg";
// import { getUsers } from "@/app/store/getUsersSlice";
import PatientsCard from "../PatientsCard/PatientsCard";
import MenuSquare from "@/public/applicationIcon/squares-2x2.svg";
import {
  ChatCircleText,
  GearSix,
  Sidebar,
  CalendarDots,
  SidebarSimple,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";
import Input from "../Input/Input";
import { getTherapistPatients } from "@/app/store/getTherapistPatientsSlice";
import { getUsers } from "@/app/_lib/data-services";
import { useDispatch, useSelector } from "react-redux";
import { sideBarToggle } from "@/app/store/sideBarSlice";

const messNav = [
  { menuName: "Sessions", MenuIcon: ChatCircleText },
  { menuName: "Schedule", MenuIcon: CalendarDots },
];

function SideBar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sideBar.sidebar);
  console.log("sideBar", sidebar);
  const handleSidebarToggle = () => {
    dispatch(sideBarToggle());
  };

  if (sidebar) {
    return (
      <div
        style={{
          position: "absolute",
          marginTop: "80px",
          width: "40px",
          height: "40px",
          backgroundColor: "#EEEEEE",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "999999",
        }}
      >
        <Sidebar size={28} weight="fill" onClick={handleSidebarToggle} />
      </div>
    );
  }

  return (
    <section className={styles.sideBarCon}>
      <div className={styles.topSide}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <Link href="/">
            <Image width={160} height={40} src={Logo} alt="Logo" />
          </Link>
          <Sidebar size={28} weight="fill" onClick={handleSidebarToggle} />
        </div>

        <div>
          <h3 className={styles.chatHeader}>Messages</h3>
          <Input inputType="search" placeholder="Search..." />
          <div className={styles.chatNav}>
            {messNav.map((item, index) => (
              <p className={styles.chatOptions} key={item.menuName}>
                <item.MenuIcon size={20} />
                {item.menuName}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.patientsCon}>
        <div></div>
        <PatientsCard />
      </div>

      <div className={styles.profileDown}>
        <Image src={MenuSquare} alt="chat icon" className={styles.IconImages} />
        <span className={styles.settings}>More</span>
      </div>
    </section>
  );
}

export default SideBar;
