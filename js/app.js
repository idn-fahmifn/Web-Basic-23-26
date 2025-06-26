// kondisi
// if

let warna = prompt("Apa warna motornya?");

if (warna == "merah") {
  alert(`motor ${warna} itu motor saya`);
} else if (warna == "biru") {
  alert(`motor ${warna} itu milik toni`);
} else {
  alert("motor bukan punya saya");
}

let user = prompt("apa user akses anda?");
let login;

switch (user) {
  case "admin":
    login = "anda berhak login di dashboard admin";
    break;

  case "student":
    login = "Akses anda hanya sampai dashboard student";
    break;

  default:
    login = "Hak akses yang anda masukan salah atau tidak sesuai";
    break;
}
alert(`Hak akses anda adalah ${user}, ${login}`);








// let usia = prompt('Masukan umur anda');
// usia = Number(usia);

// if(usia >= 18){
//     alert(`usia anda ${usia}, sudah dewasa`);
// }
// else{
//     alert(`usia anda ${usia}, Belum dewasa`);
// }

// operator
// aritmatika = operasi matematika

let a = 1;
let b = 7;
let c = (a = b); //operator aritmatik

console.log(c);

// perbandingan
let nilai1 = "10";
let nilai2 = 10;

nilai1 = Number(nilai1);
let pembanding = nilai1 + nilai1;

let op = nilai2 == 5 ? console.log("sesuai") : console.log("salah");

console.log(typeof nilai1);
console.log(pembanding);

// tipe data non-primitif.

// object
// memiliki key kunci disetiap data.
let biodata = {
  nama: "Antoni",
  asal: "Kalideres",
  hobby: "Main FF",
  pendidikan: {
    tk: "TK Harapan",
    sd: "SDN 1 Jakarta",
    smp: "london ss",
  },
  tinggi_badan: 150,
  berat_badan: 60,
  sudah_menikah: true,
};
// almar = mobil (nama, jenis, warna, bahan_bakar, interior(kursi, audio, had unit, transmisi), tahun_produksi).
// tony = motor (nama, jenis, warna, bahan_bakar, fitur(rem, key_less, cc), tahun_produksi).
// anggi = handphone (nama, jenis, warna, fitur(layar, batrei, kamera), tahun_pembuatan).

// array
// isi datanya tidak ada key, tapi urutannya berdasarkan index (0)
let buah = ["mangga", "apel", "alpukat", "nanas"];

let mobil = ["avanza", "xpander", "ferari", "lamborgini"];

console.log(biodata.hobby);
console.log(buah[1]);
console.log(`saya punya mobil ${mobil[2]}`);

console.log(`hallo nama saya adalah : ${biodata.nama}`);
console.log(`Saat ini saya sekolah di : ${biodata.pendidikan.smp}`);

// tipe data primitif

// string
// string wajib menggunakan kutip
let belajar = "web basic";
let kata = `saya hari ini sedang belajar ${belajar}`;
let today = belajar;

// number
// number tidak perlu tanda kutip
let umur = 10;
let bb = 70.3;

// boolean
// tipe data yang isinya hanya true / false
// boolean tidak perlu menggunakan kutip

let nikah = false;
let makan = true;

// undifined
// gaperlu mengisi nilai.
let cadangan;

// null
// nilainya adalah kosong
let dompet = null;
let inves = ""; //string null berbeda dengan null

// typeof digunakan untuk melihat tipe data.
console.log(typeof nikah);

// mendefinisikan variable

let nama = "antoni";
let nickname = "toni";
const asal = "Jakarta";

nama = "agus";

// memanggil variable
console.log(
  "hallo, nama saya adalah " + nama + " saya biasa dipanggil" + nickname
); //nama saya antoni, saya biasa dipanggil toni.
console.log("saya berasal dari " + asal); //saya berasal dari jakarta

// template literal
console.log(
  `Hallo nama saya adalah ${nama}, saya biasa dipanggil ${nickname}, saya berasal dari ${asal}`
);

// console.log('saya sedang belajar javascript');
// alert('Hallo saya sedang belajar javascript');
// prompt('Berapa usia kamu?');
