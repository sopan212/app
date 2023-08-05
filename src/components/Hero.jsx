// import Carosel from "./Carosel"
import Book1 from '../../public/assets/book/Book1.png'
export default function Hero(){
    
    return(
        <>
        <div className="px-8 py-8 bg-secondary mb-12">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center ">
                {/* content */}

{/* <Carosel>
    {slides.map((slide)=>{
        <div className="flex flex-col  md:items-left md:justify-center ">
             <p className="font-mono uppercase text-green-700  ">{slide.penerbit}</p>
             <h1 className="font-sans text-4xl max-w-xl leading-relaxed text-primary text-bold ">{slide.judulBuku}</h1>
             <p className="font-mono max-w-xl text-green-800 text-lg leading-relaxed ">{slide.sinopsis}</p>
        </div>
    })} */}


                <div className="flex flex-col  md:items-left md:justify-center ">
                    <p className="font-mono uppercase text-green-700  ">Yahya Agung Kuntadi</p>
                    <h1 className="font-sans text-4xl max-w-xl leading-relaxed text-primary text-bold ">Menalar Mengubah Dunia - 1</h1>
                    <p className="font-mono max-w-xl text-green-800 text-lg leading-relaxed ">Sebuah buku karangan bapak yahya agung kuntadi untuk menalar merubah  masa depan dengan pendekatan yang sistematis</p>
                    <p className="font-mono max-w-xl font-semibold text-green-800 text-lg leading-relaxed ">RP 50.000</p>
                
                </div>

                
                    {/* {slides.map((slide)=>{
                <div className="text-center ">
                    <img src={slide.image} alt=""  className="px-4 w-[450px] h-[550px] md:w-[450px] md:h-[550] rounded-2xl text-center drop-shadow-lg "/>
                </div>
                    })}
                </Carosel> */}
                {/* <div style={{backgroundImage:`{Boook1}`,
                backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="px-4 w-[450px] h-[550px] md:w-[450px] md:h-[550] rounded-2xl text-center drop-shadow-lg ">
                </div> */}
                <div>
                    <img src={Book1} alt="" className='object-cover px-4 rounded-2xl text-center drop-shadow-lg w-[450px] h-[550px] md:w-[450px] md:h-[550px]'/>
                </div>

            </div>
        </div>
        </>
    )
}
