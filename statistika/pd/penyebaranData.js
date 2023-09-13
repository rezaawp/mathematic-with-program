const {
  nilaiTengahPemecahanData: pecahKelompok,
} = require("../nilaiTengahPemecahanDataKelompok");

const {
  nilaiTengahPemecahanData: pecahTunggal,
} = require("../nilaiTengahPemecahanData");

const sort = require("./../../utils/sort");
const average = require("./../../utils/average");
const _ = require("lodash");

// simpangan rata rata data tunggal
const dataMentah = [7.5, 8.2, 7.8, 4.9, -13.7, 4.8, 3.5, 3.2];

// https://www.quipper.com/id/blog/mapel/matematika/simpangan-rata-rata/
// https://lmsspada.kemdikbud.go.id/pluginfile.php/538641/mod_imscp/intro/BAB%204%20penyebaran%20data.pdf
const simpanganRataTunggal = (data) => {
  try {
    data = sort(data);
    const rataRata = parseFloat(average(data).toFixed(1));
    totalNilaiMutlak = 0;
    totalXMinR = 0; // hasil dari (x - rata) * (x - rata)
    let varians;
    for (const x of data) {
      const xMinR = x - rataRata;
      const mutlak = Math.abs(xMinR); // abs adalah nilai mutlak
      totalNilaiMutlak += mutlak;
      totalXMinR += xMinR * xMinR;
    }

    totalXMinR = parseFloat(totalXMinR.toFixed(2));

    const n = data.length;
    const simpanganRata = totalNilaiMutlak / n;
    varians = totalXMinR / (n - 1);
    varians = parseFloat(varians.toFixed(2));
    return { simpanganRata, varians, rataRata, totalNilaiMutlak };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const simpanganRataKelompok = () => {
  try {
  } catch (e) {}
};

// sample data : [1,2,3,4,5,6]
const simpanganBakuTunggal = (data) => {
  try {
    data = sort(data);
    const rataRata = average(data);

    let totalNilai = 0; // total nilai dari Xi - rata rata
    let totalNilaiKuadrat = 0; // total nilai dari (Xi - rata rata) * (Xi - rata rata)

    // sum dari kolom ketika (gatau gua nyebutnya apa sum(Xi - rata))
    for (const x of data) {
      const xMinR = x - rataRata;
      totalNilai += xMinR;
      totalNilaiKuadrat += xMinR * xMinR;
    }

    const nilaiN = data.length <= 30 ? data.length - 1 : data.length;
    let result = totalNilaiKuadrat / nilaiN;
    result = Math.sqrt(result);

    return { totalNilai, totalNilaiKuadrat, result, nilaiN };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

// console.log(simpanganRataTunggal(dataMentah));
// console.log(simpanganBakuTunggal([8, 7, 10, 11, 4]));

module.exports = {
  simpanganBakuTunggal,
  simpanganRataTunggal,
};
