import styled from "styled-components";

export const ContactForm = styled.div`
  background-color: white;
  padding: 3.2rem;
  border-radius: 1.6rem;
  gap: 2.4rem;
  display: flex;
  flex-direction: column;

  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  /* width: 100vw; */
  @media screen and (max-width: 600px) {
    width: 100%;
    /* display: flex;
    flex-direction: column;
    padding: 40px 16px 40px 16px; */
  }
`;
