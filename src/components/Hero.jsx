export default function Hero(){
    return(
        <>
        <div className="relative  z-0 px-8 py-8 bg-secondary ">
            <div className=" container flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center md:items-center bg-orange-400">
                {/* content */}
                <div className="flex flex-col  md:items-left md:justify-center md:max-w-6xl bg-red-300">
                    <p className="font-mono uppercase text-green-700  ">Yahya Agung Kuntadi</p>
                    <h1 className="font-sans text-4xl leading-relaxed text-primary text-bold ">Menalar Mengubah Dunia - 1</h1>
                    <p className="font-mono text-green-800 text-lg leading-relaxed ">Sebuah buku karangan bapak yahya agung kuntadi untuk menalar merubah  masa depan dengan pendekatan yang sistematis</p>
                </div>

                {/* image */}
                <div className="max-w-6xl  bg-cyan-500 text-center">
                    <img src="../assets/book/Book3.jpg" alt=""  className="w-[450px] h-[550px] md:w-[450px] md:h-[550]  rounded-lg drop-shadow-lg "/>
                </div>

            </div>
        </div>
        </>
    )
}