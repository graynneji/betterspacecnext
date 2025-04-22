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
  SealCheck,
  VideoCamera,
  ChatTeardropText,
} from "@phosphor-icons/react/dist/ssr";
import Input from "../Input/Input";
import { getTherapistPatients } from "@/app/store/getTherapistPatientsSlice";
import { getUsers } from "@/app/_lib/data-services";
import { useDispatch, useSelector } from "react-redux";
import { sideBarToggle } from "@/app/store/sideBarSlice";
import { PhoneCall } from "@phosphor-icons/react";
import ProfilePicsThera from "@/public/t.jpg";
import { useTransition } from "react";
import { signOut } from "@/app/_lib/actions";

const messNav = [
  { menuName: "Sessions", MenuIcon: ChatCircleText },
  { menuName: "Schedule", MenuIcon: CalendarDots },
];

const RenderPatientList = () => {
  return (
    <>
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
      <div className={styles.patientsCon}>
        <div></div>
        <PatientsCard />
      </div>
      <div className={styles.profileDown}>
        <Image src={MenuSquare} alt="chat icon" className={styles.IconImages} />
        <span className={styles.settings}>More</span>
      </div>
    </>
  );
};

const RenderTherapistDetails = ({ users }) => {
  const [isPending, startTransition] = useTransition();
  const handleSignout = () => {
    startTransition(() => signOut());
  };
  const therapist = {
    name: "Dr. Maya Thompson",
    isVerified: true,
    profileImage: "/maya.jpg",
    bio: "Licensed therapist with 10+ years of experience helping individuals with anxiety, depression, and trauma recovery.",
    license: "LCSW #123456 (California)",
    communication: ["Video", "Phone", "Chat"],
    specialties: ["Anxiety", "Depression", "PTSD"],
    location: "Los Angeles, CA",
  };

  const getIcon = (method) => {
    switch (method) {
      case "Video":
        return <VideoCamera size={24} color="#1E90FF" />;
      case "Phone":
        return <PhoneCall size={24} color="#2E8B57" />;
      case "Chat":
        return <ChatTeardropText size={24} color="#6A5ACD" />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className={styles.card}>
        <PatientsCard image={ProfilePicsThera} />
        <h2 className={styles.name}>
          {therapist.name}
          {therapist.isVerified && (
            <SealCheck size={24} color="#1da1f2" weight="fill" />
          )}
        </h2>
        <p className={styles.bio}>{therapist.bio}</p>

        <div className={styles.infoSection}>
          <p>
            <strong>License:</strong> {therapist.license}
          </p>
          <p>
            <strong>Specialties:</strong> {therapist.specialties.join(", ")}
          </p>
          <p>
            <strong>Location:</strong> {therapist.location}
          </p>
          <p className={styles.communcations}>
            {/* <strong>Communication:</strong> */}
            <ul className={styles.commMethods}>
              {therapist.communication.map((method) => (
                <li key={method}>
                  {getIcon(method)} {method}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className={styles.actionButtons}>
        <button className={`${styles.btn} ${styles.primary}`}>
          Book Appointment
        </button>

        <button className={`${styles.btn} ${styles.tertiary}`}>
          Change Therapist
        </button>
        <button className={`${styles.btn} ${styles.textLink}`}>
          View Reviews
        </button>
        <button className={`${styles.btn} ${styles.textLink} ${styles.danger}`}>
          Report Profile
        </button>
        <button
          className={`${styles.btn} ${styles.secondary}`}
          onClick={handleSignout}
        >
          {isPending ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

function SideBar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sideBar.sidebar);
  const users = useSelector((state) => state.getStoredUsers.users);
  console.log("sideBar", users);
  const handleSidebarToggle = () => {
    dispatch(sideBarToggle());
  };
  if (sidebar) {
    return (
      <div
        style={{
          position: "absolute",
          marginTop: "80px",
          width: "50px",
          height: "50px",
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
        <Sidebar
          size={28}
          weight="fill"
          onClick={handleSidebarToggle}
          color="#325343"
        />
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
          <Sidebar
            size={28}
            weight="fill"
            onClick={handleSidebarToggle}
            color="#325343"
          />
        </div>
      </div>

      {!users[0]?.therapist ? (
        <RenderPatientList />
      ) : (
        <RenderTherapistDetails users={users} />
      )}
    </section>
  );
}

export default SideBar;
