import styled from "styled-components";

export const StyledCard = styled.main`
  height: 220px;
  .card {
    background-color: var(--color-white);
    display: flex;
    height: 220px;
    width: 368px;
    border-radius: 8px;
  }

  .imgProfile {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    width: 100px;
    border-radius: 8px 0px 0px 8px;
    background-color: var(--color-primary);
  }
  img {
    border-radius: 100%;
    height: 75px;
    width: 75px;
  }

  .closeButton {
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 30px;

    button {
      font-weight: bolder;
      color: var(--color-gray-100);
    }
  }
  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    width: 78%;
  }
`;
