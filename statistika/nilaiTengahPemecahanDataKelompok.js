const _ = require("lodash");

// quartil data tunggal :

const isEven = require("../utils/isEven");

function nilaiTengahPemecahanData(dataKelompok, i, bagi = 4) {
  let panjangKelas;
  let TB;
  let kelas;
  let kelasSebelum; // FK KALO DI RUMUS BU CINDRA

  // Menambahkan frekuensi kumilatif
  for (let i = 0; i < dataKelompok.length; i++) {
    const element = dataKelompok[i];

    // mengambil patokan panjang kelas di data pertama aja
    if (i === 0)
      panjangKelas =
        parseInt(element.nilai.split("-")[1]) -
        parseInt(element.nilai.split("-")[0]) +
        1;

    if (i === 0) dataKelompok[i]["frekuensiKumlatif"] = element.frekuensi;
    else
      dataKelompok[i]["frekuensiKumlatif"] =
        dataKelompok[i - 1].frekuensiKumlatif + element.frekuensi;
  }

  // console.table(dataKelompok);

  const n = dataKelompok[dataKelompok.length - 1].frekuensiKumlatif;

  // menetukan kelas dari frekuensi kumlatif (patokan berdasarkan data kumlatif)
  const patokanFK = (i / bagi) * n;

  // proses pencarian kelas
  for (let i = 0; i < dataKelompok.length; i++) {
    const element = dataKelompok[i];

    if (!(element.frekuensiKumlatif < patokanFK) && !kelas) {
      kelas = element;
      TB = parseInt(kelas.nilai.split("-")[0]) - 0.5;
      kelasSebelum = dataKelompok[i - 1];
      if (kelasSebelum === undefined) {
        console.log(
          "penentuan nilai dengan sangat rendah. kami tidak menyarankan pemecahan data hingga ke " +
            bagi +
            ". hasil akan keluar, tapi mungkin tidak akan akurat."
        );
        kelasSebelum = element;
      }
      break;
    }
  }

  // Komentar dibawah ini adalah variabel yang dibutuhkan untuk penghitungan
  // console.log({ patokanFK, kelas, kelasSebelum, panjangKelas, TB });
  return (
    TB +
    ((patokanFK - kelasSebelum.frekuensiKumlatif) / kelas.frekuensi) *
      panjangKelas
  );
}

module.exports = { nilaiTengahPemecahanData };

// const test = nilaiTengahPemecahanData;

// const dataKelompok = [
//   { nilai: "30-32", frekuensi: 4 },
//   { nilai: "33-35", frekuensi: 5 },
//   { nilai: "36-38", frekuensi: 7 },
//   { nilai: "39-41", frekuensi: 10 },
//   { nilai: "42-44", frekuensi: 8 },
//   { nilai: "45-47", frekuensi: 6 },
// ];

// console.log("Desil ke 5 : ", test(dataKelompok, 5, 10));
// console.log("Quartil ke 2 : ", test(dataKelompok, 2, 4));
// console.log("Desil ke 8 : ", test(dataKelompok, 8, 10));
// console.log("Persentil ke 65 : ", test(dataKelompok, 65, 100));

// jika data mencari nilai qurtil -1 dan persentil kurang dari 10
// console.log("Quartil ke 2 : ", test(dataKelompok, 2, 4));
// console.log("Desil ke 5 : ", test(dataKelompok, 5, 10));
// console.log("Persentil ke 50 : ", test(dataKelompok, 50, 100));
// console.log("Persentil dari 10 : ", test(dataKelompok, 80, 100));
