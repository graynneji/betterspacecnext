import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  background-color: #f8f4f0;
  gap: 4.8rem;
  padding: 64px 200px 64px 200px;
  width: 100vw;
  /* Conditional styling for isJoinPage */
  ${({ $isJoinPage }) =>
    $isJoinPage &&
    css`
      /* Add your conditional styles here */
      justify-content: space-between;
    `}
  @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
    justify-content: center;
    flex-direction: column;
  }
`;
