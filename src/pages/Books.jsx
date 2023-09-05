
import { Footer } from "../global/Footer"
import Header from "../global/Header.jsx"

import Card from "../components/Card"
import Data from "../Data"




export default function Books() {



  // const items = Data.map(item => (
  //   <Card image={item.image}   key={item.judul}/>
  // ))
 

  return (
    <>
    <section className="realtive">
      <Header/>
        {/* <Backdrop/> */}
      
        <div className="relative w-full bg-lightColor ">
          <div className="px-8 py-2 text-center text-2xl font-semibold">
            Pilih Buku Yang Kamu Suka
          </div>
        
          <div className=" flex flex-col justify-center">
                
               {Data.map((item)=>{
          return <>  <Card key={item.id} url={item.url}
              penulis={item.penulis} judul={item.judul} penerbit={item.penerbit}
              halaman={item.halaman} ukuran={item.ukuran} harga={item.harga} isbn={item.isbn} deskripsi={item.deskripsi}
         />
         </> 
         })} 
    
          </div>
        
        </div> 
          
      <Footer/>
    </section>
    </>
  )
}
