import AboutHero from "../_components/AboutHero";
import Features from "../_components/Features";
import Mission from "../_components/Mission";
import Team from "../_components/Team";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Features />
      <Team />
    </>
  );
}
