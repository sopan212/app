import SearchBox from "../components/seacrbox";
import Logo from '../components/logo'
import Contact from '../components/contact'

export default function Header(){
    return(
            <div className="flex items-center justify-around  font-mono w-full z-40 space-x-12 px-8 h-20 bg-lightColor shadow-sm  ">

            <Logo/>
            <SearchBox/>
            <Contact/>
            </div>
    )
}