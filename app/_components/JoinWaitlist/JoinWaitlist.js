"use client";
// import { MergeInput } from "../ui/FormStyles/MergeInput";
import { useFormState, useFormStatus } from "react-dom";
import styles from "../Contact/Contact.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { submitForm } from "../../_lib/actions";
import { useTransition } from "react";
const initialState = {
  message: null,
};
function Join() {
  const { pending } = useFormStatus();
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(submitForm, initialState);
  //   const response = await fetch(`http://www.geoplugin.net/json.gp`);

  //   const location = await response.json();
  //   const handleSubmit = submitForm.bind(null, location);
  console.log(isPending);
  return (
    // <section $isJoinPage="isJoin">
    <>
      <section className={`${styles.JoinWaitlist}`}>
        <div className={styles.LeftSide}>
          <div className={styles.TopText}>
            <h2 className={styles.ContactBoldText}>Join Waitlist</h2>
            <h5 className={styles.ContactLightText}>
              Be the first to take the first step towards better mental health.
            </h5>
          </div>
        </div>

        <form action={formAction}>
          <div className={styles.ContactForm}>
            <Input
              type="text"
              inputType="text"
              label="Name"
              id="name"
              placeholder="John Doe"
              //   disabled={isSubmitting}
              //   register={register}
              //   error={errors.name}
            />
            <Input
              type="email"
              inputType="text"
              label="Email Address"
              id="email"
              placeholder="example@example.com"
              //   disabled={isSubmitting}
              //   register={register}
              //   error={errors.email}
            />

            <div className={styles.ButtonContainer}>
              <Button disabled={isPending} type="submit">
                {isPending ? "Loading..." : "Submit"}
                {/* Submit */}
              </Button>
              <span className={styles.PrivacyText}>
                By continuing you agree with betterspace Privacy Policy
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default Join;
