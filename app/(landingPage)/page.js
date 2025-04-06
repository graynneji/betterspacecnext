import DownloadApp from "../_components/DownloadApp/DownloadApp";
import Faq from "../_components/Faq/Faq";
import Happy from "../_components/Happy/Happy";
import Hero from "../_components/Hero/Hero";
import HowItWorks from "../_components/HowItWorks/HowItWorks";
import JoinWaitlistPatner from "../_components/JoinWaitlistPartner/JoinWaitlistPatner";
import Steps from "../_components/Steps/Steps";
import Testimonial from "../_components/Testimonial/Testimonial";
import Why from "../_components/Why/Why";

export default function Page() {
  return (
    <>
      <Hero />

      <Happy />

      <HowItWorks />

      <Testimonial />

      <Faq />

      <DownloadApp />
      {/* <JoinWaitlistPatner /> */}
    </>
  );
}
