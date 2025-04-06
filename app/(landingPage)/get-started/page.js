import Faq from "../../_components/Faq/Faq";
import Questionaire from "../../_components/Questionaire/Questionaire";
import QuestionCard from "../../_components/QuestionCard/QuestionCard";
import Testimonial from "../../_components/Testimonial/Testimonial";

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
