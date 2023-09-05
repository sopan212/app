import Hero from "../components/Hero";
import Main from "../components/Main";
import Subcribe from "../components/Subcribe";

import Content from "../components/content";
import { Footer } from "../global/Footer";
import Header from "../global/Header";



export default function Home() {
  return (
<div>
<Header/>
<Hero/>
<Main/>
<Content/>
<Subcribe/>
<Footer/>

    </div>
  )
}
