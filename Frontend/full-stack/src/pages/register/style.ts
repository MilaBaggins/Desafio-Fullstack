import styled from "styled-components";

export const StyledRegister = styled.main`
  width: 940px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 37.5rem) {
    width: 100%;
    flex-direction: column;
    height: 100%;
    gap: 30px;
    padding-top: 30px;

    section {
      div {
        display: none;
      }
    }
  }
`;
