
import Footer from "../global/Footer.jsx"
import Header from "../global/Header.jsx"
import SearchBox from "../components/seacrbox.jsx"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllBooks } from "../services/bookService"




export default function Books() {

  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [allBooks, setAllBooks] = useState([])
  const booksPerPage = 5

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    const data = await getAllBooks()
    setAllBooks(data)
  }

  // Filter buku berdasarkan search query
  const filteredBooks = allBooks.filter((book) => {
    const query = searchQuery.toLowerCase()
    return (
      book.judul.toLowerCase().includes(query) ||
      book.penulis.toLowerCase().includes(query) ||
      book.penerbit.toLowerCase().includes(query) ||
      book.isbn.toLowerCase().includes(query)
    )
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage)
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook)

  // Reset to page 1 when search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="">
        <Header />
        {/* <Backdrop/> */}

        <div className="w-full bg-lightColor min-h-screen">
          <div className="px-8 py-6 text-center">
            <h1 className="text-3xl font-bold font-sans text-gray-800 mb-2">
              Pilih Buku Yang Kamu Suka
            </h1>
            <Link 
              to="/" 
              className="inline-block mt-4 font-mono font-medium text-base py-2 px-6 shadow-md bg-primary rounded-lg text-white hover:bg-primary/90 hover:shadow-lg transition-all"
            >
              ← Kembali ke Beranda
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <div className="flex justify-center items-center">
              <SearchBox
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari buku berdasarkan judul, penulis, penerbit, atau ISBN..."
                showClearButton={true}
                onClear={() => {
                  setSearchQuery("")
                  setCurrentPage(1)
                }}
              />
            </div>
            
            {/* Search Results Info */}
            <div className="mt-3 text-center">
              <p className="font-mono text-sm text-gray-600">
                {searchQuery ? (
                  <>
                    Ditemukan <span className="font-bold text-primary">{filteredBooks.length}</span> buku
                    {filteredBooks.length === 0 && " - Coba kata kunci lain"}
                  </>
                ) : (
                  <>
                    Menampilkan <span className="font-bold text-primary">{indexOfFirstBook + 1}-{Math.min(indexOfLastBook, filteredBooks.length)}</span> dari <span className="font-bold text-primary">{filteredBooks.length}</span> buku
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="grid grid-cols-1 gap-6">
              {currentBooks.length > 0 ? (
                currentBooks.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
                      <img 
                        src={item.image_url || item.url} 
                        alt={item.judul}
                        className="rounded-lg object-cover max-h-80 w-auto shadow-md"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h2 className="text-xl font-bold font-sans text-gray-800 mb-3">
                          {item.judul}
                        </h2>
                        
                        <div className="space-y-2 text-gray-700">
                          <p className="font-mono text-sm">
                            <span className="font-semibold text-gray-900">Penulis:</span> {item.penulis}
                          </p>
                          <p className="font-mono text-sm">
                            <span className="font-semibold text-gray-900">Penerbit:</span> {item.penerbit}
                          </p>
                          {item.harga && (
                            <p className="font-mono text-sm">
                              <span className="font-semibold text-gray-900">Harga:</span> {item.harga}
                            </p>
                          )}
                          {item.isbn && (
                            <p className="font-mono text-sm">
                              <span className="font-semibold text-gray-900">ISBN:</span> {item.isbn}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link 
                          to={`/books-detail/${item.id}`}
                          className="inline-block font-mono font-medium text-base py-2 px-6 shadow-md bg-primary rounded-lg text-white hover:bg-primary/90 hover:shadow-lg transition-all"
                        >
                          Lihat Detail →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-xl font-bold font-sans text-gray-800 mb-2">
                    Tidak ada buku yang ditemukan
                  </h3>
                  <p className="font-mono text-gray-600 mb-4">
                    Coba gunakan kata kunci yang berbeda
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="font-mono font-medium text-base py-2 px-6 shadow-md bg-primary rounded-lg text-white hover:bg-primary/90 hover:shadow-lg transition-all"
                  >
                    Reset Pencarian
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredBooks.length > booksPerPage && (
              <div className="mt-12 flex justify-center items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-mono font-medium transition-all ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-primary shadow-md hover:shadow-lg hover:bg-primary hover:text-white'
                  }`}
                >
                  ← Prev
                </button>

                {/* Page Numbers */}
                <div className="flex space-x-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1
                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`w-10 h-10 rounded-lg font-mono font-medium transition-all ${
                            currentPage === pageNumber
                              ? 'bg-primary text-white shadow-lg scale-110'
                              : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-primary hover:text-white'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      )
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return (
                        <span key={pageNumber} className="flex items-center px-2 text-gray-400">
                          ...
                        </span>
                      )
                    }
                    return null
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-mono font-medium transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-primary shadow-md hover:shadow-lg hover:bg-primary hover:text-white'
                  }`}
                >
                  Next →
                </button>
              </div>
            )}
          </div>

        </div>

        <Footer />
      </section>
    </>
  )
}
