import { Provider } from "react-redux";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import "@/app/_styles/globalStyles.css";
import store from "../store/store";

import { Toaster } from "react-hot-toast";
import PageTransition from "../_components/pageTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <PageTransition>
            {children}
            {/* <main style={{ marginTop: "80px" }}>{children}</main> */}
          </PageTransition>

          <Toaster position="top-left" reverseOrder={false} />

          {/* <Cookies /> */}
        </div>
      </body>
    </html>
  );
}
