import { Provider } from "react-redux";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import "@/app/_styles/globalStyles.css";
import store from "../store/store";
import styles from "./layout.module.css";
import { Toaster } from "react-hot-toast";
import PageTransition from "../_components/pageTransition";
import FooterMenu from "../_components/FooterMenu";
import AppNav from "../_components/AppNav";
import UserProvider from "../_components/UserProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <div className={styles.appLayout}>
            <AppNav />

            <main
              style={{
                flexGrow: 1,
                overflowY: "auto",
                paddingTop: "60px",
                paddingBottom: "60px",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              {children}
            </main>

            <FooterMenu />
            <Toaster position="top-left" reverseOrder={false} />

            {/* <Cookies /> */}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
