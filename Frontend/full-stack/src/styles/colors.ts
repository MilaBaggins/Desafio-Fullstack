import { createGlobalStyle } from "styled-components";

export const StyledColors = createGlobalStyle`
    :root {
        --color-primary: #ffcd07;
        --color-primary-50: #f3f63996;
        --color-secondary: #eb5757;

        --color-gray-100: #1f1f1f;
        --color-gray-50: #8c8c8c;
        --color-gray-30: #aaaaaa;
        --color-gray-20: #e0e0e0;
        --color-gray-0: #f5f5f5;
        --color-white: #ffffff;

        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-success: #168821;
        --color-information: #155bcb;
    }
     /* BOX-SHADOW */
     --box-shadow-1: 0px 6px 40px -6px rgba(0, 0, 0, 0.849);
    --box-shadow-2: 0px 6px 10px -20px rgba(0, 0, 0, 0.849);
    --box-shadow-3: 6px 6px 8px -6px #ffc33996;
`;
