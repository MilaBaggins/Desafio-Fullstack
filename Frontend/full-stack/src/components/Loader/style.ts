import styled from "styled-components";
export const StyledLoader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid var(--color-gray-100);
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    :after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      width: 78px;
      height: 78px;
      border-radius: 50%;
      border-bottom: 4px solid var(--color-primary);
      border-left: 4px solid transparent;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
