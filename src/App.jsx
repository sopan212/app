import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
// import { EmblaCarousel } from "./components/Carosel";
import Home from  "./pages/Home.jsx"
import Books from "./pages/Books.jsx"
import BooksDetail from "./pages/BooksDetail.jsx"
export default function App() {
  return (
    <>
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="books" element={<Books/>}/>
    <Route path="books-detail/:id" element={<BooksDetail/>}/>
    </Routes>
  </Router>

    </>
  )
}
