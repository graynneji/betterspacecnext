import AboutHero from "../../_components/AboutHero";
import Features from "../../_components/Features";
import Mission from "../../_components/Mission";
import Team from "../../_components/Team";
export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      > */}
      <div>
        <AboutHero />
        <Mission />
        <Features />
        <Team />
      </div>
      {/* </motion.div> */}
    </>
  );
}
