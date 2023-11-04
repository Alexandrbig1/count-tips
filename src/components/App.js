import { ThemeProvider } from "styled-components";
import { Container } from "./Layout";
import TipCalculator from "./TipCalculator/TipCalculator";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";

const theme = {
  light: {
    colors: {
      white: "#fff",
    },
  },
  dark: {
    colors: {
      white: "#fff",
    },
  },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  // };
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Container>
        <TipCalculator />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
