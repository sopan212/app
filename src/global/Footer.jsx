

export const Footer = () => {
  return (
    <footer className=" w-full h-64 bg-blue-950">
        {/* footer container */}
        <div className="flex flex-col items-center justify-center space-y-8 px-8 py-8  max-w-6xl m-auto md:space-y-0 md:space-x-4 md:flex-row md:items-center md:justify-around">
            <div className="flex max-w-3xl space-x-4 items-center md:py-10 ">
                <img src="../../public/assets/icons/info.svg" alt="" className="w-10 h-10"/>
                <h2 className="text-white text-2xl tracking-widest ">Need Information?</h2>
            </div>
            <div className="flex max-w-3xl items-center space-x-4 md:py-10">
                <img src="../../public/assets/icons/help.svg" alt="" className="w-10 h-10"/>
                <h2 className="text-white text-2xl tracking-widest ">Need Help?</h2>
            </div>
            {/* <span className="border-b-4 border-purple-900 w-96 md:flex-col"></span> */}
        </div>
       
    </footer>
  )
}
