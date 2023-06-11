import styled from "styled-components";
export const StyledLogin = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 37.5rem) {
    padding-top: 30px;
    width: 100%;
    flex-direction: column-reverse;
    height: 100%;
    gap: 14px;
  }
  .login {
    display: flex;
    gap: 80px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 60px;
    border-radius: 2px;
    box-shadow: 0px 6px 10px -20px rgba(3, 3, 23, 80);
    background: linear-gradient(180deg, #2a2f2f 0%, #ffcd07 100%);
  }
`;
