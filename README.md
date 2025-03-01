# Tugas2_PPL
## KELOMPOK 7

## Deskripsi Program
Program ini merupakan aplikasi berbasis Node.js yang berfungsi sebagai sistem manajemen database buku sederhana menggunakan CLI (Command Line Interface). 
Program ini menyimpan data dalam file JSON (database.json) dan memungkinkan pengguna untuk melakukan beberapa operasi utama, yaitu:

1. Melihat daftar buku
2. Menambahkan buku baru
3. Melihat detail buku berdasarkan nomor urut
4. Memperbarui informasi buku
5. Menghapus buku dari database
6. Keluar dari aplikasi

Aplikasi ini memungkinkan pengguna untuk melakukan berbagai operasi seperti melihat daftar buku yang tersimpan dalam database JSON, menambahkan buku baru dengan informasi berupa nama, genre, dan nama pengarang, serta melihat detail buku berdasarkan nomor urutnya. Selain itu, pengguna juga dapat memperbarui informasi buku yang telah ada dengan mengganti nama, genre, atau pengarangnya, serta menghapus buku dari database jika sudah tidak diperlukan. Data buku disimpan dalam file database.json, dan program menggunakan fs (File System) untuk membaca serta menulis data ke dalam file tersebut. Antarmuka berbasis CLI dibuat menggunakan modul readline, yang memungkinkan pengguna untuk berinteraksi dengan program secara langsung dengan memasukkan pilihan angka sesuai menu yang ditampilkan. Setelah setiap aksi selesai, menu akan muncul kembali hingga pengguna memilih untuk keluar dari aplikasi. Dengan fitur CRUD (Create, Read, Update, Delete), program ini memberikan kemudahan dalam mengelola koleksi buku secara sederhana dan interaktif.

## Cara Kerja Program
1. Saat program dijalankan, akan menampilkan menu utama.
2. Pengguna memilih opsi dengan mengetikkan angka (1-6).
3. Program akan mengeksekusi fungsi sesuai dengan pilihan pengguna.
4. Jika pengguna memilih keluar, program akan berhenti.
