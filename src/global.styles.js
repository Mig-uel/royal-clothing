import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    padding: 20px 40px;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }
`
