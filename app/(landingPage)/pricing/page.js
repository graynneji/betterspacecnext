import Faq from "../../_components/Faq/Faq.js";
import PricingBlock from "../../_components/PricingBlock/PricingBlock.js";

export const metadata = {
  title: "Pricing",
};

export default function Page() {
  return (
    <>
      <PricingBlock />
      <Faq />
    </>
  );
}
