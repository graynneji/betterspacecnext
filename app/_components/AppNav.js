import React from "react";
import styles from "./AppNav.module.css";
import Profile from "@/public/applicationIcon/confident-b.png";
import Image from "next/image";

function AppNav() {
  return (
    <div className={styles.styledNav}>
      <div></div>
      <div className={styles.proCon}>
        <h2 className={styles.profile}>
          Session with <span className={styles.therName}>Ukaegbu Gray</span>
        </h2>
      </div>
    </div>
  );
}

export default AppNav;
