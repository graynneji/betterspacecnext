import DownloadApp from "./_components/DownloadApp";
import Faq from "./_components/Faq";
import Happy from "./_components/Happy";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Steps from "./_components/Steps";
import Testimonial from "./_components/Testimonial";
import Why from "./_components/Why";

export default function Page() {
  return (
    <>
      <Hero />

      {/* <Why /> */}

      <Happy />

      <HowItWorks />

      {/* <Steps /> */}

      <Testimonial />

      <Faq />

      <DownloadApp />
    </>
  );
}
