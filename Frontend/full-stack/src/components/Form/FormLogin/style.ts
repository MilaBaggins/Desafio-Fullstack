import styled from "styled-components";
export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 26px 24px;

  width: 500px;
  border: 2px solid var(--color-gray-20);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-2);
  background-color: var(--color-white);

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      color: var(--color-gray-50);
      text-decoration: underline;
      :hover {
        cursor: pointer;
      }
    }
  }
  fieldset {
    svg {
      height: auto;
    }
  }
  > p {
    text-align: center;
    align-self: center;
    max-width: 327px;
    width: 100%;

    color: var(--color-gray-50);
  }

  @media only screen and (max-width: 37.5rem) {
    width: 100%;
    padding: 26px 15px;
  }
`;
