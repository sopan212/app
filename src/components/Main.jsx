import { Link } from "react-router-dom"
import TextBook from "../../public/assets/book/textbooks.png"

export default function Main() {
    return (
        <section className="bg-lightColor py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Koleksi Buku Kami
                    </h2>
                    <p className="font-mono text-gray-600 max-w-2xl mx-auto">
                        Temukan berbagai pilihan buku berkualitas untuk menambah wawasan dan pengetahuan Anda
                    </p>
                </div>

                {/* Featured Card */}
                <div className="max-w-3xl mx-auto">
                    <Link 
                        to="/books" 
                        className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                            
                            {/* Image Side */}
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all"></div>
                                    <img 
                                        src={TextBook} 
                                        alt="Books Collection" 
                                        className="relative w-full max-w-xs transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex flex-col justify-center space-y-6">
                                <div className="space-y-3">
                                    <div className="inline-block">
                                        <span className="font-mono text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            📚 Katalog Lengkap
                                        </span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary">
                                        Jelajahi Koleksi Buku
                                    </h3>
                                    <p className="font-mono text-gray-600 leading-relaxed">
                                        Ratusan judul buku dari berbagai kategori siap menemani perjalanan literasi Anda
                                    </p>
                                </div>

                                <div className="flex items-center space-x-3 text-primary font-mono font-semibold group-hover:translate-x-2 transition-transform">
                                    <span>Lihat Semua Buku</span>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">100+</p>
                                        <p className="font-mono text-xs text-gray-500">Judul Buku</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">50+</p>
                                        <p className="font-mono text-xs text-gray-500">Penulis</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">10+</p>
                                        <p className="font-mono text-xs text-gray-500">Kategori</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>

            </div>
        </section>
    )
}