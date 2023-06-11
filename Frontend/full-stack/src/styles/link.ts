import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iLinkStyledProps {
  typetext?: "yes" | "button";
}

export const StyledLink = styled(Link)<iLinkStyledProps>`
  ${({ typetext }) => {
    switch (typetext) {
      case "yes":
        return css`
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            color: var(--grey-50);
            transition: 0.3s;
          }
        `;
      case "button":
        return css`
          font-size: 0.875rem;
          font-weight: 500;
          /* border-radius: 0.5rem; */
          border: none;
          transition: 0.3s;
          padding: 0.625rem 1.375rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0px, 20px;
          background-color: var(--color-primary);
          color: var(--color-white);
          &:hover {
            background-color: var(--color-primary-50);
            transition: 0.3s;
          }
        `;
      default:
        return css`
          font-size: 1rem;
          font-weight: 500;
          border-radius: 0.5rem;
          border: none;
          transition: 0.3s;
          color: var(--grey-50);
          background-color: var(--grey-0);
          padding: 0.625rem 1.375rem;
          font-weight: 600;
          font-size: 0.875rem;
          &:hover {
            color: var(--white);
            background-color: var(--grey-50);
            transition: 0.3s;
          }
        `;
    }
  }}

  cursor: pointer;
`;
