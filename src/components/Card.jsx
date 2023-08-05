
export default function Card(props) {

  return (
<div className="max-w-3xl mx-auto "> 
            <div className="  py-4 px-4 bg-white rounded-lg shadow-lg md:max-w-md">
              <img src={props.image} alt="" className="p-6 mx-auto rounded-lg drop-shadow-lg object-cover h-[499px]" />
              <div className="p-2 border border-border box-shadow-lg max-h-[300px]">

              <h4 className="font-mono text-lg font-gray-400 ">Penulis: <span className="font-semibold">{props.penulis}</span></h4>
              <h4 className="font-mono text-lg font-gray-400 ">Judul: <span className="font-semibold">{props.judul}</span></h4>
              <h4 className="font-mono text-lg font-gray-400 ">Penerbit: <span className="font-semibold">{props.penerbit}</span></h4>
              <h4 className="font-mono text-lg font-gray-400 ">Halaman: <span className="font-semibold">{props.halaman}</span> </h4>
              <h4 className="font-mono text-lg font-gray-400 ">Ukuran: <span className="font-semibold">{props.ukuran}</span> </h4>
              <h4 className="font-mono text-lg font-gray-400 ">Harga: <span className="font-semibold">{props.harga}</span> </h4>
              <h4 className="font-mono text-lg font-gray-400 ">ISBN: <span className="font-semibold">{props.isbn}</span> </h4>
              </div>
          </div>
          </div>
  )
}
