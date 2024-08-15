import Faq from "./_components/Faq";
import Happy from "./_components/Happy";
import Hero from "./_components/Hero";
import Steps from "./_components/Steps";
import Testimonial from "./_components/Testimonial";
import Why from "./_components/Why";

export default function Page() {
  return (
    <>
      <Hero />

      {/* <Why /> */}

      <Happy />

      <Steps />

      <Testimonial />

      <Faq />
    </>
  );
}
