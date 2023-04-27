import Header from "./components/Header"
import { GlobalStyle } from "./global"
import Main from "./components/Main"
import Footer from "./components/Footer"


const App = () => {
  

  return (
    <div className="container">
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
