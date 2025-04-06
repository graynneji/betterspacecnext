import styled from "styled-components";
import Input from "../Input/Input";
import { sendBusinessInquiry } from "../services/apiBusiness";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useYupValidationResolver } from "../services/Resolver";
import { BusinessFormSchema } from "../../services/validationSchema";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { MergeInput } from "./FormStyles/MergeInput";

const Features = styled.section`
  display: flex;
  gap: 48px;
  padding: 64px 200px 100px 200px;
  @media screen and (max-width: 1270px) {
    padding: 20px 60px 20px 60px;
  }
  @media screen and (max-width: 998px) {
    padding: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(248, 244, 240, 1);
  gap: 24px;
  flex-direction: column;
  padding: 64px;
  width: 100%;
  border-radius: 16px;
  @media screen and (max-width: 998px) {
    padding: 32px 24px;
  }
`;

const FormContainer = styled(Container)`
  border-radius: 12px;
  padding: 0px 24px;
  gap: 12px;
  width: 70%;
  @media screen and (max-width: 1270px) {
    width: 100%;
    padding: 20px 60px 20px 60px;
  }
  @media screen and (max-width: 998px) {
    padding: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  div {
    width: 100%;
  }
  @media screen and (max-width: 598px) {
    flex-direction: column;
  }
`;

const Text = styled(Content)`
  gap: 8px;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.01em;
  text-align: center;
  color: rgba(2, 44, 34, 1);
`;

const SupportingText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(2, 44, 34, 1);
`;

const BusinessForms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`;
const StyledCheckBox = styled.input`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.4rem;
  border: 0.15rem solid rgba(136, 136, 136, 1);
`;
const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
  /* position: relative; */
  /* padding-left: 30px; */
  margin-bottom: 15px;
  text-wrap: nowrap;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  /* text-align: left; */
  color: rgba(2, 44, 34, 1);
  a {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.004em;
    /* text-align: left; */
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    /* display: block; */
    text-wrap: wrap;
  }
`;

const AgreedSpan = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.004em;
`;
const TermPriLink = styled(Link)`
  font-weight: 500 !important;
  font-size: 1.2rem !important;
  line-height: 1.6rem !important;
`;

function BusinessForm() {
  const [isChecked, setIsChecked] = useState(false);
  const resolver = useYupValidationResolver(BusinessFormSchema);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver });
  // } = useForm({ defaultValues });

  const queryClient = useQueryClient();

  const { isPending: isSubmitting, mutate: sendMessage } = useMutation({
    mutationFn: sendBusinessInquiry,
    onSuccess: () => {
      toast.success("Your inquiry was sent successfully");
      queryClient.invalidateQueries({ queryKey: ["business"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (inquiry) => {
    sendMessage(inquiry);

    reset();
  };
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Features>
        <Container>
          <Content>
            <Text>
              <Heading>Want to learn more?</Heading>
              <SupportingText>
                Fill out this form and our team will be in touch as soon as
                possible.
              </SupportingText>
            </Text>
          </Content>
          <FormContainer>
            <BusinessForms onSubmit={handleSubmit(onSubmit)}>
              <MergeInput>
                <Input
                  type="text"
                  inputType="text"
                  id="name"
                  placeholder="Name"
                  disabled={isSubmitting}
                  register={register}
                  error={errors.name}
                />
                <Input
                  type="email"
                  inputType="text"
                  id="email"
                  placeholder="Email"
                  disabled={isSubmitting}
                  register={register}
                  error={errors.name}
                />
              </MergeInput>
              <MergeInput>
                <Input
                  type="text"
                  inputType="text"
                  id="companyName"
                  placeholder="Company name"
                  disabled={isSubmitting}
                  register={register}
                  error={errors.name}
                />
                <Input
                  type="text"
                  inputType="text"
                  id="jobTitle"
                  placeholder="Job title"
                  disabled={isSubmitting}
                  register={register}
                  error={errors.name}
                />
              </MergeInput>
              <Input
                type="textarea"
                inputType="textarea"
                id="message"
                placeholder="Type a message..."
                disabled={isSubmitting}
                register={register}
                error={errors.name}
              />
              <RadioContainer htmlFor="terms">
                <StyledCheckBox
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChecked}
                  id="terms"

                  // placeholder="Type a message..."
                  // disabled={isSubmitting}
                  // register={register}
                  // error={errors.name}
                />
                <AgreedSpan>
                  I agree to betterspace&#39;s&nbsp;{" "}
                  <TermPriLink to="/terms">Terms & condition</TermPriLink>
                  &nbsp; and acknowledge the&nbsp;{" "}
                  <TermPriLink to="/privacy">privacy policy</TermPriLink>
                  &nbsp;
                </AgreedSpan>
              </RadioContainer>

              <Button disabled={!isChecked} type="submit">
                {isSubmitting ? "Loading..." : "Submit"}
              </Button>
              {/* 
        //////////// */}
            </BusinessForms>
          </FormContainer>
        </Container>
      </Features>
    </>
  );
}

export default BusinessForm;
