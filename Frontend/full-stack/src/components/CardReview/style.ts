import styled from "styled-components";

export const CardReviewStyled = styled.div`
  height: 350px;
  width: 350px;
  background-color: red;
  box-shadow: 20px 0px 14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
  div {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
  }
`;
