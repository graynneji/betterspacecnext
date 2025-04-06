import BusinessHeader from "../../_components/BusinessHeader/BusinessHeader";
import Background from "@/public/business-background.svg";
import BusinessOffer from "../../_components/BusinessOffer/BusinessOffer";

export const metadata = {
  title: "Business",
};

export default function Page() {
  return (
    <>
      <BusinessHeader name="employees" img={Background} />
      <BusinessOffer />
      {/* <BusinessForm /> */}
    </>
  );
}
