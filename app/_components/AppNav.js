import React from "react";
import styles from "./AppNav.module.css";
import Profile from "@/public/applicationIcon/confident-b.png";
import Image from "next/image";

function AppNav() {
  return (
    <div className={styles.styledNav}>
      <div></div>
      <div className={styles.proCon}>
        <div className={styles.profile}>
          <Image
            src={Profile}
            alt="profile"
            width={50}
            height={50}
            style={{ borderRadius: "200px" }}
          />
        </div>
        <span className={styles.therName}>Ukaegbu Gray</span>
      </div>
    </div>
  );
}

export default AppNav;
