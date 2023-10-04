
import Footer from "../global/Footer"
import Header from "../global/Header.jsx"
import Card from "../components/Card"
import { Link } from "react-router-dom"
import Data from "../Data"




export default function Books() {



  // const items = Data.map(item => (
  //   <Card image={item.image}   key={item.judul}/>
  // ))
 

  return (
    <>
    <section className="">
      <Header/>
        {/* <Backdrop/> */}
      
        <div className="w-full bg-lightColor ">
          <div className="px-8 py-2 text-center text-2xl font-semibold">
            Pilih Buku Yang Kamu Suka
          </div>
        
          <div className="relative  flex flex-col justify-center">
                
               {Data.map((item)=>{
          return <>  <Card key={item.id} url={item.url}
              penulis={item.penulis} judul={item.judul} penerbit={item.penerbit}
      
         />
         <Link to={`/books-detail/${item.id}`} className="relative font-mono font-medium text-lg left-[1100px] w-24 bottom-[83px] py-2 px-5 shadow-md  bg-primary rounded-lg text-white hover:shadow-none">Detail</Link>
 <Link to={`/`} className="relative font-mono font-medium mr-12 text-lg left-[1000px] w-24 bottom-[126px] py-2 px-5 shadow-md  bg-primary rounded-lg text-white hover:shadow-none">kembali</Link>
         </> 
         })} 
          </div>

        </div> 
          
      <Footer/>
    </section>
    </>
  )
}
