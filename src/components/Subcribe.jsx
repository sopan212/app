import Logo from "../../public/assets/icons/logo.png"

export default function Subcribe() {
  return (
    <section id="section" className="bg-lightColor py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 items-center">
            
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                <img src={Logo} alt="KGM Press Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain"/>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Bergabung Dengan Komunitas
                </h3>
                <p className="font-mono text-white/90 text-lg">
                  Dapatkan info terbaru, penawaran menarik, dan rekomendasi buku pilihan langsung ke email Anda
                </p>
              </div>

              {/* Subscribe Form */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  className="flex-1 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg font-mono text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                />
                <button className="px-8 py-4 bg-white text-primary font-mono font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center space-x-2 text-white/90">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-mono text-sm">Gratis</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-mono text-sm">Tanpa Spam</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-mono text-sm">Bisa Unsubscribe Kapan Saja</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
