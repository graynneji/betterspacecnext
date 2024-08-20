import Image from "next/image";
import Button from "./Button";
import Phone from "@/public/Frame 2147223104.png";
import styles from "./DownloadApp.module.css";
import check from "@/public/checkList.svg";
import Appstore from "@/public/ic_outline-apple.svg";
import Playstore from "@/public/logos_google-play-icon.svg";
import ScanMe from "@/public/scanMe.svg";
export default function DownloadApp() {
  return (
    <section className={styles.downloadAppCon}>
      <div className={styles.DownloadCon}>
        <div className={styles.downloadLeft}>
          <h1 className={styles.downloadHOne}>Ready to get started?</h1>
          <ul className={styles.downloadList}>
            <li className={styles.list}>
              <Image src={check} alt="checkList" />
              <span>Access to qualified therapist</span>
            </li>
            <li className={styles.list}>
              <Image src={check} alt="checkList" />
              <span>Easy access to resources</span>
            </li>
            <li className={styles.list}>
              <Image src={check} alt="checkList" />
              <span>Join a supportive team</span>
            </li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button type="download">
              <Image src={Playstore} alt="app store play store images" />
              <span>Download on Google play store</span>
            </Button>

            <Button type="download">
              <Image src={Appstore} alt="app store play store images" />
              <span>Download on App store</span>
            </Button>
            <Image
              src={ScanMe}
              alt="scan me image"
              style={{ width: "20%", height: "auto" }}
            />
          </div>
        </div>
        <div>
          <Image
            src={Phone}
            alt="download phone"
            className={styles.scanMe}
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
