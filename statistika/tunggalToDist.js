/* 
    ALGORITMA : 
    1. TENTUKAN JANKAUAN (J) : 
        J = Data terbesar - data terkecil
    2. TENTUKAN BANYAK KELAS INTERVAL (K) :
        K = 1 + 3,3 log10 n
    3. TENTUKAN PANJANG KELAS (P) : 
        P = J / K
*/
const data = [
  58, 53, 56, 64, 50, 50, 55, 57, 56, 56, 71, 72, 50, 77, 83, 80, 88, 43, 60,
  68, 70, 71, 60, 55, 42, 58, 83, 92, 95, 47, 51, 82, 70, 57, 67, 82, 55, 69,
  72, 65,
]; // data ini ibaratkan data berat badan siswa

// menyortir data
const sort = data.sort((a, b) => a - b);

const dataTerbesar = sort[sort.length - 1];
const dataTerkecil = sort[0];
// data terbesar - data terkecil
const jankauan = dataTerbesar - dataTerkecil;

// 1 + 3,3 * log10 n
const banyakKelas = Math.round(1 + 3.3 * Math.log10(sort.length));

const panjangSetiapKelas = Math.round(jankauan / banyakKelas) - 1;

const batasBawah = [];
for (let i = 0; i < panjangSetiapKelas; i++) {
  if (i === 0) {
    batasBawah.push(dataTerkecil);
    console.log();
  } else if (batasBawah[i - 1]) {
    batasBawah.push(batasBawah[i - 1] + 1 + panjangSetiapKelas);
  } else {
    batasBawah.push(dataTerkecil + panjangSetiapKelas);
  }
}

const batasBawahAkhir = [];
for (const i of batasBawah) {
  if (i < dataTerbesar) batasBawahAkhir.push(i);
}

const batasAtasAkhir = [];
for (const i of batasBawahAkhir) {
  batasAtasAkhir.push(i + panjangSetiapKelas);
}

if (
  batasAtasAkhir.length !== banyakKelas &&
  batasBawahAkhir.length !== banyakKelas
) {
  //   console.log("salah nih = ", banyakKelas);
  //   console.log("batasAtas = ", batasAtasAkhir.length);
  //   console.log("batasBawahAkhir = ", batasBawahAkhir.length);
}
const result = [];

for (let i = 0; i < batasBawahAkhir.length; i++) {
  const batasBawah = batasBawahAkhir[i];
  const batasAtas = batasAtasAkhir[i];
  const data = [];
  for (const j of sort) {
    if (j >= batasBawah && j <= batasAtas) {
      data.push(j);
    }
  }
  const frekuensi = data.length;

  result[i] = { nilai: `${batasBawah}-${batasAtas}`, frekuensi };
}

console.table(result);
// console.log(result);
