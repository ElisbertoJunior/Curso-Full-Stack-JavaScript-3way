import Header from "./components/Header";
import Hero from "./components/Hero";
import GlobalStyles, { Container } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Header />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
