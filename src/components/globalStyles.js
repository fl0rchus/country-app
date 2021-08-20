import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    font-family: "Nunito Sans", sans-serif;
    max-height: 100%;
    font-size: 16px;
  }
  `;
export default GlobalStyles;
