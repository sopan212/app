# 🚀 Panduan Deploy dengan Supabase ke Hostinger

## ⚠️ PENTING: Checklist Sebelum Deploy

### 1. ✅ Pastikan User Admin Sudah Dibuat
- Buka https://supabase.com
- Authentication → Users
- Buat user admin (jangan lupa centang "Auto Confirm User")

### 2. ✅ Test di Local Dulu
```bash
# Test semua fitur:
# 1. Homepage - carousel buku
# 2. Books page - list & search
# 3. Books detail - detail buku
# 4. Admin Supabase - login & CRUD
```

### 3. ✅ Pastikan .env Sudah Benar
File `.env` harus ada dan berisi:
```
VITE_SUPABASE_URL=https://uuadurakugwkvjdkoyis.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📦 Langkah Deploy

### Step 1: Build Production

```bash
# Build aplikasi
yarn build
```

**Output:** Folder `dist/` akan dibuat dengan semua file production.

### Step 2: Cek File .htaccess

Pastikan file `.htaccess` ada di folder `dist/`:

```bash
# Windows
dir dist\.htaccess

# Jika tidak ada, copy manual:
copy public\.htaccess dist\.htaccess
```

### Step 3: Buat ZIP untuk Upload

```bash
# Buat zip file
Compress-Archive -Path dist\* -DestinationPath hostinger-deploy-supabase.zip -Force
```

### Step 4: Upload ke Hostinger

1. **Login ke Hostinger hPanel**
   - https://hpanel.hostinger.com

2. **Buka File Manager**
   - Pilih hosting Anda
   - Klik "File Manager"

3. **Backup Data Lama (Opsional)**
   - Jika ada data penting, backup dulu

4. **Hapus File Lama**
   - Hapus semua file di `public_html`
   - KECUALI: `.htaccess` (jika ada yang custom)

5. **Upload ZIP**
   - Upload `hostinger-deploy-supabase.zip`
   - Extract file zip
   - Hapus file zip setelah extract

6. **Verifikasi File**
   - Pastikan struktur seperti ini:
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── assets/
   └── ...
   ```

### Step 5: Test Website

1. **Buka website:** https://kgmpress.com
2. **Test halaman:**
   - ✅ Homepage (carousel)
   - ✅ Books page (list & pagination)
   - ✅ Books detail
   - ✅ Admin Supabase (login)

---

## 🔧 Troubleshooting

### Problem 1: Halaman Blank / Error

**Penyebab:** Environment variables tidak terbaca

**Solusi:**
Vite membutuhkan env variables di build time. Pastikan:
1. File `.env` ada saat build
2. Restart terminal setelah buat `.env`
3. Build ulang: `yarn build`

### Problem 2: Admin Tidak Bisa Login

**Penyebab:** User belum dibuat di Supabase

**Solusi:**
1. Buka dashboard Supabase
2. Authentication → Users
3. Buat user baru
4. Centang "Auto Confirm User"

### Problem 3: Gambar Tidak Muncul

**Penyebab:** Storage bucket belum dibuat atau policy salah

**Solusi:**
1. Buka dashboard Supabase
2. Storage → Buckets
3. Pastikan bucket `book-covers` ada
4. Pastikan policy "Public read access" aktif

### Problem 4: CORS Error

**Penyebab:** Domain belum ditambahkan di Supabase

**Solusi:**
1. Buka dashboard Supabase
2. Settings → API
3. Scroll ke "URL Configuration"
4. Tambahkan domain: `https://kgmpress.com`

### Problem 5: 404 saat Refresh

**Penyebab:** File `.htaccess` tidak ada atau salah

**Solusi:**
Pastikan `.htaccess` berisi:
```apache
Options -MultiViews
RewriteEngine On
RewriteBase /

AddType application/javascript .js .mjs
AddType text/css .css
AddType image/svg+xml .svg

RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]

RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ /index.html [L]
```

---

## 🔒 Keamanan Production

### 1. Jangan Commit .env ke Git

Tambahkan ke `.gitignore`:
```
.env
.env.local
.env.production
```

### 2. Gunakan Environment Variables yang Berbeda

**Development (.env):**
```
VITE_SUPABASE_URL=https://uuadurakugwkvjdkoyis.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

**Production (.env.production):**
Sama seperti development (karena anon key aman untuk public)

### 3. Jangan Share Service Role Key

Di Supabase ada 2 key:
- ✅ **anon public** - Aman untuk frontend (sudah dipakai)
- ❌ **service_role** - JANGAN dipakai di frontend!

---

## 📊 Monitoring Production

### 1. Cek Usage Supabase

Dashboard Supabase → Settings → Usage:
- Database: 500MB max (free)
- Storage: 1GB max (free)
- Bandwidth: 2GB/month max (free)

### 2. Cek Error Logs

Browser Console (F12):
- Cek error JavaScript
- Cek error network (API calls)

### 3. Test Semua Fitur

Checklist:
- [ ] Homepage load
- [ ] Books list load
- [ ] Search buku
- [ ] Pagination
- [ ] Detail buku
- [ ] Admin login
- [ ] Tambah buku
- [ ] Upload gambar
- [ ] Edit buku
- [ ] Hapus buku

---

## 🔄 Update Website (Setelah Deploy)

Jika ada perubahan kode:

```bash
# 1. Pull latest code (jika pakai git)
git pull

# 2. Install dependencies (jika ada yang baru)
yarn install

# 3. Build
yarn build

# 4. Upload
# Upload isi folder dist/ ke public_html
# Atau buat zip dan upload seperti langkah awal
```

---

## 💡 Tips Deploy

### 1. Test di Local Dulu
Selalu test semua fitur di local sebelum deploy.

### 2. Backup Sebelum Deploy
Backup data penting sebelum hapus file lama.

### 3. Deploy di Waktu Sepi
Deploy saat traffic rendah (malam/dini hari).

### 4. Monitor Setelah Deploy
Pantau website 15-30 menit setelah deploy.

### 5. Siapkan Rollback Plan
Simpan backup untuk rollback jika ada masalah.

---

## 🎯 Checklist Deploy

Sebelum deploy, pastikan:

- [ ] User admin sudah dibuat di Supabase
- [ ] Test semua fitur di local
- [ ] File `.env` sudah benar
- [ ] Build berhasil tanpa error
- [ ] File `.htaccess` ada di dist/
- [ ] Backup data lama (jika ada)
- [ ] Domain sudah ditambahkan di Supabase (opsional)

Setelah deploy, test:

- [ ] Homepage
- [ ] Books page
- [ ] Books detail
- [ ] Admin login
- [ ] CRUD operations
- [ ] Upload gambar
- [ ] Refresh halaman (routing)

---

## 📞 Butuh Bantuan?

Jika ada masalah saat deploy, cek:
1. Browser console (F12) untuk error
2. Network tab untuk API errors
3. Supabase dashboard untuk logs

Hubungi developer jika masih ada masalah! 😊
