# 📋 Panduan Admin Dashboard

## 🔐 Akses Admin

**URL:** http://localhost:5173/admin (development) atau https://kgmpress.com/admin (production)

**Password Default:** `admin123`

⚠️ **PENTING:** Ganti password di file `src/pages/Admin.jsx` baris 21 sebelum deploy!

---

## ✨ Fitur Admin Dashboard

### 1. Login
- Masukkan password untuk akses dashboard
- Session tersimpan di localStorage
- Logout untuk keluar

### 2. Tambah Buku Baru
- Klik tombol "+ Tambah Buku"
- Isi semua field yang required (*)
- **Upload Gambar:**
  - Pilih "📁 Upload File" untuk upload dari komputer (max 2MB)
  - Atau pilih "📎 URL Gambar" untuk pakai URL eksternal
- Preview gambar akan muncul otomatis
- Klik "Simpan Buku"

### 3. Edit Buku
- Klik tombol "Edit" pada buku yang ingin diubah
- Form akan terisi otomatis dengan data buku
- Ubah data yang diperlukan
- Klik "Update Buku"

### 4. Hapus Buku
- Klik tombol "Hapus" pada buku yang ingin dihapus
- Konfirmasi penghapusan
- Buku akan terhapus permanent

---

## 📝 Field Form Buku

| Field | Required | Contoh |
|-------|----------|--------|
| Judul Buku | ✅ | Menalar Menggugah Dunia-1 |
| Penulis | ✅ | Yahya Agung Kuntadi |
| Penerbit | ✅ | Komunitas Gadjah Mada |
| Halaman | ❌ | 64 |
| Ukuran | ❌ | 21 x 14,5 cm |
| ISBN | ✅ | 978-623-91070-1-7 |
| Harga | ✅ | Rp 50.000 |
| Gambar Cover | ✅ | Upload file atau masukkan URL |
| Deskripsi | ❌ | Deskripsi lengkap buku... |

---

## 💾 Penyimpanan Data

Data disimpan di **localStorage** browser dengan key `booksData`.

### Upload Gambar:
- **Upload File:** Gambar dikonversi ke base64 dan disimpan di localStorage
- **URL Gambar:** URL disimpan langsung (lebih hemat storage)
- **Ukuran Max:** 2MB per gambar
- **Format:** PNG, JPG, JPEG

### Cara Kerja:
1. Saat pertama kali, data diambil dari `src/Data.js` (data default)
2. Setelah ada perubahan di admin, data disimpan ke localStorage
3. Website akan membaca dari localStorage jika ada, jika tidak ada akan pakai data default

### Backup Data:
1. Buka browser Console (F12)
2. Ketik: `localStorage.getItem('booksData')`
3. Copy hasilnya dan simpan di file .txt

### Restore Data:
1. Buka browser Console (F12)
2. Ketik: `localStorage.setItem('booksData', 'PASTE_DATA_DISINI')`

### Reset ke Data Default:
1. Buka browser Console (F12)
2. Ketik: `localStorage.removeItem('booksData')`
3. Refresh halaman

---

## 🚀 Deploy ke Production

### Langkah Deploy:

1. **Build aplikasi:**
   ```bash
   yarn build
   ```

2. **Upload ke Hostinger:**
   - Upload semua isi folder `dist/` ke `public_html`
   - Pastikan file `.htaccess` ikut terupload

3. **Akses Admin:**
   - Buka https://kgmpress.com/admin
   - Login dengan password

### ⚠️ Catatan Penting:

- Data di localStorage bersifat **per-browser**
- Jika clear browser data, data admin akan hilang
- Untuk production yang serius, disarankan upgrade ke database (Supabase)

---

## 🔒 Keamanan

### Tips Keamanan:

1. **Ganti Password:**
   - Edit file `src/pages/Admin.jsx`
   - Cari baris: `const ADMIN_PASSWORD = "admin123"`
   - Ganti dengan password yang kuat

2. **Jangan Share Password:**
   - Password hanya untuk admin
   - Jangan simpan di repository public

3. **Backup Rutin:**
   - Backup data localStorage secara berkala
   - Simpan di tempat aman

---

## 🆙 Upgrade ke Supabase (Opsional)

Untuk production yang lebih robust, disarankan upgrade ke Supabase:

### Keuntungan Supabase:
- ✅ Data tersimpan di cloud (tidak hilang)
- ✅ Multi-user support
- ✅ Real-time sync
- ✅ Backup otomatis
- ✅ API ready
- ✅ Gratis untuk usage kecil

Hubungi developer untuk upgrade ke Supabase!

---

## 📞 Butuh Bantuan?

Jika ada masalah atau pertanyaan, hubungi developer! 😊
