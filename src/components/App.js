import { ThemeProvider } from "styled-components";
import { Container } from "./Layout";
import TipCalculator from "./TipCalculator/TipCalculator";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";
import Switcher from "./Switcher/Switcher";

const theme = {
  light: {
    colors: {
      white: "#fff",
      bgColor: "#dee2e6",
      container: "#F9F9F9",
      textColor: "#050505",
      inputColor: "#dee2e6",
    },
  },
  dark: {
    colors: {
      white: "#fff",
      bgColor: "#272829",
      container: "#080202",
      textColor: "#F9F9F9",
      inputColor: "#272829",
    },
  },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <Switcher onChange={toggleTheme} />
      <Container>
        <TipCalculator />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
