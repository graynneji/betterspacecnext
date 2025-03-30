import { Provider } from "react-redux";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import "@/app/_styles/globalStyles.css";
import store from "../store/store";
import styles from "./layout.module.css";
import { Toaster } from "react-hot-toast";
import PageTransition from "../_components/pageTransition";
import FooterMenu from "../_components/FooterMenu";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.appLayout}>
          <Header />

          {/* <PageTransition>
              {children} */}
          <main style={{ marginTop: "60px", flex: 1, overflow: "scroll" }}>
            {children}
          </main>
          {/* </PageTransition> */}

          <FooterMenu />
          <Toaster position="top-left" reverseOrder={false} />

          {/* <Cookies /> */}
        </div>
      </body>
    </html>
  );
}
