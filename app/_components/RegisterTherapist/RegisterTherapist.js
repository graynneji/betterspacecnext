"use client";
import styles from "../Questionaire/Questionaire.module.css";
import styles1 from "../Login/Login.module.css";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { signup } from "../../_lib/actions";

function RegisterTherapist() {
  const role = "therapist";
  const register = signup.bind(null, role);
  const [error, setError] = useState("");
  console.log(error);
  return (
    <div className={styles.questionaireCon}>
      <div className={styles1.loginCon}>
        <form
          action={async (formData) => {
            setError(null);
            // const { error, status } = await createAccount(formData);
            const error = await register(formData);
            console.log(formData);
            if (error) {
              setError(error);
              // setError(error?.error?.message);
            }
          }}
        >
          <div className={styles.createFormSection}>
            <span style={{ fontSize: "20px" }}>Therapist Registration</span>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <h4 style={registerStyle}>Personal Information</h4>
            <div style={{ width: "100%" }}>
              <Input
                type="text"
                inputType="text"
                label="Full name"
                id="name"
                name="name"
                placeholder="Full name"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Input
                type="email"
                inputType="text"
                label="Email Address"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Input
                type="password"
                inputType="text"
                label="Password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Input
                type="phone"
                inputType="text"
                label="Phone number"
                id="phone"
                name="phone"
                placeholder="Phone number"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <div style={{ width: "30%", alignSelf: "start" }}>
              <Input
                type="select"
                inputType="selectTherapy"
                label="Gender"
                id="gender"
                name="gender"
              />
            </div>
            <div style={{ width: "100%" }}>
              <Input
                type="date"
                inputType="text"
                label="Date of Birth"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <h4 style={registerStyle}>Professional Details</h4>
            {/* <hr
              style={{
                border: "1px solid #cccccc56",
                width: "100%",
                marginBottom: "10px",
                // marginTop: "10px",
              }}
            /> */}
            <div style={{ width: "100%" }}>
              <Input
                type="text"
                inputType="text"
                label="License Number"
                id="license"
                name="license"
                placeholder="License Number"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Input
                type="text"
                inputType="text"
                label="License Issuing Authority"
                id="authority"
                name="authority"
                placeholder="License Issuing Authority"
                onChange={() => {
                  setError(null);
                }}
              />
            </div>
            <div style={{ width: "100%", marginBottom: "30px" }}>
              <Input
                type="phone"
                inputType="text"
                label="Specialization"
                id="specialization"
                name="specialization"
                placeholder="e.g., CBT, Psychotherapy, Couples Therapy, etc."
                onChange={() => {
                  setError(null);
                }}
              />
            </div>

            {/* <div style={{ width: "100%" }}>
              <Input
                type="file"
                inputType="text"
                label="Upload File"
                id="u"
                name="specialization"
                placeholder="e.g., CBT, Psychotherapy, Couples Therapy, etc."
                onChange={() => {
                  setError(null);
                }}
              />
            </div> */}

            <Button btntype="login">Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

const registerStyle = {
  fontSize: "18px",
  fontWeight: "500",
  alignSelf: "start",
  color: "#325343",
  marginTop: "40px",
};

export default RegisterTherapist;
