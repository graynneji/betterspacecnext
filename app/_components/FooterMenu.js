import Image from "next/image";
import styles from "./FooterMenu.module.css";
import React from "react";
import Chat from "@/public/applicationIcon/chat-bubble-bottom-center-text.svg";
import calendar from "@/public/applicationIcon/calendar-days.svg";
import User from "@/public/applicationIcon/user-group.svg";
import MenuSquare from "@/public/applicationIcon/squares-2x2.svg";
import {
  ChatText,
  Heart,
  ChatCircleText,
  CalendarDots,
  UsersThree,
  List,
  PaperPlaneRight,
} from "@phosphor-icons/react/dist/ssr";
import Input from "./Input";
import Button from "./Button";

function FooterMenu() {
  return (
    <div className={styles.rare}>
      <div className={styles.searchCon}>
        <Input inputType="textarea" chat={true} />
        <div className={styles.sendCon}>
          <div className={styles.send}>
            {" "}
            <PaperPlaneRight size={18} color="white" />
          </div>
        </div>
      </div>
      <nav className={styles.navCon}>
        <ul className={styles.navigation}>
          <li>
            <Image src={Chat} alt="chat icon" className={styles.IconImages} />
            {/* <ChatCircleText size={24} /> */}
            <span>Sessions</span>
          </li>
          <li>
            <Image
              src={calendar}
              alt="chat icon"
              className={styles.IconImages}
            />
            {/* <CalendarDots size={24} /> */}
            <span>Schedule</span>
          </li>
          <li>
            <Image src={User} alt="chat icon" className={styles.IconImages} />
            {/* <UsersThree size={24} /> */}
            <span>Community</span>
          </li>
          <li>
            <Image
              src={MenuSquare}
              alt="chat icon"
              className={styles.IconImages}
            />
            {/* <List size={24} /> */}
            <span>More</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FooterMenu;
