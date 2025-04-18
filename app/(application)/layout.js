import { Provider } from "react-redux";
import Footer from "../_components/Footer/Footer";
import Header from "../_components/Header/Header";
import "@/app/_styles/globalStyles.css";
import store from "../store/store";
import styles from "./layout.module.css";
import { Toaster } from "react-hot-toast";
import PageTransition from "../_components/PageTransition/pageTransition";
import FooterMenu from "../_components/FooterMenu/FooterMenu";
import AppNav from "../_components/AppNav/AppNav";
import UserProvider from "../_provider/UserProvider";
// import SideBar from "../_components/SideBar/SideBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <div className={styles.appLayout}>
            {/* <SideBar /> */}

            <main
              style={{
                flexGrow: 1,
              }}
            >
              {/* <AppNav /> */}
              {children}
            </main>

            {/* <FooterMenu /> */}
            <Toaster position="top-left" reverseOrder={false} />

            {/* <Cookies /> */}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
