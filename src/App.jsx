 
//import './App.css'
 import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Home from './Home'
 
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h2>About Page</h2>} />
      <Route path="/contact" element={ <h1> Contact Page</h1>} />
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
