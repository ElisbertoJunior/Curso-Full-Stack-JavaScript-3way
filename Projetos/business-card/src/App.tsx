import { ThemeProvider } from "styled-components";
import Card from "./containers/Card";
import GlobalStyle, { ButtonTheme, Container } from "./styles";
import darkTheme from "./themes/dark";
import lightTheme from "./themes/ligth";
import { useState } from "react";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Card model1 />
        <Card model1={false} />
      </Container>
      <ButtonTheme onClick={() => setUseDarkTheme(!useDarkTheme)}>
        Trocar tema
      </ButtonTheme>
    </ThemeProvider>
  );
};

export default App;
