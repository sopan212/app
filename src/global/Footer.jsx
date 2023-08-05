import Info from "../../public/assets/icons/info.svg"
import Help from "../../public/assets/icons/help.svg"

export const Footer = () => {
  return (
    <footer className=" w-full h-73 bg-blue-950">
        {/* footer container */}
        <div>
        <div className="flex flex-col  items-center justify-center space-y-8 px-8 py-8  max-w-6xl m-auto md:space-y-0 md:space-x-4 md:flex-row md:items-center md:justify-around">
            <div className="flex flex-col max-w-3xl space-x-4 items-center space-y-3 md:py-10 ">
                <img src={Info} alt="" className="w-10 h-10"/>
                <h2 className="text-white text-2xl tracking-widest ">Need Information?</h2>
                <p className="font-mono max-w-sm text-white text-center text-xl ">ESTUBIZI Business Center, Setiabudi 2, Jl. H. R. Rasuna Said, Jakarta 12920 
</p>
            </div>
            <div className="flex flex-col  max-w-3xl items-center space-y-4 space-x-4 md:py-10">
                <img src={Help} alt="" className="w-10 h-10"/>
                <h2 className="text-white text-2xl tracking-widest ">Need Help?</h2>
                <p className="font-mono max-w-sm text-white text-center text-xl ">Phone : +622152905299  
                Email: komunitasgadjahmada@gmail.com
</p>
            </div>
            {/* <span className="border-b-4 border-purple-900 w-96 md:flex-col"></span> */}
        </div>

        </div>
       
    </footer>
  )
}
