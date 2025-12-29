import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

const BaseStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text[100]};
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  #root {
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollHandle};
    border-radius: 4px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.scrollHandleHover};
    }
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.scrollHandle} transparent;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.body};
  }
`;

const GlobalStyle = () => (
  <>
    <Normalize />
    <BaseStyle />
  </>
);

export default GlobalStyle;
