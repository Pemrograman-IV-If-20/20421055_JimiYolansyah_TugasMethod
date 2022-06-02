// var, let, const artinya variable kalo di php itu gini $mhs = "":
// var mhs = "jimi aja", kelas = 19
// var mhs = "variablenya ketimpah"

// let mhs = "jimi aja"
// let mhs = "akan error jika menggunakan let variable yg sama"

// const mhs = "jimi aja"
// const mhs = "akan error jika menggunakan const yg sama"

// console.log("hello kawan ", mhs) //, kelas)

//kalo di kasih "" maka jadi string, kalo gk di pakai jadinya intiger itulah kelebihan nodejs
// const a = 90
// const b = 30.5
// const c = a - b // - + * /

// console.log(c)

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// metode = method

//metode get pakai params :npm ini namanya in point
app.get('/data-mhs/:npm/:nama', function (req, res) { //harus /data-mhs/:npm/:nama untuk menggunakan param
    res.send({
        // npm : 20421055,
        // nama: "Jimi"

        // di link nya http://localhost:3000/data-mhs/20421055/jimi
        npm : req.params.npm,
        nama: req.params.nama
    })
  })

//metode get pakai query 
app.get('/data-mhs-query', function (req, res) { //harus /data-mhs/:npm/:nama untuk menggunakan param
    res.send({

        // http://localhost:3000/data-mhs-query?npm=20421055&nama=jimi
        npm : req.query.npm,
        nama: req.query.nama
    })
  })


//metode post pakai body dengan http testingnya palikasi Postman
// localhost:3000/data-mhs-body coba di postman
//klik new> collection> klik kanan foldernya rename> klik kanan add request
//rename new request yg di kanan jadi http request> ganti get jadi post
//klik body> x-www-urlencoded> key itu nama_variable nya npm value itu isinya>
// localhost:3000/data-mhs-body masukan link ini di samping post> send
//hasilnya lihat di bawah ada body> pretty
// di bawah post ada menu body> raw> paling kanan ada text ganti JSON>
// {
//     "npm" : "20421055",
//     "nama" : "jimi"
// }
// klik send
app.use(express.json())
app.use(express.urlencoded({
    extends: true
}))
app.post('/data-mhs-body', function (req, res) { //harus /data-mhs/:npm/:nama untuk menggunakan param
    res.send({

        // http://localhost:3000/data-mhs-query?npm=20421055&nama=jimi
        npm : req.body.npm,
        nama: req.body.nama
    })
  })



//   tugas di post ment pakai method post > body minimal 10 biodata
app.post('/data-mhs-tugas/:npm', function (req, res) { //harus /data-mhs/:npm/:nama untuk menggunakan param
    res.send({
        // http://localhost:3000/data-mhs-tugas/20421055?nama=jimi
        // di postman key alamat, tanggal_lahir vauenya bebas.
        npm : req.params.npm,
        nama: req.query.nama,
        prodi: req.body.prodi,
        alamat: req.body.alamat,
        tanggal_lahir: req.body.tanggal_lahir,
        golongan_darah:  req.body.golongan_darah,
        suku: req.body.suku,
        agama: req.body.agama,
        tinggi: req.body.tinggi,
        berat: req.body.berat
    })
  })
app.listen(3000)