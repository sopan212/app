import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../global/Header"
import Footer from "../global/Footer"

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingBook, setEditingBook] = useState(null)
  const [formData, setFormData] = useState({
    id: "",
    judul: "",
    penulis: "",
    penerbit: "",
    halaman: "",
    ukuran: "",
    isbn: "",
    harga: "",
    url: "",
    deskripsi: ""
  })
  const [imagePreview, setImagePreview] = useState("")
  const [uploadMethod, setUploadMethod] = useState("url") // "url" or "file"

  const navigate = useNavigate()
  const ADMIN_PASSWORD = "admin123" // Ganti dengan password yang lebih aman

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      loadBooks()
    }
  }, [])

  const loadBooks = () => {
    const savedBooks = localStorage.getItem("booksData")
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks))
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
      loadBooks()
    } else {
      alert("Password salah!")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuth")
    setPassword("")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Update preview if URL changes
    if (name === "url" && uploadMethod === "url") {
      setImagePreview(value)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file terlalu besar! Maksimal 2MB")
        return
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert("File harus berupa gambar!")
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result
        setFormData({
          ...formData,
          url: base64String
        })
        setImagePreview(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingBook) {
      // Update existing book
      const updatedBooks = books.map(book => 
        book.id === editingBook.id ? { ...formData } : book
      )
      setBooks(updatedBooks)
      localStorage.setItem("booksData", JSON.stringify(updatedBooks))
    } else {
      // Add new book
      const newBook = {
        ...formData,
        id: Date.now().toString()
      }
      const updatedBooks = [...books, newBook]
      setBooks(updatedBooks)
      localStorage.setItem("booksData", JSON.stringify(updatedBooks))
    }

    resetForm()
  }

  const handleEdit = (book) => {
    setEditingBook(book)
    setFormData(book)
    setImagePreview(book.url)
    // Detect if URL is base64 or regular URL
    setUploadMethod(book.url.startsWith('data:') ? 'file' : 'url')
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      const updatedBooks = books.filter(book => book.id !== id)
      setBooks(updatedBooks)
      localStorage.setItem("booksData", JSON.stringify(updatedBooks))
    }
  }

  const resetForm = () => {
    setFormData({
      id: "",
      judul: "",
      penulis: "",
      penerbit: "",
      halaman: "",
      ukuran: "",
      isbn: "",
      harga: "",
      url: "",
      deskripsi: ""
    })
    setEditingBook(null)
    setShowForm(false)
    setImagePreview("")
    setUploadMethod("url")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
            <p className="font-mono text-gray-600">Masukkan password untuk akses dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary transition-colors"
                placeholder="Masukkan password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white font-mono font-bold py-3 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="font-mono text-sm text-primary hover:underline">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-lightColor py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
                <p className="font-mono text-gray-600">Kelola data buku Anda</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="px-6 py-3 bg-primary text-white font-mono font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md"
                >
                  {showForm ? "Tutup Form" : "+ Tambah Buku"}
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 bg-gray-600 text-white font-mono font-semibold rounded-lg hover:bg-gray-700 transition-all shadow-md"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {editingBook ? "Edit Buku" : "Tambah Buku Baru"}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      Judul Buku *
                    </label>
                    <input
                      type="text"
                      name="judul"
                      value={formData.judul}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      Penulis *
                    </label>
                    <input
                      type="text"
                      name="penulis"
                      value={formData.penulis}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      Penerbit *
                    </label>
                    <input
                      type="text"
                      name="penerbit"
                      value={formData.penerbit}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      Halaman
                    </label>
                    <input
                      type="text"
                      name="halaman"
                      value={formData.halaman}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      Ukuran
                    </label>
                    <input
                      type="text"
                      name="ukuran"
                      value={formData.ukuran}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      ISBN *
                    </label>
                    <input
                      type="text"
                      name="isbn"
                      value={formData.isbn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                      Harga *
                    </label>
                    <input
                      type="text"
                      name="harga"
                      value={formData.harga}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                      placeholder="Rp 50.000"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block font-mono text-sm font-semibold text-gray-700 mb-3">
                      Gambar Cover Buku *
                    </label>
                    
                    {/* Upload Method Toggle */}
                    <div className="flex gap-4 mb-4">
                      <button
                        type="button"
                        onClick={() => {
                          setUploadMethod("url")
                          setImagePreview("")
                          setFormData({ ...formData, url: "" })
                        }}
                        className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all ${
                          uploadMethod === "url"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        📎 URL Gambar
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadMethod("file")
                          setImagePreview("")
                          setFormData({ ...formData, url: "" })
                        }}
                        className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all ${
                          uploadMethod === "file"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        📁 Upload File
                      </button>
                    </div>

                    {/* URL Input */}
                    {uploadMethod === "url" && (
                      <input
                        type="url"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                        placeholder="https://example.com/image.jpg"
                        required
                      />
                    )}

                    {/* File Input */}
                    {uploadMethod === "file" && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="imageUpload"
                        />
                        <label
                          htmlFor="imageUpload"
                          className="cursor-pointer flex flex-col items-center"
                        >
                          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span className="font-mono text-sm text-gray-600">
                            Klik untuk upload gambar
                          </span>
                          <span className="font-mono text-xs text-gray-400 mt-1">
                            PNG, JPG, JPEG (Max 2MB)
                          </span>
                        </label>
                      </div>
                    )}

                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="mt-4">
                        <p className="font-mono text-sm font-semibold text-gray-700 mb-2">Preview:</p>
                        <div className="relative inline-block">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-40 h-52 object-cover rounded-lg shadow-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview("")
                              setFormData({ ...formData, url: "" })
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-all"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                    Deskripsi
                  </label>
                  <textarea
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white font-mono font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md"
                  >
                    {editingBook ? "Update Buku" : "Simpan Buku"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 bg-gray-300 text-gray-700 font-mono font-semibold rounded-lg hover:bg-gray-400 transition-all"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Books List */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Daftar Buku ({books.length})
            </h2>

            {books.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <p className="font-mono text-gray-600">Belum ada buku. Tambahkan buku pertama Anda!</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-mono text-sm font-bold text-gray-700">Cover</th>
                      <th className="text-left py-3 px-4 font-mono text-sm font-bold text-gray-700">Judul</th>
                      <th className="text-left py-3 px-4 font-mono text-sm font-bold text-gray-700">Penulis</th>
                      <th className="text-left py-3 px-4 font-mono text-sm font-bold text-gray-700">Harga</th>
                      <th className="text-center py-3 px-4 font-mono text-sm font-bold text-gray-700">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <tr key={book.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <img src={book.url} alt={book.judul} className="w-16 h-20 object-cover rounded shadow" />
                        </td>
                        <td className="py-3 px-4 font-sans font-semibold text-gray-800">{book.judul}</td>
                        <td className="py-3 px-4 font-mono text-sm text-gray-600">{book.penulis}</td>
                        <td className="py-3 px-4 font-mono text-sm font-semibold text-primary">{book.harga}</td>
                        <td className="py-3 px-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleEdit(book)}
                              className="px-4 py-2 bg-blue-500 text-white font-mono text-sm rounded hover:bg-blue-600 transition-all"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(book.id)}
                              className="px-4 py-2 bg-red-500 text-white font-mono text-sm rounded hover:bg-red-600 transition-all"
                            >
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
