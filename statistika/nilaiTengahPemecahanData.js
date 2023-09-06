const dataMentah = [5, 6, 6, 6, 7, 8, 8, 9, 10, 12, 11, 13];

console.log({ pDataMentah: dataMentah.length });

function nilaiTengahPemecahanData(i, bagi) {
  const n = dataMentah.length;

  dataMentah.sort((a, b) => a - b);

  const result = (i * (n + 1)) / bagi;

  const indexData = Math.floor(result) - 1; // jika data genap

  return n % 2 !== 0
    ? result
    : (dataMentah[indexData] + dataMentah[indexData + 1]) / 2;
}

const test = nilaiTengahPemecahanData;
console.log("Quartil dari 1 : ", test(1, 4));
console.log("Desil dari 9 : ", test(9, 10));
console.log("Persentil dari 50", test(50, 100));
