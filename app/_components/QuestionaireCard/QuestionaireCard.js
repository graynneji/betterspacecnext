"use client";
import { useState } from "react";
// import { usePathname } from "next/navigation";
import styles from "../Questionaire/Questionaire.module.css";
import { GrCircleInformation } from "react-icons/gr";
import Button from "../Button/Button";
import { useNext } from "../../hooks/useNext";
// import { useState } from "react";
import { createPatients } from "../../_lib/actions";
const questions = [
  {
    question_text: "What is your gender identity?",
    info_text:
      "Gender is a significant aspect of your identity. Sharing this information helps your therapist tailor a more customized and supportive approach to your needs.",
    options: ["Man", "Woman"],
  },
  {
    question_text: "What is your relationship status?",
    info_text:
      "Relationship status can affect your well-being. Sharing it helps your therapist provide a more personalized approach.",
    options: [
      "Single",
      "Married",
      "Divorced",
      "Widowed",
      "Other",
      "Prefer not to say",
    ],
  },
  {
    question_text: "How would you rate your current physical health?",
    info_text:
      "This will help your therapist understand your needs better and create a more effective plan.",
    options: ["Good", "Fair", "Poor"],
  },
  {
    question_text: "Are you on any medication?",
    info_text:
      "Medication can play a significant role in mental health treatment. Sharing this information will enable your therapist to provide the most personalized care.",
    options: ["No", "Yes"],
  },
  {
    question_text: "Have you been in therapy before?",
    info_text:
      "Sharing your therapeutic history helps your therapist create a personalized plan. New to therapy? We'll guide you through what to expect after signing up.",
    options: ["No", "Yes"],
  },
  {
    question_text: "Why do you want to work on your mental health?",
    info_text:
      "Understanding your motivations helps us match you with a therapist who aligns with your goals and empowers you to achieve lasting progress.",
    options: [
      "I feel depressed",
      "I have anxious thoughts",
      "I am grieving",
      "I lost the purpose of life",
      "I struggle to have healthy relationships",
      "I am having a tough time",
      "I have low self esteem",
      "I have experienced trauma",
      "I want to improve all areas of my life",
      "Just exploring",
      "Other",
    ],
  },
  {
    question_text: "What kind of resources are you interested in exploring?",
    info_text: "Helps us recommend relevant tools and support.",
    options: [
      "Articles",
      "Journals",
      "Support group",
      "Educational videos/courses",
      "Goals & Habit tracking",
      "Mindfulness excercise",
    ],
  },
  {
    question_text: "Are there any specific therapist qualities you prefer?",
    info_text:
      "We want to ensure you have a compatible and effective therapeutic relationship.",
    options: [
      "Male therapist",
      "Female therapist",
      "Christain therapist",
      "Muslim therapist",
      "Non-religious therapist",
    ],
  },
  {
    question_text: "What kind of communication style resonates with you?",
    info_text: "The therapist who communicates in a way that suits you.",
    options: [
      "Direct and straightforward",
      "Warm and empathetic",
      "Humorous and ligthearted",
      "Gentle and patient",
    ],
  },
  {
    question_text: "What is your preferred language?",
    info_text:
      "We want to ensure there is a clear communication and understanding.",
    options: [
      "English",
      "Vanacular",
      "Igbo",
      "Yoruba",
      "Hausa",
      "Efik",
      "Birom",
      "Calaba",
    ],
  },
  {
    question_text: "Is there anything else you'd like your therapist to know?",
    info_text:
      "We want to get some information from you to provide the therapist valuable context for a personalized approach.",
    options: ["Man", "Woman"],
  },
  {
    question_text: "How did you get to know about betterspace?",
    info_text: "Helps us improve outreach and support.",
    options: [
      "Google search",
      "Facebook",
      "Youtube",
      "X (formerly twitter)",
      "Instagram",
      "Other",
    ],
  },
];

