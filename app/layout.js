import { Provider } from "react-redux";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "@/app/_styles/globalStyles.css";
import styles from "./layout.module.css";
import store from "./store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div className={styles.StyledAppLayout}> */}
        <Header />
        <main>{children}</main>
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
