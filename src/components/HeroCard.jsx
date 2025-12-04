import { Link } from "react-router-dom"

export default function HeroCard(props) {
  return (
    <div className="relative bg-gradient-to-br from-secondary via-lightColor to-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-block">
              <span className="font-mono text-sm uppercase tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full">
                ✨ Buku Pilihan
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-wide text-gray-600">
                {props.penulis}
              </p>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {props.judul}
              </h1>
              <p className="font-sans text-lg text-gray-700 leading-relaxed line-clamp-3">
                {props.deskripsi}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-1">
                <p className="font-mono text-xs text-gray-500 uppercase">Penerbit</p>
                <p className="font-sans text-sm font-semibold text-gray-800">{props.penerbit}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-xs text-gray-500 uppercase">Halaman</p>
                <p className="font-sans text-sm font-semibold text-gray-800">{props.halaman}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="space-y-1">
                <p className="font-mono text-xs text-gray-500 uppercase">Harga</p>
                <p className="font-sans text-3xl font-bold text-primary">{props.harga}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link 
                to="/books"
                className="group px-8 py-4 bg-primary text-white font-mono font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center">
                  Lihat Semua Buku
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-300"></div>
              <img 
                src={props.url} 
                alt={props.judul}
                className="relative object-cover rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-md h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
