import { Footer } from "../global/Footer"
import Header from "../global/Header.jsx"
// import Book1 from "../../public/assets/book/Book1.png"
// import Book2 from  "../../public/assets/book/Book2.jpg"
// import Book3 from "../../public/assets/book/Book3.jpg"
// import Book4 from "../../public/assets/book/Book4.jpg"
// import Book5 from "../../public/assets/book/Book5.jpg"

// import Book7 from "../../public/assets/book/Book7.png"
// import Book8 from "../../public/assets/book/Book8.jpg"
export default function Card(props) {
  // const Data = [
  //   {
  //     id:1,
  //   judul:"Menalar Menggugah Dunia1",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:64,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"978-623-91070-1-7",
  //   image: Book1
  // },
  // {
  //   id:2,
  //   judul:"Menalar Menggugah Dunia2",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:66,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"978-623-91070-2-4",
  //   image: Book2,
  // },
  // {
  //   id:3,
  //   judul:"Menalar Menggugah Dunia3",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:64,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"978-623-91070-3-1",
  //   image: Book3
  // },
  // {
  //   id:4,
  //   judul:"Catatan Seorang Pegawai",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:64,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"978-623-91070-6-2",
  //   image: Book4
  // },
  // {
  //   id:5,
  //   judul:"Prioritas Pertimbangan ",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:64,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"978-623-91070-9-3",
  //   image: Book5
  // },
  // {
  //   id:6,
  //   judul:"Pro dan Kontra Apakah Kapitalisme Tetap Hidup di Masa Depan",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:64,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"978-602-73329-2-8",
  //   image:Book8
  // },
  // {
  //   id:7,
  //   judul:"Mengenal Perilaku Pengguna WhatsApp Grup",
  //   penulis:"Yahya Agung Kuntadi",
  //   Penerbit:"Komunitas Gadjah Mada",
  //   halaman:64,
  //   ukuran:"21x14,5cm",
  //   harga:"Rp 50.000",
  //   isbn:"Dalam proses",
  //   image: Book7
  // },
  // ]


  return (
    
    <div className="px-8 max-w-3xl mx-auto mb-4"> 
        
          <div className="  py-4 px-4 bg-white rounded-lg shadow-lg  md:max-w-md">
                      <img src={props.image}alt="" className="p-6 mx-auto rounded-lg drop-shadow-lg object-cover h-[499px]" />
                       <div className="p-2 border border-border box-shadow-lg ">
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
