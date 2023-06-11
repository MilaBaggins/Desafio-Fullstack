import { createGlobalStyle } from "styled-components";

export const StyledTypography = createGlobalStyle`

    * {
      font-family: var(--font-family-1);
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    :root {
      --font-family-1: "Inter", sans-serif;

      --font-title:2rem;

      --font-size-1: 1.625rem;
      --font-size-2: 1.375rem;
      --font-size-3: 1.125rem;
      --font-size-4: 1rem;
      --font-size-5: .875rem;
      --font-size-6: .75rem;

      --font-weigth-1: 700;
      --font-weigth-2: 600;
      --font-weigth-3: 400;
    }



    .font-title{
      font-size: var(--font-title);
      font-weight: var(--font-weigth-1);
    }

    .font-heading-1 {
      font-size: var(--font-size-1);
      font-weight: var(--font-weigth-1);
  }



    .font-heading-1-green{
      font-size: var(--font-size-1);
      font-weight: var(--font-weigth-1);
      color: var(--color-primary);
  }

  
  .font-heading-2 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weigth-1);
  }
  
  .font-heading-3 {
    font-size: var(--font-size-3);
    font-weight: var(--font-weigth-1);
  }

  .font-heading-4 {
    font-size: var(--font-size-5);
    font-weight: var(--font-weigth-1);
  }
  
  .font-headline {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-3);
  }
  
  .font-body {
    font-size: var(--font-size-5);
    font-weight: var(--font-weigth-3);
  }
  
  .font-body-600 {
    font-size: var(--font-size-5);
    font-weight: var(--font-weigth-2);
    color: var(--color-primary);
  }
  
  .font-body-600-gray {
    font-size: var(--font-size-5);
    font-weight: var(--font-weigth-2);
    color: var(--color-gray-50);
  }
  
  .font-gray {
    color: var(--color-gray-50);
  }
  
  .caption {
    font-size: var(--font-size-6);
    font-weight: var(--font-weigth-3);
    color: var(--color-gray-50);
  }
  `;
