import React from "react";
import styles from "./Earnings.module.css";
import Link from "next/link";
import { CaretRight, Wallet } from "@phosphor-icons/react/dist/ssr";
import { getTherpistInfo } from "@/app/_lib/data-services";

async function Earnings() {
  const therapistInfo = await getTherpistInfo();
  console.log(therapistInfo);
  return (
    <>
      <h3 className={styles.chatHeader}>Earnings</h3>
      <Link href="/dashboard/wallet">
        <div
          className={`${styles.walletShortcut} ${
            pathname == "/dashboard/wallet" ? styles.activeWallet : ""
          }`}
        >
          <div className={styles.walletIcon}>
            <Wallet size={20} weight="bold" />
          </div>
          <div className={styles.walletInfo}>
            <span className={styles.walletLabel}>Your Wallet</span>
            <span className={styles.walletBalance}>$1,450.00</span>
          </div>
          <CaretRight size={16} className={styles.walletArrow} />
        </div>
      </Link>
    </>
  );
}

export default Earnings;
