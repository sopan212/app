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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Books() {
  const Data = [
    {
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

  const items = Data.map(item => (
    <Card image={item.image}  judul={item.judul}  penulis={item.penulis} 
    penerbit={item.penerbit} halaman={item.halaman}   ukuran={item.ukuran}   harga={item.harga}  
   isbn={item.isbn} key={item.judul}/>
  ))

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 765 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <section>
      <Header/>
        <div className="relative w-full bg-lightColor ">
          <div className="px-8 py-2 text-center text-2xl font-semibold">
            Pilih Buku Yang Kamu Suka
          </div>
          <Carousel responsive={responsive}>
            {items}
          </Carousel>;
        
        
          </div> 
          
      <Footer/>
    </section>
    </>
  )
}
