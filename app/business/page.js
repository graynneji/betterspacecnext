import BusinessHeader from "../_components/BusinessHeader";
import Background from "@/public/business-background.svg";
import BusinessOffer from "../_components/BusinessOffer";

export default function Page() {
  return (
    <>
      <BusinessHeader name="employees" img={Background} />
      <BusinessOffer />
      {/* <BusinessForm /> */}
    </>
  );
}
