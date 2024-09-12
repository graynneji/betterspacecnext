import Faq from "../_components/Faq";
import Questionaire from "../_components/Questionaire";
import Testimonial from "../_components/Testimonial";

export const metadata = {
  title: "Get-started",
};

export default function Page() {
  return (
    <>
      <Questionaire />
      <Testimonial />
      <Faq />
    </>
  );
}
