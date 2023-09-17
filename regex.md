# Regex If Example

## Case 1

```regex
^08(56|96)-(08(?=96)|7216|08(?=56)|8999).*$
```

>jika 0856 maka prefix = 7217 (08(?=96)|7216

_contoh data :_

```txt
0856-3122-9000
0856-8999-9000
0896-7216-8998
0896-1233-1238
```

## Case 2

```regex
1(?(?=[abc])a|2)
```

>jika karakter sekarang a/b/c maka regex nya adalah a, jika nilai nya bukan a/b/c maka regex nya 2

## Case 3

Check params url

```regex
(userId|role|type)=(userId(?=)|\d|role(?=)|(creator|writer)|type(?=)|(get|post|put|delete))
```

_contoh data :_

```txt
https://domain.com?userId=1&role=creator
https://example.com?role=writer&type=get
https://lorem.com?role=editor&type=post
```

## Case 4

```regex
^(1|2)((1(?=2)|2E(F|Z)|(1(?=3)|3E(X|Y)|))|(2(?=5)|5G(G|H)|(2(?=3)|3E(A|B)|(2(?=5)|E(F|Z)|))))(G|E)A$
```

_contoh data :_

```txt
12EFGA
13EFGA
13EXGA
13EYGA
13EZGA
15EFGX
23EAGZ
25GGEA
25GGEX
```

>JIKA = setelah nilai 1 adalah 2, maka regex nya adalah 2 diikuti oleh E, dan setelah nya F atau Z <br>
>JIKA = setelah nilai 1 adalah 3, maka regex nya adalah 3 diikuti oleh E, dan setelah nya X atau Y <br>
>JIKA = setelah nilai 2 adalah 5, maka regex nya adalah 5 diikuti oleh E, dan setelah nya X atau Y <br>
>JIKA = setelah nilai 2 adalah 3, maka regex nya adalah 3 diikuti oleh E, dan setelah nya A atau B <br>
><br>
>lalu pada regex terakhir diikuti (G atau A) dan A adalah karakter terakhir
