import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: black;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  .newLogo {
    width: 200px;
  }

  .userImg {
    border-radius: 100%;
    height: 45px;
    width: 45px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    object-fit: cover;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;

      > form {
        height: 45px;
        > button {
          padding: 0;
          width: 45px;
          height: 33px;
        }
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 35px;

        > div {
          position: relative;

          > span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 24px;
            position: absolute;
            right: -15px;
            top: -15px;
            background-color: var(--color-primary);
            font-weight: var(--font-weigth-1);
            border-radius: var(--border-radius-1);
            color: var(--color-white);
          }

          > button {
            border: none;
            opacity: 0.5;

            :hover {
              cursor: pointer;
              opacity: 1;
            }
          }
        }

        > button {
          border: none;
          background: none;
          opacity: 100;

          :hover {
            cursor: pointer;
            opacity: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 37.5rem) {
    height: auto;
    .newLogo {
      margin: 0;
    }

    > div {
      margin-top: 1rem;
      width: 100%;
      align-items: center;
      flex-direction: column;

      img {
        padding-left: 12px;
        align-self: flex-start;
        z-index: 1;
      }

      > div {
        display: flex;
        flex-direction: column-reverse;
        /* background-color: red; */
        position: absolute;
        top: 85px;
        right: 0;
        z-index: 0;

        form {
          padding: 0;
        }

        input {
          width: 100%;
        }

        > div {
          display: flex;
          position: absolute;
          right: 20px;
          top: -45px;
        }
      }
    }
  }
`;
