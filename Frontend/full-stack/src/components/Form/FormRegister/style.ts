import styled from "styled-components";
export const StyledFormRegister = styled.form`
  display: flex;
  gap: 20px;
  box-shadow: 0px 6px 90px -32px rgba(3, 3, 23, 80);
  padding: 60px;
  background: linear-gradient(180deg, #2a2f2f 0%, #ffcd07 100%);
  width: 100%;
  > div {
    > div {
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 26px 24px;
      width: 400px;
      height: 450px;
      border: 2px solid var(--color-gray-20);
      box-shadow: 0px 0px 10px -20px rgba(0, 0, 10, 15);
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

      > p {
        text-align: center;
        align-self: center;
        max-width: 327px;
        width: 100%;

        color: var(--color-gray-50);
      }
    }
  }
  @media only screen and (max-width: 37.5rem) {
    width: 100%;
    padding: 26px 15px;
  }
`;
