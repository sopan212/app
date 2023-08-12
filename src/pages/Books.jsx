import {  react } from 'react'
import { Footer } from "../global/Footer"
import Header from "../global/Header.jsx"
import Book1 from "../../public/assets/book/Book1.png"
import Book2 from  "../../public/assets/book/Book2.jpg"
import Book3 from "../../public/assets/book/Book3.jpg"
import Book4 from "../../public/assets/book/Book4.jpg"
import Book5 from "../../public/assets/book/Book5.jpg"

import Book7 from "../../public/assets/book/Book7.png"
import Book8 from "../../public/assets/book/Book8.jpg"
import Card from "../components/Card"

import { Link, useNavigate } from 'react-router-dom'



export default function Books(props) {
  const Data = [
    {
      id:1,
    judul:"Menalar Menggugah Dunia1",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:64,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"978-623-91070-1-7",
    image: Book1
  },
  {
    id:2,
    judul:"Menalar Menggugah Dunia2",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:66,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"978-623-91070-2-4",
    image: Book2,
  },
  {
    id:3,
    judul:"Menalar Menggugah Dunia3",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:64,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"978-623-91070-3-1",
    image: Book3
  },
  {
    id:4,
    judul:"Catatan Seorang Pegawai",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:64,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"978-623-91070-6-2",
    image: Book4
  },
  {
    id:5,
    judul:"Prioritas Pertimbangan ",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:64,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"978-623-91070-9-3",
    image: Book5
  },
  {
    id:6,
    judul:"Pro dan Kontra Apakah Kapitalisme Tetap Hidup di Masa Depan",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:64,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"978-602-73329-2-8",
    image:Book8
  },
  {
    id:7,
    judul:"Mengenal Perilaku Pengguna WhatsApp Grup",
    penulis:"Yahya Agung Kuntadi",
    Penerbit:"Komunitas Gadjah Mada",
    halaman:64,
    ukuran:"21x14,5cm",
    harga:"Rp 50.000",
    isbn:"Dalam proses",
    image: Book7
  },
  ]


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
        
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:overflow-scroll ">
                
               {Data.map((item)=>{
          return <> <Card key={item.id} gambar={item.image}
              penulis={item.penulis} judul={item.judul} penerbit={item.Penerbit}
              halaman={item.halaman} ukuran={item.ukuran} harga={item.harga} isbn={item.isbn}
         />
         <Link to={`/books-detail/${item.id}`}> Detail </Link>
         </> 
         })}
         
          </div>
        
        </div> 
          
      <Footer/>
    </section>
    </>
  )
}
