import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root { font-size: 16px; }

  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { height: 100%; }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img { max-width: 100%; display: block; }

  button { font-family: inherit; }

  a { color: inherit; text-decoration: none; }

  /* Mobile-first layout helpers */
  .container {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;

export default GlobalStyle;