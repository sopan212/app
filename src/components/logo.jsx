import Logoo from "../../public/assets/icons/logo.png"
export default function Logo(){
    return(
        <div id="home" className="max-w-lg">
            <img src={Logoo} alt="" className="w-56 h-20 object-cover hover:object-scale-down duration-400"/>
        </div>
    )
}