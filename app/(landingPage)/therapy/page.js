import Background from "@/public/Thera.svg";

import RibbonTop from "@/public/Union.svg";
import Ribbon from "@/public/Elements-geometric-shape-flower-3-nature.svg";
import BusinessHeader from "../../_components/BusinessHeader";
import JoinTherapy from "../../_components/JoinTherapy";
import TherapyApplication from "../../_components/TherapyApplication";

export const metadata = {
  title: "Therapy",
};

function Therapy() {
  return (
    <>
      <BusinessHeader
        name="therapist"
        img={Background}
        img1={RibbonTop}
        img2={Ribbon}
      />
      <JoinTherapy />
      <TherapyApplication />
    </>
  );
}

export default Therapy;
