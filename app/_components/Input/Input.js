/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
// import ErrorMessage from "./ErrorMessage";
import styles from "./Input.module.css"; // Import the CSS module
import {
  ListMagnifyingGlass,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

function Input({
  onHandleChange,
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
  chat = null,
  option,
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
          />
        </>
      )}
      <div className={chat === "chat" ? styles.inputLabel : styles.inputLabel1}>
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
              autoComplete="off"
              autofill="off"
              // {...register(id)}
            />
          </>
        )}

        {inputType === "selectTherapy" && (
          <>
            <label htmlFor={id} className={styles.label}>
              {label}
            </label>
            <select
              className={styles.styledInput}
              style={{ backgroundColor: "white" }}
              name={id}
              id={id}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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
              rows={chat ? "2" : "6"}
              placeholder={placeholder}
              className={`${styles.styledInputArea} ${
                chat == "chat" ? styles.chatTextarea : ""
              }`}
              // autocomplete="off"
              autoComplete="off"
              autofill="off"
              // {...register(id)}
            />
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
            placeholder=" "
            className={styles.createInput}
            required
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

      {/* /////////////////////Select ////////////////////////////////////// */}
      {inputType === "select" && <option value={option}>{option}</option>}

      {/* ////////////////////////////search ////////////////////////////////////// */}
      {inputType == "search" && (
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>
            {/* 🔍 */}
            <MagnifyingGlass size={20} />
          </span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={placeholder || "Search..."}
          />
        </div>
      )}

      {inputType == "addnote" && (
        <textarea
          // value={newNote}
          // onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.noteTextarea}
          name={id}
          id={id}
          onChange={onHandleChange}
        />
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
