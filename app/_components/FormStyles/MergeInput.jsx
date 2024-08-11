import styled from "styled-components";

export const MergeInput = styled.div`
  display: flex;
  gap: 2.4rem;
  width: 100%;
  /* justify-content: space-between; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
