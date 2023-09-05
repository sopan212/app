import { Link } from "react-router-dom"

export default function Card(props) {
 
  return (
    
    <div className="px-8  mx-auto mb-4"> 
        
          <div className=" relative flex flex-row  py-4 px-4 bg-white rounded-lg shadow-lg  md:max-w-7xl">
                      <img src={props.url} alt="" className="p-6 mx-auto mb-4 rounded-lg drop-shadow-lg object-cover h-[499px]" />
                       <div className="flex flex-col space-y-2 p-2 item-start box-shadow-lg drop-shadow-sm ">
                      
                      <h3 className="font-mono "><span className="font-bold justify-center">Judul:</span> {props.judul}</h3>
                      <h3 className="font-mono "><span className="font-bold justify-center">Penulis:</span> {props.penulis}</h3>
                      <h3 className="font-mono "><span className="font-bold justify-center">Penerbit:</span> {props.penerbit}</h3>
                      <h3 className="font-mono "><span className="font-bold justify-center">Jumlah Halaman:</span> {props.halaman}</h3>
                      <h3 className="font-mono "><span className="font-bold justify-center">Harga:</span> {props.harga}</h3>
                      <h3 className="font-mono "><span className="font-bold justify-center">ISBN:</span> {props.isbn}</h3>
                      <h3 className="font-mono "><span className="font-bold justify-center">Deskripsi:</span> {props.deskripsi}</h3>
                      </div> 
                     
                   <Link to="https://tokopedia.link/VYYWISMVKCb" className="absolute left-32  bottom-2  font-mono px-4 py-2 text-xl text-white border-green-600 shadow-lg rounded-lg bg-primary hover:shadow-none  ">Beli Disini</Link>  
                  </div>
          
</div>
  )
}
