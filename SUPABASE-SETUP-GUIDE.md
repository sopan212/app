# 🚀 Panduan Setup Supabase

## ✅ Yang Sudah Dilakukan

1. ✅ Install @supabase/supabase-js
2. ✅ Buat konfigurasi Supabase (.env)
3. ✅ Buat database table (books)
4. ✅ Buat storage bucket (book-covers)
5. ✅ Setup Row Level Security (RLS)
6. ✅ Buat service untuk CRUD operations
7. ✅ Buat halaman Admin dengan Supabase

---

## 📋 Langkah Selanjutnya: Buat User Admin

### 1. Buat User Admin di Supabase

**Di Dashboard Supabase:**

1. Klik **Authentication** di sidebar kiri
2. Klik **Users** tab
3. Klik tombol **Add user** (atau **Invite**)
4. Pilih **Create new user**
5. Isi form:
   - **Email:** admin@kgmpress.com (atau email Anda)
   - **Password:** Buat password kuat (SIMPAN!)
   - **Auto Confirm User:** ✅ Centang ini (penting!)
6. Klik **Create user**

### 2. Test Login

1. Restart dev server:
   ```bash
   # Stop server (Ctrl+C)
   yarn dev
   ```

2. Buka browser: http://localhost:5173/admin-supabase

3. Login dengan:
   - Email: admin@kgmpress.com
   - Password: (password yang Anda buat)

---

## 📚 Cara Menggunakan Admin Dashboard

### Login
- URL: http://localhost:5173/admin-supabase
- Login dengan email & password Supabase

### Tambah Buku
1. Klik "+ Tambah Buku"
2. Isi form
3. Upload gambar:
   - **📁 Upload ke Supabase:** Upload file langsung (disimpan di Supabase Storage)
   - **📎 URL Gambar:** Pakai URL eksternal (Cloudinary, dll)
4. Klik "Simpan Buku"

### Edit Buku
1. Klik "Edit" pada buku
2. Ubah data
3. Klik "Update Buku"

### Hapus Buku
1. Klik "Hapus" pada buku
2. Konfirmasi
3. Buku dan gambar (jika di Supabase) akan terhapus

---

## 🔄 Migrasi Data dari localStorage ke Supabase

Jika Anda sudah punya data di localStorage, bisa migrasi manual:

1. Buka http://localhost:5173/admin (localStorage version)
2. Copy data buku satu per satu
3. Paste ke http://localhost:5173/admin-supabase

Atau bisa import dari Data.js:
1. Buka file `src/Data.js`
2. Copy data buku
3. Tambahkan manual di admin Supabase

---

## 🌐 Deploy ke Production

### 1. Update .env untuk Production

Buat file `.env.production`:
```
VITE_SUPABASE_URL=https://uuadurakugwkvjdkoyis.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Build & Deploy

```bash
yarn build
```

Upload folder `dist/` ke Hostinger seperti biasa.

### 3. Akses Admin di Production

URL: https://kgmpress.com/admin-supabase

---

## 🔒 Keamanan

### Row Level Security (RLS)

Sudah disetup dengan policy:
- ✅ **Public Read:** Semua orang bisa lihat buku
- ✅ **Authenticated Write:** Hanya user login yang bisa tambah/edit/hapus

### Storage Security

- ✅ **Public Read:** Semua orang bisa lihat gambar
- ✅ **Authenticated Upload:** Hanya user login yang bisa upload
- ✅ **Authenticated Delete:** Hanya user login yang bisa hapus

---

## 📊 Monitoring & Maintenance

### Cek Usage

Di Dashboard Supabase:
1. Klik **Settings** → **Usage**
2. Monitor:
   - Database size (max 500MB free)
   - Storage size (max 1GB free)
   - Bandwidth (max 2GB/month free)

### Backup Data

1. Klik **Database** → **Backups**
2. Download backup manual jika perlu

---

## 🆘 Troubleshooting

### Error: "Invalid API key"
- Cek file `.env` sudah benar
- Restart dev server

### Error: "Row Level Security"
- Pastikan SQL sudah dijalankan dengan benar
- Cek di **Database** → **Tables** → **books** → **Policies**

### Gambar tidak muncul
- Cek bucket `book-covers` sudah dibuat
- Cek policy storage sudah benar

### Tidak bisa login
- Pastikan user sudah dibuat di Authentication
- Pastikan "Auto Confirm User" dicentang

---

## 🎯 Next Steps

1. ✅ Buat user admin
2. ✅ Test login
3. ✅ Tambah beberapa buku
4. ✅ Test upload gambar
5. ✅ Deploy ke production

---

## 📞 Butuh Bantuan?

Jika ada masalah, hubungi developer! 😊
