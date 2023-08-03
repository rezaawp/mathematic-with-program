const _ = require("lodash");

/*
Contoh : Perhantikan data pada tabel berikut :
┌─────────┬───────┬──────────┐
│ (index) │ nilai │ frekunsi │
├─────────┼───────┼──────────┤
│    0    │   4   │    3     │
│    1    │   5   │    7     │
│    2    │   6   │    12    │
│    3    │   7   │    11    │
│    4    │   8   │    7     │
└─────────┴───────┴──────────┘
Nilai rataan pada tabel tersebut adalah ?
*/

const dataTunggal = [
  4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8,
];

const dataKelompok = [
  { nilai: 4, frekunsi: 3 },
  { nilai: 5, frekunsi: 7 },
  { nilai: 6, frekunsi: 12 },
  { nilai: 7, frekunsi: 11 },
  { nilai: 8, frekunsi: 7 },
];

const countByDataTunggal = _.countBy(dataTunggal);

/* menggunakan cara data tunggal */
const fixi = [];
const fi = [];

let sigmafx = 0;
let sigmaf = 0;

for (const key in countByDataTunggal) {
  const keyValue = parseInt(key);
  const value = countByDataTunggal[key];
  sigmafx += keyValue * value;
  fixi.push(keyValue * value);
  sigmaf += value;
  fi.push(value);
}

console.info("HASIL MENGGUNAKAN DATA TUNGGAL = ", sigmafx / sigmaf);

/* menggunakan data frekuensi */
let sigmafx2 = 0;
let sigmaf2 = 0;

for (let i = 0; i < dataKelompok.length; i++) {
  const element = dataKelompok[i];
  sigmafx2 += element.frekunsi * element.nilai;
  sigmaf2 += element.frekunsi;
}

console.info("HASIL MENGGUNAKAN DATA FREKUENSI = ", sigmafx2 / sigmaf2);
