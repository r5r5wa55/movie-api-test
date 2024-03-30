import About from "./Pages/About"
import Content from "./Pages/Content"
import Home from "./Pages/Home"
import Header from "./components/Header"
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  

  return (
    <>  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
