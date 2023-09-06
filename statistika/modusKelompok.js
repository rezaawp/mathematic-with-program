const _ = require("lodash");

const dataKelompok = [
  { nilai: "30-32", frekuensi: 4 },
  { nilai: "33-35", frekuensi: 5 },
  { nilai: "36-38", frekuensi: 7 },
  { nilai: "39-41", frekuensi: 10 },
  { nilai: "42-44", frekuensi: 8 },
  { nilai: "45-47", frekuensi: 6 },
];

// variabel yang dibtuhkan untuk menghitung desil :
// tb, d1, d2, p

let p;
let tb;
let d1;
let d2;
let maxFrek; // kelas modus
let indexMaxFrek;

[batasBawah, batasAtas] = dataKelompok[0].nilai.split("-");
batasAtas = parseInt(batasAtas);
batasBawah = parseInt(batasBawah);
p = batasAtas - batasBawah + 1;

maxFrek = _.maxBy(dataKelompok, "frekuensi");

indexMaxFrek = dataKelompok.findIndex((item) => item.nilai === maxFrek.nilai);
[batasBawah, batasAtas] = maxFrek.nilai.split("-");
batasAtas = parseInt(batasAtas);
batasBawah = parseInt(batasBawah);
tb = batasBawah - 0.5;
d1 =
  dataKelompok[indexMaxFrek].frekuensi -
  dataKelompok[indexMaxFrek - 1].frekuensi;

d2 =
  dataKelompok[indexMaxFrek].frekuensi -
  dataKelompok[indexMaxFrek + 1].frekuensi;

console.log({ tb, d1, d2, p });

// rumus : tb + (d1 / (d1 + d2)) * p
const hasil = tb + (d1 / (d1 + d2)) * p;
console.log(hasil);
