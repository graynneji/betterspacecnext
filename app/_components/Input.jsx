/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";

const Label = styled.label`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.1px;
  font-weight: 500;
  color: #022c22;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 0.6rem;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  gap: 0.8rem;
  border: 1px solid #e7e7e7;
  /* color: #ffffff; */
  /* box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.84); */
  &::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(136, 136, 136, 1);
  }
`;

const StyledInputArea = styled.textarea`
  width: 100%;
  border-radius: 0.6rem;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  gap: 1rem;
  border: 1px solid #e7e7e7;
  /* &::placeholder {
    font-size: 1.4rem;
    font-style: italic;
    color: #4444448a;
  } */
  &::placeholder {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(136, 136, 136, 1);
  }
`;

const InputLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
`;

const JoinHeroInput = styled.input`
  border: none;
  flex: 1;

  &:focus {
    outline: none;
    outline-offset: none;
  }
`;

function Input({
  type,
  label,
  id,
  placeholder,
  register,
  error,
  inputType,
  disabled,
}) {
  // const Input = React.forwardRef(({ type, label, name, placeholder }, ref) => {

  // const inputId = label.toLowerCase();
  return (
    <>
      {inputType === "join" && (
        <>
          <JoinHeroInput
            id={id}
            type={type}
            disabled={disabled}
            // name={name}
            placeholder={placeholder}
            {...register(id)}
          />
          {error && error.message && (
            <ErrorMessage>{error.message}</ErrorMessage>
          )}
        </>
      )}
      <InputLabel>
        {inputType === "text" && (
          <>
            <Label htmlFor={id}>{label}</Label>
            <StyledInput
              id={id}
              type={type}
              disabled={disabled}
              // name={name}
              placeholder={placeholder}
              {...register(id)}
            />
            {error && error.message && (
              <ErrorMessage>{error.message}</ErrorMessage>
            )}
          </>
        )}
        {inputType === "textarea" && (
          <>
            <Label htmlFor={id}>{label}</Label>
            <StyledInputArea
              id={id}
              type={type}
              disabled={disabled}
              // name={name}
              rows="6"
              placeholder={placeholder}
              {...register(id)}
            />
            {error && error.message && (
              <ErrorMessage>{error.message}</ErrorMessage>
            )}
          </>
        )}
      </InputLabel>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  // name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Input;
