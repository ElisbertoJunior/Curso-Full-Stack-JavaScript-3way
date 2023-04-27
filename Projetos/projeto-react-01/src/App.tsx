import Header from "./components/Header"
import { GlobalStyle } from "./global"
import Main from "./components/Main"


const App = () => {
  

  return (
    <div className="container">
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
