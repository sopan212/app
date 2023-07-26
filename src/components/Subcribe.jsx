

export default function Subcribe() {
  return (
    <section id="section" className="bg-ligthColor mt-12 ">
       <div className="flex flex-col items-center justify-center space-y-6 px-4 py-4 w-96 m-auto rounded-lg shadow-lg md:flex-row md:justify-start md:space-y-0 md:space-x-4 md:w-[750px] md:h-[250px]">
       {/* image */}
       <div className="max-w-sm border border-border shadow-sm">
           <img src="../../public/assets/icons/logo.png" alt="w-72 h-72 md:w-40 md:h-40 "/>
       </div>
       {/* Text */}
       <div className="flex flex-col  justify-start md:space-y-3 ">
        <div className="space-y-1">
        <h3 className="text-2xl text-primary max-w-xl ">Bergbung Dengan Komunitas</h3>
        <p className="max-w-xl font-mono text-gray">Dapatkan info dan penawaran menarik</p>
        </div>
        {/* button */}
        <div className="flex font-mono">
           <input type="text" name="" id="" placeholder="Email anda" className="w-64 px-5 py-3 bg-lightColor rounded-l-lg shadow-md"/>
          <button className="px-4 py-3 bg-primary shadow-md rounded-r-lg font-mono font-semibold">Subcribe</button>
          
        </div>
       </div>
       {/* icon */}
       {/* <div className="flex items-center justify-center space-x-2 md:mt-28">
          <img src="../../public/assets/icons/instagram.svg" alt="" className="w-8 h-8"/>
          <img src="../../public/assets/icons/facebook.svg" alt="" className="w-8 h-8"/>
          <img src="../../public/assets/icons/linkedin.svg" alt="" className="w-8 h-8"/>
          <img src="../../public/assets/icons/youtube.svg" alt="" className="w-8 h-8"/>
          <img src="../../public/assets/icons/twiter.svg" alt="" className="w-8 h-8"/>
       </div> */}
       </div>
      </section>
  )
}
