// export default function Page() {
//   return <h1>Contact</h1>;
// }

import { useForm } from "react-hook-form";
import Input from "../../ui/Input";

import LinkedinCon from "/img/LinkedinCon.svg";
import InstagramCon from "/img/InstagramCon.svg";
import TwitterCon from "/img/TwittterCon.svg";
import FacebookCon from "/img/FacebookCon.svg";
import Button from "../../ui/Button";
import { ButtonContainer } from "../../ui/FormStyles/ButtonContainer";
import { PrivacyText } from "../../ui/FormStyles/PrivacyText";
import { ContactContainer } from "../ui/FormStyles/ContactContainer";
import { LeftSide } from "../../ui/FormStyles/LeftSide";
import { TopText } from "../../ui/FormStyles/TopText";
import { ContactBoldText } from "../../ui/FormStyles/ContactBoldText";
import { ContactLightText } from "../../ui/FormStyles/ContactLightText";
import { SocialContactCon } from "../../ui/FormStyles/SocialContactCon";
import { ContactForm } from "../../ui/FormStyles/ContactForm";
import { MergeInput } from "../../ui/FormStyles/MergeInput";
import { useYupValidationResolver } from "../../services/Resolver";
import { contactFormSchema } from "../../services/validationSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendInquiry } from "../../services/apiContact";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const resolver = useYupValidationResolver(contactFormSchema);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver });
  // } = useForm({ defaultValues });

  const queryClient = useQueryClient();

  const { isPending: isSubmitting, mutate: sendMessage } = useMutation({
    mutationFn: sendInquiry,
    onSuccess: () => {
      toast.success("Your inquiry was sent successfully");
      queryClient.invalidateQueries({ queryKey: ["contact"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (inquiry) => {
    sendMessage(inquiry);

    reset();
  };

  return (
    <ContactContainer>
      <LeftSide>
        <TopText>
          <ContactBoldText>Contact Us</ContactBoldText>
          <ContactLightText>
            Get in touch with our team and we would get back to you as soon as
            possible.
          </ContactLightText>
        </TopText>
        <SocialContactCon>
          <img src={LinkedinCon} alt="Contact us through LinkedIn " />
          <img src={InstagramCon} alt="Contact us through Instagram" />
          <img src={TwitterCon} alt="Contact us through Twitter" />
          <img src={FacebookCon} alt="Contact us through Facebook" />
        </SocialContactCon>
      </LeftSide>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactForm>
          <MergeInput>
            <Input
              type="text"
              inputType="text"
              label="Name"
              id="name"
              placeholder="John Doe"
              disabled={isSubmitting}
              register={register}
              error={errors.name}
            />

            <Input
              type="text"
              label="Company"
              inputType="text"
              id="company"
              placeholder="ABC Company (optional)"
              disabled={isSubmitting}
              register={register}
              error={errors.company}
            />
          </MergeInput>
          <MergeInput>
            <Input
              type="tel"
              inputType="text"
              label="Phone Number"
              id="phone"
              placeholder="(123) 456-7890"
              disabled={isSubmitting}
              register={register}
              error={errors.phone}
            />

            <Input
              type="email"
              inputType="text"
              label="Email Address"
              id="email"
              placeholder="example@example.com"
              disabled={isSubmitting}
              register={register}
              error={errors.email}
            />
          </MergeInput>

          <Input
            type="textarea"
            inputType="textarea"
            label="Your Enquiry"
            id="message"
            placeholder="Type a message..."
            disabled={isSubmitting}
            register={register}
            error={errors.message}
          />

          <ButtonContainer>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <PrivacyText>
              By continuing you agree with betterspace{" "}
              <Link
                to="/privacy"
                style={{ color: "#022c22", textDecoration: "underline" }}
              >
                Privacy Policy
              </Link>
            </PrivacyText>
          </ButtonContainer>
        </ContactForm>
      </form>
    </ContactContainer>
  );
};
export default Contact;
