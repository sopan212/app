import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
// import { EmblaCarousel } from "./components/Carosel";
import Home from  "./pages/Home.jsx"
import Books from "./pages/Buku.jsx"
export default function App() {
  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books" element={<Books/>}/>
    </Routes>
  </Router>

    </>
  )
}
