const _ = require("lodash");

/**
 * 1. MEAN DATA TUNGGAL
 */

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

/**
 * Rumus : 
 * @see login as a rezaaawp@gmail.com  {@link https://file.notion.so/f/s/6f770b0a-7bed-4afe-ac3a-d9b810e03c7c/Screenshot_20230801-152435.png?id=98c1f5a7-2550-4d94-b87f-b2ba0f4576ff&table=block&spaceId=a812de81-f628-4821-8dd9-4801d0a8d035&expirationTimestamp=1691193600000&signature=4ftf05X5-R_jZw-8kXW2EWhYvsCI5Nn6Cs6SC24QSkQ&downloadName=Screenshot_20230801-152435.png}
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
