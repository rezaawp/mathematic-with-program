const _ = require("lodash");

// const dataMentah = [32, 35, 33, 32, 35, 36, 34, 35];

// console.log({ pDataMentah: dataMentah.length });

function nilaiTengahPemecahanData(dataMentah, i, bagi) {
  const n = dataMentah.length;

  dataMentah.sort((a, b) => a - b);

  let result = (i * (n + 1)) / bagi;
  result = parseFloat(result.toFixed(2));

  const angkaSetelahKoma = result % 1;

  const indexData = Math.floor(result) - 1; // dibutuhkan jika data genap
  const Xiplus1 = dataMentah[indexData + 1];
  const X = dataMentah[indexData];

  const hasilDataGenap = () => {
    try {
      return X + angkaSetelahKoma * (Xiplus1 - X);
    } catch (e) {
      console.log("Ada error nich = ", e);
    }
  };

  return n % 2 !== 0 ? result : hasilDataGenap();
}

// const test = nilaiTengahPemecahanData;
// console.log("Quartil dari 3 : ", test(3, 4));
// console.log("Quartil dari 1 : ", test(1, 4));
// console.log("Desil dari 9 : ", test(9, 10));
// console.log("Persentil dari 50", test(50, 100));

module.exports = { nilaiTengahPemecahanData };
