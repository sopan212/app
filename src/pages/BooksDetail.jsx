

import Footer  from '../global/Footer'
import Header from '../global/Header.jsx';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookById } from '../services/bookService';





export default function BooksDetail() {

  const { id } = useParams();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBook()
  }, [id])

  const loadBook = async () => {
    setLoading(true)
    const book = await getBookById(id)
    setSelectedBook(book)
    setLoading(false)
  }
  // useEffect(() => {
  //   fetch(selectedBook)
  //     .then(response => response.json())
  //     .then(data => setBook(data));
  // }, []);

  console.log(selectedBook)

  // if (!selectedBook) {
  //   return <div>Loading...</div>;
  // }
  if (!selectedBook) {
    return (
      <section>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-lightColor">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Buku tidak ditemukan</h2>
            <Link 
              to="/books" 
              className="inline-block px-6 py-3 bg-primary font-mono text-white shadow-md rounded-lg hover:bg-primary/90 transition-all"
            >
              ← Kembali ke Daftar Buku
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    );
  }

  return (
    <section className="bg-lightColor min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb / Navigation */}
        <div className="mb-6">
          <Link 
            to="/books" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-mono text-sm font-medium transition-colors"
          >
            <span className="mr-2">←</span> Kembali ke Daftar Buku
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-sans text-gray-800">
            Detail Buku
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
            
            {/* Left Column - Image */}
            <div className="flex flex-col items-center justify-start space-y-6">
              <div className="w-full max-w-md">
                <img 
                  src={selectedBook.image_url || selectedBook.url} 
                  alt={selectedBook.judul}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <a 
                  href="https://tokopedia.link/VYYWISMVKCb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-primary font-mono text-white shadow-md rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all"
                >
                  🛒 Beli Sekarang
                </a>
                <Link 
                  to="/books"
                  className="flex-1 text-center px-6 py-3 bg-gray-600 font-mono font-medium text-base text-black shadow-md rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all"
                >
                  ← Kembali
                </Link>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col space-y-6">
              
              {/* Book Title */}
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold font-sans text-gray-800 leading-tight">
                  {selectedBook.judul}
                </h2>
              </div>

              {/* Book Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-bold font-mono text-gray-900 min-w-[120px]">Penulis:</span>
                    <span className="font-mono text-gray-700">{selectedBook.penulis}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-bold font-mono text-gray-900 min-w-[120px]">Penerbit:</span>
                    <span className="font-mono text-gray-700">{selectedBook.penerbit}</span>
                  </div>

                  {selectedBook.halaman && (
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="font-bold font-mono text-gray-900 min-w-[120px]">Halaman:</span>
                      <span className="font-mono text-gray-700">{selectedBook.halaman}</span>
                    </div>
                  )}

                  {selectedBook.ukuran && (
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="font-bold font-mono text-gray-900 min-w-[120px]">Ukuran:</span>
                      <span className="font-mono text-gray-700">{selectedBook.ukuran}</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-bold font-mono text-gray-900 min-w-[120px]">ISBN:</span>
                    <span className="font-mono text-gray-700">{selectedBook.isbn}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-bold font-mono text-gray-900 min-w-[120px]">Harga:</span>
                    <span className="font-mono text-lg font-semibold text-primary">{selectedBook.harga}</span>
                  </div>

                </div>
              </div>

              {/* Description Accordion */}
              {selectedBook.deskripsi && (
                <div className="border-t border-gray-200 pt-6">
                  <button
                    onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className="font-bold font-sans text-xl text-gray-900">
                      Deskripsi
                    </h3>
                    <span className="text-2xl text-primary transition-transform duration-300 group-hover:scale-110">
                      {isDescriptionOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isDescriptionOpen ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-mono text-sm text-gray-700 leading-relaxed text-justify">
                      {selectedBook.deskripsi}
                    </p>
                  </div>
                  
                  {!isDescriptionOpen && (
                    <p className="font-mono text-sm text-gray-500 mt-2 italic">
                      Klik untuk membaca deskripsi lengkap...
                    </p>
                  )}
                </div>
              )}

            </div>

          </div>
        </div>

      </div>

      <Footer />
    </section>
  )
}
