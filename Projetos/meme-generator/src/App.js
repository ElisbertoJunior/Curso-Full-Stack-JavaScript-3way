import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
};

export default App;
