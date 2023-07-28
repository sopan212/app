import { Footer } from "../global/Footer"
import Header from "../global/Header.jsx"
export default function Books() {
  return (
    <>
    <section>
      <Header/>
        <div className="relative w-full bg-lightColor ">
          <div className="px-8 py-2 text-center text-2xl font-semibold">
            Pilih Buku Yang Kamu Suka
          </div>
          <div className="grid grid-cols-2 gap-3 px-8 py-10 max-w-xl md:mx-auto md:max-w-6xl md:grid-cols-4">
            <div className=" group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book1.png" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className=" group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book2.jpg" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className="group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book3.jpg" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className="group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book4.jpg" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className="group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book5.jpg" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className="group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book6.jpg" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className="group relative px-5 py-3 rounded-ld shadow-lg max-w-lg">
              <img src="../../public/assets/book/Book1.png" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
            <div className="group relative px-5 py-3 rounded-ld shadow-md max-w-lg">
              <img src="../../public/assets/book/Book1.png" alt=""  className="object-cover w-36 mx-auto rounded-lg"/>
              <div className="absolute bottom-0 left-0 right-0 bg-black h-14 space-y-1 text-center hidden group-hover:block group-hover:bg-opacity-30  duration-400">
                <p className="font-mono text-xs text-white">Menalar mengubah dunia-1</p>
                <p className="font-mono text-xs text-white">Yahya Agung Kuntadi</p>
                <p className="font-mono text-xs text-white">Rp 50.000</p>
              </div>
            </div>
          </div> 
        </div>
      <Footer/>
    </section>
    </>
  )
}
