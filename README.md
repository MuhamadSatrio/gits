# gits
Repository ini berisi hasil jawaban tes GITS. 
Ctt : database yang digunakan mysql

Link dokumentasi Postman
https://documenter.getpostman.com/view/23486750/2s8ZDSbkFW

A. Golang soal nomor 1 dan 2.
Hanya tinggal menjalankan "go run main.go" pada masing-masing folder.

B. Node Js Express Nomor 3.
Pada setiap CRUD buku dan get users perlu login terlebih dahulu. cara menjalan API adalah sebagai berikut :
  1. buat file .env dan masukkan data sebagai berikut diseusaikan data database mysql anda:
  ACCESS_TOKEN_SECRET = bf8fafiagmret983tung72bng922ngngmkm7ananvmssvafqrefre3f
  REFRESH_TOKEN_SECRET = famfianf3r34jif394f0f 39uf 9woufmou9234rn49nrf34w9fnnt
  USER = root
  PASSWORD = "tes123"
  HOST = localhost
  DATABASE = gits
  DIALECT = mysql
  
  2. jalankan "npm init"
  3. jalankan "npm install"
  4. jalankan "npm run start"
  5. silahkan coba melalui postman sesuai link diatas.
Setelah berjalan pertam-tama perlu register users dengan role author dan publisher agar nantinya dapat menambahkan buku, dikarenakan penmbahkan buku berdasarkan author dan publisher yang ada pada database. database disini menggunakan MYSQL dan table akan terbuat otomatis ketika menjalan API ini. Kemudian jika misalkan author dan publisher tidak ditemukan dikarenakan author dan publisher belum melakukan register maka tidak akan dapat menginputkan buku.

