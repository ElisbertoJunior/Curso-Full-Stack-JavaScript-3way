import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GlobalStyles, { Container, CardContainer } from "./styles/global";
import data from "./data";


const App = () => {
  
  const dataElement = data.map((element) => {
   
    return (
      <Card
        cardImg={element.coverImg}
        subtitle={element.stats.rating}
        text={element.title}
        textF={element.location} 
        openSpots={element.openSpots} 
        location={element.location}        
      /> 
    );
  });

  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Header />
        <Hero />
        <CardContainer>{dataElement}</CardContainer>
      </Container>
    </div>
  );
};

export default App;
