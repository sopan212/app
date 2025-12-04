import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../global/Header"
import Footer from "../global/Footer"
import { signIn, signOut, getSession } from "../services/authService"
import { getAllBooks, createBook, updateBook, deleteBook, uploadBookImage, deleteBookImage } from "../services/bookService"

export default function AdminSupabase() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [books, setBooks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingBook, setEditingBook] = useState(null)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    judul: "",
    penulis: "",
    penerbit: "",
    halaman: "",
    ukuran: "",
    isbn: "",
    harga: "",
    image_url: "",
    deskripsi: ""
  })
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [uploadMethod, setUploadMethod] = useState("url")

  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const { session } = await getSession()
    if (session) {
      setIsAuthenticated(true)
      loadBooks()
    }
  }

  const loadBooks = async () => {
    setLoading(true)
    const data = await getAllBooks()
    setBooks(data)
    setLoading(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    const { user, error } = await signIn(email, password)
    
    if (error) {
      alert("Login gagal: " + error)
      setLoading(false)
      return
    }

    setIsAuthenticated(true)
    loadBooks()
    setLoading(false)
  }

  const handleLogout = async () => {
    await signOut()
    setIsAuthenticated(false)
    setEmail("")
    setPassword("")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    if (name === "image_url" && uploadMethod === "url") {
      setImagePreview(value)
    }
  }

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file terlalu besar! Maksimal 2MB")
        return
      }

      if (!file.type.startsWith('image/')) {
        alert("File harus berupa gambar!")
        return
      }

      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    let imageUrl = formData.image_url

    // Upload image if file is selected
    if (imageFile && uploadMethod === "file") {
      setUploading(true)
      const { url, error } = await uploadBookImage(imageFile)
      setUploading(false)
      
      if (error) {
        alert("Gagal upload gambar: " + error)
        setLoading(false)
        return
      }
      
      imageUrl = url
    }

    const bookData = {
      ...formData,
      image_url: imageUrl
    }

    if (editingBook) {
      // Update existing book
      const { data, error } = await updateBook(editingBook.id, bookData)
      
      if (error) {
        alert("Gagal update buku: " + error)
      } else {
        alert("Buku berhasil diupdate!")
        loadBooks()
        resetForm()
      }
    } else {
      // Create new book
      const { data, error } = await createBook(bookData)
      
      if (error) {
        alert("Gagal menambah buku: " + error)
      } else {
        alert("Buku berhasil ditambahkan!")
        loadBooks()
        resetForm()
      }
    }

    setLoading(false)
  }

  const handleEdit = (book) => {
    setEditingBook(book)
    setFormData({
      judul: book.judul,
      penulis: book.penulis,
      penerbit: book.penerbit,
      halaman: book.halaman || "",
      ukuran: book.ukuran || "",
      isbn: book.isbn,
      harga: book.harga,
      image_url: book.image_url || "",
      deskripsi: book.deskripsi || ""
    })
    setImagePreview(book.image_url)
    setUploadMethod(book.image_url?.includes('supabase') ? 'file' : 'url')
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (book) => {
    if (!window.confirm("Yakin ingin menghapus buku ini?")) return

    setLoading(true)

    // Delete image if it's from Supabase storage
    if (book.image_url?.includes('supabase')) {
      await deleteBookImage(book.image_url)
    }

    const { error } = await deleteBook(book.id)
    
    if (error) {
      alert("Gagal menghapus buku: " + error)
    } else {
      alert("Buku berhasil dihapus!")
      loadBooks()
    }

    setLoading(false)
  }

  const resetForm = () => {
    setFormData({
      judul: "",
      penulis: "",
      penerbit: "",
      halaman: "",
      ukuran: "",
      isbn: "",
      harga: "",
      image_url: "",
      deskripsi: ""
    })
    setEditingBook(null)
    setShowForm(false)
    setImagePreview("")
    setImageFile(null)
    setUploadMethod("url")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Admin Login</h1>
            <p className="font-mono text-gray-600">Login dengan akun Supabase</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-mono text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary transition-colors"
                placeholder="admin@example.com"
                required
              />
            </div>

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
              disabled={loading}
              className="w-full bg-primary text-white font-mono font-bold py-3 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {loading ? "Loading..." : "Login"}
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
                <p className="font-mono text-gray-600">Kelola data buku dengan Supabase</p>
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
                  className="px-6 py-3 bg-gray-600 text-gren font-mono font-semibold rounded-lg hover:bg-gray-700 transition-all shadow-md"
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
                    
                    <div className="flex gap-4 mb-4">
                      <button
                        type="button"
                        onClick={() => {
                          setUploadMethod("url")
                          setImageFile(null)
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
                        onClick={() => setUploadMethod("file")}
                        className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all ${
                          uploadMethod === "file"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        📁 Upload ke Supabase
                      </button>
                    </div>

                    {uploadMethod === "url" && (
                      <input
                        type="url"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg font-mono focus:outline-none focus:border-primary"
                        placeholder="https://example.com/image.jpg"
                        required={!imageFile}
                      />
                    )}

                    {uploadMethod === "file" && (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageSelect}
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
                            {imageFile ? imageFile.name : "Klik untuk upload gambar"}
                          </span>
                          <span className="font-mono text-xs text-gray-400 mt-1">
                            PNG, JPG, JPEG (Max 2MB)
                          </span>
                        </label>
                      </div>
                    )}

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
                              setImageFile(null)
                              setFormData({ ...formData, image_url: "" })
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
                    disabled={loading || uploading}
                    className="px-6 py-3 bg-primary text-white font-mono font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md disabled:opacity-50"
                  >
                    {uploading ? "Uploading..." : loading ? "Saving..." : editingBook ? "Update Buku" : "Simpan Buku"}
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

            {loading && books.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">⏳</div>
                <p className="font-mono text-gray-600">Loading...</p>
              </div>
            ) : books.length === 0 ? (
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
                          <img src={book.image_url} alt={book.judul} className="w-16 h-20 object-cover rounded shadow" />
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
                              onClick={() => handleDelete(book)}
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
