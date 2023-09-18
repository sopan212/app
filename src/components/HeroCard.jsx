import { Link } from "react-router-dom"

export default function HeroCard(props) {
  return (
    <div>
         <div className="px-8 py-8 bg-secondary mb-12">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center ">
                {/* content */}



                <div className="flex flex-col  md:items-left  ">
                    <p className="font-mono uppercase text-green-700  ">{props.penulis}</p>
                    <h1 className="font-sans text-4xl max-w-xl leading-relaxed text-primary text-bold ">{props.judul}</h1>
                    <p className="font-sans max-h-20 max-w-xl overflow-hidden text-green-800 text-lg leading-relaxed ">{props.deskripsi}</p>
                    <p className="font-sans max-w-xl font-semibold text-green-800 text-lg leading-relaxed ">{props.penerbit}</p>
                    <p className="font-sans max-w-xl font-semibold text-green-800 text-lg leading-relaxed ">{props.halaman}</p>
                    <p className="font-sans max-w-xl font-semibold text-green-800 text-lg leading-relaxed ">{props.ukuran}</p>
                    <p className="font-sans max-w-xl font-semibold text-green-800 text-lg leading-relaxed ">{props.isbn}</p>
                    <p className="font-sans max-w-xl font-semibold text-green-800 text-lg leading-relaxed ">{props.harga}</p>

                <Link className="px-5 py-3 w-20 border  bg-primary rounded-md font-mono text-white text-center" to={`/books`}>detail</Link>
                
                </div>
             
                <div>
                    <img src={props.url} alt="" className='object-cover px-4 rounded-2xl text-center drop-shadow-lg w-[450px] h-[550px] md:w-[450px] md:h-[550px]'/>
                </div>

            </div>
        </div>
    </div>
  )
}
