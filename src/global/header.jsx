import SearchBox from "../components/seacrbox";
import Logo from '../components/logo'
import Contact from '../components/contact'

export default function Header(){
    return(
            <div className="flex items-center justify-between font-mono w-full px-4 sm:px-8 h-20 bg-lightColor shadow-sm">
                <Logo/>
                {/* <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                    <SearchBox placeholder="Search your mind here" />
                </div> */}
                <Contact/>
            </div>
    )
}



//"../global/Header" from "src/pages/Home.jsx"