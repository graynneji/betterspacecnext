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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TankstackProvider from "../_components/TankstackProvider";
export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en" style={{ overflowY: "hidden", height: "100dvh" }}>
      <body style={{ overflowY: "hidden", height: "100dvh" }}>
        <div className={styles.appLayout}>
          <AppNav />

          <TankstackProvider>{children}</TankstackProvider>

          <FooterMenu />
          <Toaster position="top-left" reverseOrder={false} />

          {/* <Cookies /> */}
        </div>
      </body>
    </html>
  );
}
