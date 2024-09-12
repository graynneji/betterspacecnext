import Faq from "../_components/Faq.js";
import PricingBlock from "../_components/PricingBlock.js";

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
