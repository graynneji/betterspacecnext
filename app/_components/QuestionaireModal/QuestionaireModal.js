import styles from "./QuestionaireModal.module.css";
import { X } from "@phosphor-icons/react/dist/ssr";
function QuestionaireModal({
  setQuestionnaireVisible,
  questionnaireVisible,
  patient,
}) {
  return (
    <>
      {/* Questionnaire Modal */}
      {questionnaireVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.questionnaireContent}>
            <div className={styles.questionnaireHeader}>
              <h3 className={styles.modalTitle}>Intake Questionnaire</h3>
              <button
                onClick={() => setQuestionnaireVisible(false)}
                className={styles.closeModalBtn}
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.questionList}>
              {patient.intakeResponses.map((item, index) => (
                <div key={index} className={styles.questionItem}>
                  <h4 className={styles.question}>{item.question}</h4>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              ))}
            </div>

            <div className={styles.questionnaireFooter}>
              <button
                onClick={() => setQuestionnaireVisible(false)}
                className={styles.closeBtn}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuestionaireModal;
