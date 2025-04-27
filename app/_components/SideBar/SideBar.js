"use client";
import styles from "./SideBar.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Company Logo.svg";
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
  MagnifyingGlass,
  CaretRight,
  Plus,
  Clock,
  Bookmark,
  SignOut,
  DotsThreeOutline,
} from "@phosphor-icons/react/dist/ssr";
import { PhoneCall, Star } from "@phosphor-icons/react";
import ProfilePicsThera from "@/public/t.jpg";
import { useTransition } from "react";
import { signOut } from "@/app/_lib/actions";
import { useDispatch, useSelector } from "react-redux";
import { sideBarToggle } from "@/app/store/sideBarSlice";

const messNav = [
  { menuName: "Sessions", MenuIcon: ChatCircleText },
  { menuName: "Schedule", MenuIcon: CalendarDots },
];

const RenderPatientList = () => {
  return (
    <>
      <div className={styles.patientListContainer}>
        <h3 className={styles.chatHeader}>Messages</h3>

        {/* Modern search input */}
        <div className={styles.searchContainer}>
          <MagnifyingGlass
            size={18}
            weight="bold"
            className={styles.searchIcon}
          />
          <input
            type="text"
            placeholder="Search conversations..."
            className={styles.searchInput}
          />
        </div>

        {/* Navigation tabs with animated indicator */}
        <div className={styles.navigationTabs}>
          {messNav.map((item, index) => (
            <div
              className={`${styles.navTab} ${
                index === 0 ? styles.activeTab : ""
              }`}
              key={item.menuName}
            >
              <item.MenuIcon size={20} weight="bold" />
              <span>{item.menuName}</span>
              {index === 0 && <div className={styles.activeIndicator}></div>}
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div className={styles.filterChips}>
          <div className={`${styles.chip} ${styles.activeChip}`}>
            <span>All</span>
          </div>
          <div className={styles.chip}>
            <span>Unread</span>
          </div>
          <div className={styles.chip}>
            <span>Recent</span>
          </div>
        </div>
      </div>

      {/* Patient conversations with visual indicators */}
      <div className={styles.patientsList}>
        <div className={styles.patientsListHeader}>
          <h4
            style={{
              letterSpacing: "-0.01em",
            }}
          >
            Recent Conversations
          </h4>
          <span className={styles.viewAll}>
            View all <CaretRight size={14} />
          </span>
        </div>

        <PatientsCard />

        <div className={styles.addNewChat}>
          <div className={styles.addIcon}>
            <Plus size={20} weight="bold" />
          </div>
          <span>Start new conversation</span>
        </div>
      </div>

      <div className={styles.profileDown}>
        <div className={styles.quickActions}>
          <div className={styles.actionItem}>
            <Clock size={20} weight="bold" />
            <span>History</span>
          </div>
          <div className={styles.actionItem}>
            <Bookmark size={20} weight="bold" />
            <span>Saved</span>
          </div>
          <div className={styles.actionItem}>
            <GearSix size={20} weight="bold" />
            <span>Settings</span>
          </div>
        </div>
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
        return (
          <VideoCamera size={24} weight="fill" className={styles.commIcon} />
        );
      case "Phone":
        return (
          <PhoneCall size={24} weight="fill" className={styles.commIcon} />
        );
      case "Chat":
        return (
          <ChatTeardropText
            size={24}
            weight="fill"
            className={styles.commIcon}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.therapistProfileContainer}>
      {/* Profile header with visual enhancements */}
      <div className={styles.profileHeader}>
        {/* <div className={styles.coverImage}></div> */}
        <div className={styles.profileImageContainer}>
          <Image
            src={ProfilePicsThera}
            alt="Therapist profile"
            width={90}
            height={90}
            className={styles.therapistImage}
          />
          <div className={styles.statusIndicator}></div>
        </div>

        <div className={styles.nameVerification}>
          <h2 className={styles.therapistName}>
            {therapist.name}
            {therapist.isVerified && (
              <SealCheck
                size={22}
                color="#1D9BF0"
                weight="fill"
                className={styles.verifiedBadge}
              />
            )}
          </h2>
          <div className={styles.ratingBar}>
            <div className={styles.stars}>
              <Star size={16} weight="fill" color="#FFD700" />
              <Star size={16} weight="fill" color="#FFD700" />
              <Star size={16} weight="fill" color="#FFD700" />
              <Star size={16} weight="fill" color="#FFD700" />
              <Star size={16} weight="fill" color="#FFD700" />
            </div>
            <span className={styles.ratingText}>5.0 (126 reviews)</span>
          </div>
        </div>
      </div>

      {/* Bio with card styling */}
      <div className={styles.bioCard}>
        <p className={styles.bioText}>{therapist.bio}</p>
      </div>

      {/* Information sections with card styling and icons */}
      <div className={styles.infoCards}>
        <div className={styles.infoCard}>
          <div className={styles.infoIconContainer}>
            <SealCheck size={20} weight="fill" className={styles.infoIcon} />
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>License</span>
            <p className={styles.infoValue}>{therapist.license}</p>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIconContainer}>
            <UserCircle size={20} weight="fill" className={styles.infoIcon} />
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Specialties</span>
            <div className={styles.specialtyTags}>
              {therapist.specialties.map((specialty) => (
                <span key={specialty} className={styles.specialtyTag}>
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoIconContainer}>
            <MapPin size={20} weight="fill" className={styles.infoIcon} />
          </div>
          <div className={styles.infoContent}>
            <span className={styles.infoLabel}>Location</span>
            <p className={styles.infoValue}>{therapist.location}</p>
          </div>
        </div>
      </div>

      {/* Communication methods with modern styling */}
      <div className={styles.communicationSection}>
        <h3 className={styles.sectionTitle}>Communication Methods</h3>
        <div className={styles.commMethods}>
          {therapist.communication.map((method) => (
            <div key={method} className={styles.commMethod}>
              {getIcon(method)}
              <span>{method}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons with enhanced styling */}
      <div className={styles.actionButtonsContainer}>
        <button className={`${styles.actionButton} ${styles.primaryButton}`}>
          Book Appointment
        </button>

        <div className={styles.secondaryActions}>
          <button className={styles.secondaryButton}>Change Therapist</button>

          <button className={styles.secondaryButton}>View Reviews</button>
        </div>

        <div className={styles.utilityActions}>
          <button className={styles.utilityButton}>
            <DotsThreeOutline size={20} weight="bold" />
            More Options
          </button>

          <button className={styles.logoutButton} onClick={handleSignout}>
            <SignOut size={20} weight="bold" />
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

// You'll need to add this at the top with the other imports
function MapPin(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      fill={props.color || "currentColor"}
      {...props}
    >
      <path d="M12 1.5c-4.14 0-7.5 3.358-7.5 7.5 0 1.421.403 2.822 1.166 4.03.309.493.677 1.039 1.08 1.582l.653.915C8.51 17.158 11.217 21 12 21c.783 0 3.49-3.842 4.601-5.473l.652-.914c.404-.545.772-1.09 1.08-1.583.764-1.208 1.167-2.609 1.167-4.03 0-4.142-3.36-7.5-7.5-7.5Zm0 17.33c-.207-.006-2.603-2.995-3.877-5.045-.459-.74-.759-1.22-1.006-1.615A6.01 6.01 0 0 1 6 9c0-3.309 2.691-6 6-6s6 2.691 6 6a6.01 6.01 0 0 1-1.117 3.67c-.247.395-.547.875-1.007 1.615-1.273 2.05-3.67 5.039-3.876 5.045Z" />
      <path d="M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.5A1.5 1.5 0 1 1 12 7.5a1.5 1.5 0 0 1 0 3Z" />
    </svg>
  );
}

function SideBar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sideBar.sidebar);
  const users = useSelector((state) => state.getStoredUsers.users);

  const handleSidebarToggle = () => {
    dispatch(sideBarToggle());
  };

  if (sidebar) {
    return (
      <div className={styles.collapsedSidebar}>
        <Sidebar
          size={28}
          weight="fill"
          onClick={handleSidebarToggle}
          className={styles.toggleIcon}
        />
      </div>
    );
  }

  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.sideBarHeader}>
        <Link href="/" className={styles.logoLink}>
          <Image
            width={160}
            height={40}
            src={Logo}
            alt="Logo"
            className={styles.logo}
          />
        </Link>
        <Sidebar
          size={24}
          weight="fill"
          onClick={handleSidebarToggle}
          className={styles.toggleIcon}
        />
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
