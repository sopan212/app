import { Link } from "react-router-dom"

export default function Card(props) {
 
  return (
    
    <div className="px-8  mx-auto mb-4"> 
        
          <div className=" relative flex flex-row  py-4 px-4 bg-white rounded-lg shadow-lg  md:max-w-7xl">
                      <img src={props.url} alt="" className="p-6 mx-auto mb-4 rounded-lg drop-shadow-lg object-cover h-[499px]" />
                       <div className="flex flex-col space-y-2 p-2 item-start box-shadow-lg drop-shadow-sm ">
                      
                      <h3 className="font-mono max-w-sm"><span className="font-bold justify-center">Judul:</span> {props.judul}</h3>
                      <h3 className="font-mono max-w-sm "><span className="font-bold justify-center">Penulis:</span> {props.penulis}</h3>
                      <h3 className="font-mono max-w-sm"><span className="font-bold justify-center">Penerbit:</span> {props.penerbit}</h3>
      
                    
                 
                      </div> 
                     
                  </div>
          
</div>
  )
}
