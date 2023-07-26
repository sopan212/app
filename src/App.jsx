
import Hero from "./components/Hero";
import Header from "./global/header";
import Main from "./components/Main";
import Content from "./components/content";
import Subcribe from "./components/Subcribe";
import { Footer } from "./global/Footer";
// import { EmblaCarousel } from "./components/Carosel";

export default function App() {
  
   
  return (
    <>
    <body>
      <Header/>
      {/* <EmblaCarousel/> */}
      <Hero/>
      <Main/>
      <Content/>
      <Subcribe/>
      <Footer/>
    </body>

    </>
  )
}
