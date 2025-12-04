# 🚀 Panduan Deploy ke Hostinger

## ✅ Build Berhasil!

Aplikasi Anda sudah di-build dan siap untuk di-deploy ke Hostinger.

## 📦 File yang Siap Deploy

1. **Folder `dist/`** - Berisi semua file production
2. **File `hostinger-deploy.zip`** - File zip siap upload (lebih mudah)

---

## 🌐 Cara Deploy ke Hostinger

### Metode 1: Upload via File Manager (Recommended)

1. **Login ke Hostinger**
   - Buka https://hpanel.hostinger.com
   - Login dengan akun Anda

2. **Buka File Manager**
   - Pilih hosting Anda
   - Klik "File Manager" atau "Files"

3. **Navigasi ke Folder Public**
   - Masuk ke folder `public_html` (untuk domain utama)
   - Atau folder domain/subdomain Anda

4. **Upload File**
   
   **Opsi A - Upload ZIP (Lebih Cepat):**
   - Klik tombol "Upload"
   - Upload file `hostinger-deploy.zip`
   - Setelah upload selesai, klik kanan file zip
   - Pilih "Extract" untuk extract file
   - Hapus file zip setelah extract
   
   **Opsi B - Upload Folder dist:**
   - Hapus semua file lama di `public_html` (backup dulu jika perlu)
   - Upload semua isi folder `dist/` ke `public_html`
   - Pastikan file `.htaccess` ikut terupload

5. **Verifikasi File**
   
   Pastikan struktur file di `public_html` seperti ini:
   ```
   public_html/
   ├── .htaccess
   ├── index.html
   ├── assets/
   │   ├── index-xxx.css
   │   ├── index-xxx.js
   │   └── (gambar-gambar lainnya)
   └── (file lainnya)
   ```

6. **Test Website**
   - Buka domain Anda di browser
   - Test semua halaman (Home, Books, Books Detail)
   - Test fitur search
   - Test routing (refresh halaman di /books)

---

### Metode 2: Upload via FTP

1. **Download FTP Client**
   - FileZilla: https://filezilla-project.org/
   - Atau gunakan FTP client favorit Anda

2. **Dapatkan Kredensial FTP**
   - Login ke Hostinger hPanel
   - Buka "FTP Accounts"
   - Catat: Host, Username, Password, Port

3. **Connect via FTP**
   - Buka FileZilla
   - Masukkan kredensial FTP
   - Connect

4. **Upload Files**
   - Di panel kiri: navigasi ke folder `dist/` di komputer Anda
   - Di panel kanan: navigasi ke `public_html/`
   - Drag & drop semua isi folder `dist/` ke `public_html/`

5. **Verifikasi & Test**
   - Pastikan semua file terupload
   - Test website di browser

---

## 🔧 Troubleshooting

### Problem: Halaman 404 saat refresh
**Solusi:** Pastikan file `.htaccess` ada di root folder `public_html`

### Problem: CSS/JS tidak load
**Solusi:** 
- Cek apakah folder `assets/` terupload dengan benar
- Clear browser cache (Ctrl + Shift + R)

### Problem: Gambar tidak muncul
**Solusi:** 
- Gambar menggunakan URL Cloudinary (external), pastikan koneksi internet OK
- Cek console browser untuk error

### Problem: Routing tidak bekerja
**Solusi:** 
- Pastikan `.htaccess` ada dan berisi konfigurasi yang benar
- Pastikan mod_rewrite enabled di hosting (biasanya sudah default)

---

## 📝 Catatan Penting

1. **Backup Data Lama**
   - Sebelum upload, backup file lama jika ada

2. **File .htaccess**
   - File ini penting untuk routing React Router
   - Jangan dihapus atau diubah

3. **Update Aplikasi**
   - Setiap kali ada perubahan, jalankan:
     ```bash
     yarn build
     copy .htaccess dist\.htaccess
     ```
   - Lalu upload ulang isi folder `dist/`

4. **Cache Browser**
   - Setelah update, clear cache browser atau hard refresh (Ctrl + Shift + R)

---

## 🎉 Selesai!

Aplikasi Anda sekarang sudah live di Hostinger!

**URL Aplikasi:** https://yourdomain.com

### Fitur yang Sudah Tersedia:
✅ Halaman Home
✅ Halaman Books dengan Search
✅ Halaman Books Detail dengan Accordion
✅ Responsive Design
✅ Routing yang bekerja dengan baik

---

## 📞 Butuh Bantuan?

Jika ada masalah saat deployment, hubungi support Hostinger atau tanyakan ke saya! 😊
