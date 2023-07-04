import styled from "styled-components";
export const StyledHome = styled.main`
  max-width: 86rem;
  height: 400vh;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: start;
  justify-content: start;

  .content {
    margin-top: 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
  }

  .cards {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: black;
    min-height: 580px;
    max-width: 65%;
    padding: 20px;
    gap: 30px;
  }

  .addContac {
    width: 30%;
    height: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .img {
      display: flex;
      justify-content: flex-end;
      background-color: orange;
      height: 260px;
      margin-top: 60px;
      img {
        width: 260px;
      }
    }
  }
  .registerContatc {
    background-color: var(--color-gray-20);
    border-radius: 4px;
    padding: 10px;
    color: var(--color-gray-100);
    button {
    }
  }
  > div {
    width: 80vw;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2.878rem;
    margin-top: 40px;
    p {
      font-size: 20px;
      color: black;
    }
  }

  @media only screen and (max-width: 37.5rem) {
    margin: 0;
    margin-top: 150px;
  }
`;
