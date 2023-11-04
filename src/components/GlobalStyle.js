import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle` 
@font-face {
    font-family: 'Lato';
    src: url('../fonts/Lato-Bold.ttf') format('ttf'),
         url('../fonts/Lato-Regular.ttf') format('ttf');
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.white};
  }

  p {
    margin: 0;
    padding: 0;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  `;
