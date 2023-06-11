import styled, { css } from "styled-components";

interface iStyledButtonProps {
  size: "default" | "medium";
  color: "primary" | "gray" | "disable";
}

const buttonVariants = {
  default: css`
    width: 100%;
    height: 3.75rem;
    font-size: var(--font-size-4);
  `,

  medium: css`
    height: 2.5rem;
    font-size: var(--font-size-6);
    width: fit-content;
  `,

  primary: css`
    color: var(--color-white);
    background-color: var(--color-primary);
    border: 0.125rem solid var(--color-primary);

    :hover {
      background-color: var(--color-primary-50);
      border: 0.125rem solid var(--color-primary-50);
    }
  `,

  gray: css`
    color: var(--color-primary);
    background-color: var(--color-gray-0);
    border: 0.125rem solid var(--color-gray-20);

    :hover {
      /* color: var(--color-gray-20); */
      /* background-color: var(--color-gray-50); */
      border: 0.125rem solid var(--color-primary);
    }
  `,

  disable: css`
    color: var(--color-gray-50);
    background-color: var(--color-gray-0);
    border: 0.125rem solid var(--color-gray-20);
    pointer-events: none;
    /* :hover {
      color: var(--color-gray-20);
      background-color: var(--color-gray-50);
      border: 0.125rem solid var(--color-gray-50);
    } */
  `,
};

export const StyledButton = styled.button<iStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  background-color: transparent;
  border-radius: var(--border-radius-1);
  border: none;
  font-weight: var(--font-weigth-2);

  :hover {
    cursor: pointer;
  }

  ${({ size }) => buttonVariants[size]}
  ${({ color }) => buttonVariants[color]}
`;
