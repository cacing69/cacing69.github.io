# Laravel Notes

Ini adalah rangkuman catatan random laravel yangn ditemukan dari beberapa website hasil gooling

## 1. DB::statement()

Jika kamu ingin menjalan _query_ sql tanpa memperdulikan hasil/*output*nya, seperti *insert*, *update* tanpa memerlukan parameter, kamu bisa menggunakan **DB::statement**.

Dari apa yang sudah kucoba, itu sangat berguna pada saat menggunakannya di _migrations_, seperti, ketika ada perubahan pada struktur table. Contoh :

```php
DB::statement('UPDATE users SET role_id = 1 WHERE role_id IS NULL AND YEAR(created_at) > 2020');
```

dan juga *DB::statement()* bisa menjalankan query _schema_

```php
DB::statement('DROP TABLE users');
DB::statement('ALTER TABLE projects AUTO_INCREMENT=123');
```

## 2. Mengkalkulasikan 1 kolom dengan sub-query: selectRaw()

Jika kamu ingin mendapatkan hasil spesifik dari kolom hasil kalkulasi, seperti ini contohnya

```php
$products = Product::select('id', 'name')
    ->selectRaw('price - discount_price AS discount')
    ->get();
```

dan contoh lain menggunakan - **CASE** _statement_ dari SQL

```php
$users = DB::table('users')
    ->select('name', 'surname')
    ->selectRaw("(CASE WHEN (gender = 1) THEN 'M' ELSE 'F' END) as gender_text")
    ->get();
```
