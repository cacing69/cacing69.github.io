+++
date = '2026-04-19T10:30:00+07:00'
draft = false
title = 'Memulai dengan Hugo'
description = 'Panduan lengkap untuk membuat situs web Hugo pertama Anda'
tags = ['hugo', 'tutorial', 'pengembangan-web']
categories = ['tutorial']
+++

Hugo adalah generator situs statis yang cepat dan modern ditulis dengan Go. Ini sangat cocok untuk membuat blog, portofolio, dan situs dokumentasi.

## Mengapa Hugo?

Hugo menawarkan beberapa keuntungan:

- Waktu build yang sangat cepat
- Struktur konten yang sederhana
- Ekosistem tema yang kaya
- Optimasi bawaan

## Instalasi

Anda dapat menginstal Hugo menggunakan berbagai pengelola paket:

```bash
# Menggunakan Homebrew (macOS)
brew install hugo

# Menggunakan Chocolatey (Windows)
choco install hugo-extended

# Menggunakan Snap (Linux)
snap install hugo
```

## Membuat Situs Pertama Anda

```bash
# Buat situs baru
hugo new site blog-saya

# Tambahkan tema
cd blog-saya
git init
git submodule add https://github.com/joeroe/risotto themes/risotto

# Buat postingan pertama
hugo new posts/postingan-pertama.md
```

Mulai membuat situs web yang luar biasa dengan Hugo!
