import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    color: inherit;
  }

  body {
    background-color: #777777;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"></link>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
