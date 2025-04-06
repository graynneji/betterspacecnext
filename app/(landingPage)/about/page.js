import AboutHero from "../../_components/AboutHero/AboutHero";
import Features from "../../_components/Features/Features";
import Mission from "../../_components/Mission/Mission";
import Team from "../../_components/Team/Team";
export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <div>
        <AboutHero />
        <Mission />
        <Features />
        <Team />
      </div>
    </>
  );
}
