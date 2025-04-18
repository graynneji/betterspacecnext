import React from "react";
import Care from "../Care/Care";
import MessageInput from "../MessageInput/MessageInput";
import styles from "./TherapyForPatients.module.css";
import AppNav from "../AppNav/AppNav";
import FooterMenu from "../FooterMenu/FooterMenu";

function TherapyForPatients({ userInfo }) {
  return (
    <section style={{ width: "auto" }} className={styles.appLayout}>
      <AppNav userInfo={userInfo} />
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          paddingTop: "60px",
          paddingBottom: "60px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <Care userInfo={userInfo} />
      </div>
      <div className={styles.rare}>
        <MessageInput />
        <FooterMenu />
      </div>
    </section>
  );
}

export default TherapyForPatients;