export default function QuestionaireCard({ data }) {
  const [currentSection, setCurrentSection] = useState(0); // Track current section
  const totalSections = 8;

  const handleNextSection = (e) => {
    e.preventDefault();
    if (currentSection < totalSections - 0.5) {
      setCurrentSection(currentSection + 0.5);
    }
    console.log("next", currentSection);
  };
  const handlePreviousSection = (e) => {
    e.preventDefault();
    if (currentSection === 0) return;

    setCurrentSection(currentSection - 0.5);
  };
  console.log(data);

  return (
    <>
      <div className={styles.progressBar}>
        {Array.from({ length: totalSections }, (_, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "5px",
              backgroundColor:
                currentSection >= index && currentSection < index + 1
                  ? "#022c22d7"
                  : "#ccc",
              marginRight: index < totalSections - 1 ? "5px" : "0",
              //   backgroundColor: index === currentSection ? "#022c22d7" : "#ccc",
              //   marginRight: index < totalSections - 1 ? "5px" : "0",
              // border: '1px dashed #000'
            }}
            className={styles.bars}
          />
        ))}
      </div>

      <div className={styles.questionTop}>
        <h1 className={styles.questionHOne}>
          Lets match you with the Right Therapist
        </h1>
        {/* <h1 className={styles.questionHOne}>
    Connect with the Right Therapist for You
    </h1> */}
        <p className={styles.questionSpan}>
          A strong therapeutic relationship begins with the right match. Let us
          guide you to a licensed therapist who understands your needs and
          preferences through these simple questions.
        </p>
      </div>

      {/* <h3 className={styles.questionHThree}>Which best describes you?</h3> */}
      <div className={styles.formContainer}>
        <form action={createPatients} className={styles.form}>
          {/* ///////// FIRST ///////////////////////////////////////////////////////////////////////////////////////////// */}
          {/* {currentSection === 0 && (
            <>
              <h3 className={styles.questionHThree}>
                {data[0].question_text}
              </h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="I need a Therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I am a Therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )} */}
          {/* //////// SECOND FORM ////////////////////////////////////////////////////////////////////////////////////////// */}

          {currentSection === 0 && (
            <>
              <h3 className={styles.questionHThree}>
                {data[11].question_text}
              </h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Man"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Woman"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* //////// THIRD //////////////////////////////////////////////////////////////////////////////////// */}
          {currentSection === 0.5 && (
            <>
              <h3 className={styles.questionHThree}>{data[0].question_text}</h3>
              {/* <span className={styles.questionSpan}>Please select</span> */}
              <label for="marriage-select"></label>

              <div className={styles.buttonCon}>
                {/* <Button
                  defaultValue="Single"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Married"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Divorced"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Widowed"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Other"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Prefer not to say"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                /> */}
                <p>
                  hIIIiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                </p>
                {/* <select id="marriage-select">
                  <option value="">--Please choose an option--</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select> */}
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}

          {/* /////// FOURTH //////////////////////////////////////////////////////////////////////////// */}
          {currentSection === 1 && (
            <>
              <h3 className={styles.questionHThree}>{data[1].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Good"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Fair"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Poor"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* /////// FIFTH //////////////////////////////////////////////////////////////////////////////// */}
          {currentSection === 1.5 && (
            <>
              <h3 className={styles.questionHThree}>{data[2].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Yes"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="No"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* /////// SIXTH //////////////////////////////////////////////////////////////////////////////// */}
          {currentSection === 2 && (
            <>
              <h3 className={styles.questionHThree}>{data[3].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Yes"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="No"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}

          {/* ////// SEVENTH //////////////////////////////////////////////////////////// */}
          {currentSection === 2.5 && (
            <>
              <h3 className={styles.questionHThree}>{data[4].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="I feel depressed"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I have anxious thoughts"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I am grieving"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I lost the purpose of life"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I struggle to have healthy relationships"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I am having a tough time"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I have low self esteem"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I have experienced trauma"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I want to improve all areas of my life"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Just exploring"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Other"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* ////// EIGHTH //////////////////////////////////////////////////////////// */}
          {currentSection === 3 && (
            <>
              <h3 className={styles.questionHThree}>{data[5].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Articles"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Journals"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Support group"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Educational videos/courses"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Goals & Habit tracking"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Mindfulness excercise"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I have low self esteem"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I have experienced trauma"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="I want to improve all areas of my life"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Just exploring"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* ////// NINTH //////////////////////////////////////////////////////////// */}
          {currentSection === 3.5 && (
            <>
              <h3 className={styles.questionHThree}>{data[6].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Male therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Female therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Christain therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Muslim therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Non-religious therapist"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* ////// TENTH //////////////////////////////////////////////////////////// */}
          {currentSection === 4 && (
            <>
              <h3 className={styles.questionHThree}>{data[7].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Direct and straightforward"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Warm and empathetic"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Humorous and ligthearted"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Gentle and patient"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* ////// ELEVENTH //////////////////////////////////////////////////////////// */}
          {currentSection === 4.5 && (
            <>
              <h3 className={styles.questionHThree}>{data[8].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="***Change to dropdown menu"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* ////// TWELVTH //////////////////////////////////////////////////////////// */}
          {currentSection === 5 && (
            <>
              <h3 className={styles.questionHThree}>{data[9].question_text}</h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="***Change to textarea"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
          {/* ////// THIRTEENTH //////////////////////////////////////////////////////////// */}
          {currentSection === 5.5 && (
            <>
              <h3 className={styles.questionHThree}>
                {data[10].question_text}
              </h3>
              <span className={styles.questionSpan}>Please select</span>
              <div className={styles.buttonCon}>
                <Button
                  defaultValue="Google search"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Facebook"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Youtube"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="X (formerly twitter)"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Instagram"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button
                  defaultValue="Other"
                  handleSection={handleNextSection}
                  type="TransparentButton"
                />
                <Button type="submit">Submit</Button>
              </div>
              <div className={styles.infoBar}>
                <GrCircleInformation /> <p>Please select your needs</p>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}
