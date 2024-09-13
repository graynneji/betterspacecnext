import Faq from "../_components/Faq";
import Questionaire from "../_components/Questionaire";
import QuestionCard from "../_components/QuestionCard";
import Testimonial from "../_components/Testimonial";

export const metadata = {
  title: "Get-started",
};

export default function Page() {
  return (
    <>
      <Questionaire />
      {/* <QuestionCard /> */}
      <Testimonial />
      <Faq />
    </>
  );
}
