# list employee/menampilkan data keseluruhan
GET
http://192.168.102.117/employee

# menambah employee
POST
http://192.168.102.117/employee
```
komponen yg diperlukan
    "name" : "",
    "age" : , (number)
    "address" : "",
    "transport" : "",
    "isMarried" : (boolean)
```

# merubah data employee
PUT
http://192.168.102.117/employee/7
(angka menunjukan barisan data yg ingin di ubah)
```
komponen yg diperlukan
    "name" : "",
    "age" : , (number)
    "address" : "",
    "transport" : "",
    "isMarried" : (boolean)
```

# menghapus data employee
DELETE
http://192.168.102.117/employee/8   (angka menunjukan barisan data yg ingin di hapus)


