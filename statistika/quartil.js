const _ = require("lodash");

// quartil data tunggal :

const isEven = require("../utils/isEven");

const dataMentah = [
  10, 15, 15, 15, 20, 25, 30, 45, 50, 55, 57, 60, 80, 89, 60, 34, 12, 12, 1, 1,
  1, 1,
];

const data = dataMentah.sort((a, b) => a - b);

const dataCount = data.length;

// jika data tunggal nya adalah ganjil
let q1;
let q2;
let q3;
let iq2;
let iq1;
let iq3;
let potongan1;
let potongan2;

if (!isEven(dataCount)) {
  iq2 = Math.round(dataCount / 2) - 1;
  q2 = data[iq2];
  potongan1 = data.slice(0, iq2);
  potongan2 = data.slice(iq2 + 1);

  if (isEven(potongan1.length)) {
    // to be a specific
    const i1 = potongan1.length / 2 - 1; // irisan 1
    const i2 = i1 + 2; // irisan 2
    q1 = potongan1.slice(i1, i2);
    q1 = _.sum(q1) / 2;
  }

  if (isEven(potongan2.length)) {
    // to be a specific
    const i1 = potongan2.length / 2 - 1; // irisan 1
    const i2 = i1 + 2; // irisan 2
    q3 = potongan2.slice(i1, i2);
    q3 = _.sum(q3) / 2;
  }
} else {
  iq2 = Math.round(dataCount / 2) - 1;
  q2 = (data[iq2] + data[iq2 + 1]) / 2;
  potongan1 = data.slice(0, iq2);
  potongan2 = data.slice(iq2 + 2);

  iq1 = Math.round(potongan1.length / 2) - 1;
  q1 = (potongan1[iq1] + potongan1[iq1 + 1]) / 2;

  iq3 = Math.round(potongan2.length / 2) - 1;
  q3 = (potongan2[iq1] + potongan2[iq1 + 1]) / 2;
}

console.log("q1 tunggal = ", q1);
console.log("q2 tunggal = ", q2);
console.log("q3 tunggal = ", q3);

// Kuartil data kelompok
