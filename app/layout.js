import { Provider } from "react-redux";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "@/app/_styles/globalStyles.css";
import styles from "./layout.module.css";
import store from "./store/store";
import Cookies from "./_components/Cookies";

export const metadata = {
  metadataBase: new URL("https://betterspace.ng"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      // 'de-DE': '/de-DE',
    },
  },
  generator: "Next.js",
  applicationName: "Betterspace",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Gray Ukaegbu", url: "https://graynneji.vercel.app" }],
  creator: "Gray Ukaegbu",
  publisher: "Betterspace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    template: "%s | Mental Health and Therapy Platform",
    default: "BetterspaceNG | Mental Health and Therapy Platform",
  },
  description:
    "Betterspace offers a convenient, accessible platform for connecting individuals with licensed therapists for mental health support. Through personalized video calls and chat sessions, users can find professional care from the comfort of their homes. Whether seeking therapy for stress, anxiety, or personal growth, Betterspace ensures a secure, private, and supportive environment tailored to each user&#39;s needs.",
  keywords:
    "mental health, therapy, online therapy, licensed therapists, stress, anxiety, personal growth, video call therapy, chat therapy, Betterspace",

  image: "/RightHero.svg",

  openGraph: {
    title: "BetterspaceNG - Mental Health and Therapy Platform",
    description:
      "Connect with licensed therapists for mental health support through video calls and chat sessions. Betterspace offers a secure and private platform tailored to your needs.",
    url: "https://www.betterspaceng.ng",
    type: "website",
    images: [
      {
        url: "/RightHero.svg",
        width: 1200,
        height: 630,
        alt: "Betterspace mental health platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betterspace - Online Therapy",
    description:
      "Accessible mental health support through video and chat with licensed therapists.",
    image: "/RightHero.svg",
    site: "@betterspace",
  },

  link: [{ rel: "canonical", href: "https://www.betterspace.ng" }],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.StyledAppLayout}>
          <Header />
          <main style={{ marginTop: "80px" }}>{children}</main>
          {/* <main>{children}</main> */}
          <Footer />
          {/* <Cookies /> */}
        </div>
      </body>
    </html>
  );
}
