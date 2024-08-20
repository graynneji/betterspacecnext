import { Provider } from "react-redux";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "@/app/_styles/globalStyles.css";
import styles from "./layout.module.css";
import store from "./store/store";
import Cookies from "./_components/Cookies";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.StyledAppLayout}>
          <Header />
          <main style={{ marginTop: "80px" }}>{children}</main>
          <Footer />
          {/* <Cookies /> */}
        </div>
      </body>
    </html>
  );
}
