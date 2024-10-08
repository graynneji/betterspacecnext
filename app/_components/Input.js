/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
// import ErrorMessage from "./ErrorMessage";
import styles from "./Input.module.css"; // Import the CSS module

function Input({
  type,
  label,
  id,
  placeholder,
  // register,
  // error,
  inputType,
  // disabled,
  selectedQuesAnswers,
  onChange,
}) {
  return (
    <>
      {inputType === "join" && (
        <>
          <input
            id={id}
            type={type}
            name={id}
            // disabled={disabled}
            placeholder={placeholder}
            className={styles.joinHeroInput}
            autoComplete="off"
            autofill="off"
            // {...register(id)}
          />
          {/* {error && error.message && (
            <span className={styles.ErrorMessage}>{error.message}</span>
          )} */}
        </>
      )}
      <div className={styles.inputLabel}>
        {inputType === "text" && (
          <>
            <label htmlFor={id} className={styles.label}>
              {label}
            </label>
            <input
              id={id}
              type={type}
              // disabled={disabled}
              placeholder={placeholder}
              className={styles.styledInput}
              name={id}
              autocomplete="off"
              autoComplete="off"
              autofill="off"
              // {...register(id)}
            />
            {/* {error && error.message && (
              <span className={styles.ErrorMessage}>{error.message}</span>
            )} */}
          </>
        )}
        {inputType === "textarea" && (
          <>
            <label htmlFor={id} className={styles.label}>
              {label}
            </label>
            <textarea
              id={id}
              type={type}
              name={id}
              // disabled={disabled}
              rows="6"
              placeholder={placeholder}
              className={styles.styledInputArea}
              autocomplete="off"
              autoComplete="off"
              autofill="off"
              // {...register(id)}
            />
            {/* {error && error.message && (
              <span className={styles.ErrorMessage}>{error.message}</span>
            )} */}
          </>
        )}
      </div>

      {/* ///////////////////////////////vreateInoput///////////////////// */}
      {inputType === "create" && (
        <div className={styles.inputContainer}>
          <input
            id={id}
            type={type}
            name={id}
            placeholder=" " // Empty placeholder for float label functionality
            className={styles.createInput}
            required // Ensure placeholder-shown works for browsers that rely on 'required'
            value={selectedQuesAnswers}
            onChange={onChange}
            autoComplete="off"
            autofill="off"
          />
          <label htmlFor={id} className={styles.createInpLabel}>
            {label}
          </label>
        </div>
      )}
    </>
  );
}

// Input.propTypes = {
//   type: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   placeholder: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

export default Input;
