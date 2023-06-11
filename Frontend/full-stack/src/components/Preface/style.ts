import styled from "styled-components";

export const StyledPreface = styled.section`
  max-width: 377px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  align-items: flex-start;

  img {
    height: 270px;
  }

  div {
    width: 100%;
    border: 1px solid var(--color-gray-20);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius-2);
    display: flex;
    gap: 19px;
    align-items: center;
    padding: 17px 14px;
    color: var(--color-gray-50);

    p {
      text-align: left;
    }

    strong {
      color: var(--color-gray-100);
    }
  }
  @media only screen and (max-width: 37.5rem) {
    img:last-child {
      display: none;
    }
  }
`;
