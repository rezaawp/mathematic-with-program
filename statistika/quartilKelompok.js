/**
 * Data nilai dibawah ini harus sesuai dengan format penulisan seperti dibawah !
 * Contoh benar salah satu data nilai :
 * @example 100-103 atau 91-95
 * Contoh salah :
 * @example 100 - 103
 */

/**
 * Penghitungan quatil kelompok ini si khususkan untuk yang nilai frekuensi nya tidak ada desimal !
 */

const dataKelompok = [
  { nilai: "31-36", frekuensi: 6 },
  { nilai: "37-42", frekuensi: 4 },
  { nilai: "43-48", frekuensi: 9 },
  { nilai: "49-54", frekuensi: 14 },
  { nilai: "55-50", frekuensi: 10 },
  { nilai: "61-66", frekuensi: 2 },
  { nilai: "67-72", frekuensi: 5 },
];

let kelasQ1;
let kelasQ2;
let kelasQ3;
let Q1;
let Q2;
let Q3;
let TBq1;
let TBq2;
let TBq3;
let KelasSebelumKelasQ1;
let KelasSebelumKelasQ2;
let KelasSebelumKelasQ3;
let sumfi = 0;
let frekuensiKumalatif = 0;
let panjangKelas;

// menambahkan data menjadi frekuensi kumaltif
for (let i = 0; i < dataKelompok.length; i++) {
  const element = dataKelompok[i];
  if (i === 0) dataKelompok[i]["frekuensiKumlatif"] = element.frekuensi;
  else
    dataKelompok[i]["frekuensiKumlatif"] =
      dataKelompok[i - 1].frekuensiKumlatif + element.frekuensi;
}

console.table(dataKelompok);

sumfi = dataKelompok[dataKelompok.length - 1].frekuensiKumlatif;
// mencari posisi kelas berdasarkan frekuensi kumulatif
const patokanPosisiQ1 = (1 / 4) * sumfi;
const patokanPosisiQ2 = (2 / 4) * sumfi;
const patokanPosisiQ3 = (3 / 4) * sumfi;
console.log({ patokanPosisiQ1, patokanPosisiQ2, patokanPosisiQ3 });

for (let i = 0; i < dataKelompok.length; i++) {
  const element = dataKelompok[i];
  const kelas = element.nilai.split("-");

  if (!kelasQ1 && element.frekuensiKumlatif > patokanPosisiQ1) {
    kelasQ1 = dataKelompok[i];
    KelasSebelumKelasQ1 = dataKelompok[i - 1];
  }

  if (!kelasQ2 && element.frekuensiKumlatif > patokanPosisiQ2) {
    kelasQ2 = dataKelompok[i];
    KelasSebelumKelasQ2 = dataKelompok[i - 1];
  }

  if (!kelasQ3 && element.frekuensiKumlatif > patokanPosisiQ3) {
    kelasQ3 = dataKelompok[i];
    KelasSebelumKelasQ3 = dataKelompok[i - 1];
  }
}

/**
 * Mencari kuartil menggunakan rumus :
 * Q1 = Tb + (1/4 * n - fk-i / f2) * p
 * Q2 = Tb + (2/4 * n - fk-i / f2) * p
 * Q3 = Tb + (3/4 * n - fk-i / f2) * p
 *  */
panjangKelas =
  parseInt(kelasQ1.nilai.split("-")[1]) -
  parseInt(kelasQ1.nilai.split("-")[0]) +
  1;

Q1 =
  parseInt(kelasQ1.nilai.split("-")[0]) -
  0.5 +
  (((1 / 4) * sumfi - KelasSebelumKelasQ1.frekuensiKumlatif) /
    kelasQ1.frekuensi) *
    panjangKelas;

Q2 =
  parseInt(kelasQ2.nilai.split("-")[0]) -
  0.5 +
  (((2 / 4) * sumfi - KelasSebelumKelasQ2.frekuensiKumlatif) /
    kelasQ2.frekuensi) *
    panjangKelas;

Q3 =
  parseInt(kelasQ3.nilai.split("-")[0]) -
  0.5 +
  (((3 / 4) * sumfi - KelasSebelumKelasQ3.frekuensiKumlatif) /
    kelasQ3.frekuensi) *
    panjangKelas;
console.log({ Q1, Q2, Q3 });
console.log(panjangKelas);
