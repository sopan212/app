export default function Content() {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Koleksi Lengkap",
            description: "Ratusan judul buku dari berbagai kategori dan penerbit terpercaya"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Kualitas Terjamin",
            description: "Semua buku original dengan kualitas cetak dan kertas terbaik"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Pengiriman Cepat",
            description: "Proses pengiriman cepat dan aman ke seluruh Indonesia"
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Harga Terjangkau",
            description: "Harga kompetitif dengan berbagai promo menarik setiap bulan"
        }
    ]

    return (
        <section id="Content" className="bg-gradient-to-b from-secondary to-lightColor py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Kenapa Memilih Kami?
                    </h2>
                    <p className="font-mono text-gray-600 max-w-2xl mx-auto">
                        Kami berkomitmen memberikan pengalaman terbaik dalam memenuhi kebutuhan literasi Anda
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center space-y-4 hover:-translate-y-2"
                        >
                            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-sans font-bold text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="font-mono text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="w-12 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}