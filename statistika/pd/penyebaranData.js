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
const simpanganRataTunggal = (data, type = "populasi") => {
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

    const n = type === "sampel" ? data.length - 1 : data.length;
    const simpanganRata = totalNilaiMutlak / n;
    varians = totalXMinR / n;
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
const simpanganBakuTunggal = (data, type = "populasi") => {
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

    const nilaiN = type === "sampel" ? data.length - 1 : data.length;
    // const nilaiN = data.length;
    let result = totalNilaiKuadrat / nilaiN;
    const resultSebelumAkarDari = result;
    result = Math.sqrt(result);

    return {
      totalNilai,
      totalNilaiKuadrat,
      result,
      nilaiN,
      resultSebelumAkarDari,
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const data = [32, 35, 33, 32, 35, 36, 34, 35];
console.log("Simpangan rata", simpanganRataTunggal(data));
console.log("Simpangan baku", simpanganBakuTunggal(data));
console.log("median = ", pecahTunggal(data, 5, 10));
console.log("p 25 = ", pecahTunggal(data, 25, 100));

module.exports = {
  simpanganBakuTunggal,
  simpanganRataTunggal,
};
