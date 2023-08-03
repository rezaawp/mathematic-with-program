const _ = require("lodash");

// quartil data tunggal :

const isEven = require("../utils/isEven");

const dataMentah = [10, 15, 15, 15, 20, 25, 30, 45, 50, 55, 57, 60, 80];

const data = dataMentah.sort((a, b) => a - b);

const dataCount = data.length;

// jika data tunggal nya adalah ganjil
let q2;
let iq2;
let potongan1;
let potongan2;
let q1;

if (!isEven(dataCount)) {
  iq2 = Math.round(dataCount / 2) - 1;
  q2 = data[iq2];
  potongan1 = data.slice(0, iq2);
  potongan2 = data.slice(iq2 + 1);

  if (isEven(potongan1.length)) {
    const i1 = potongan1.length / 2 - 1; // irisan 1
    const i2 = i1 + 2; // irisan 2
    q1 = potongan1.slice(i1, i2);
    q1 = _.sum(q1) / 2;
  }

  if (isEven(potongan2.length)) {
    console.log("masuk");
  }
}

console.log("q1 = ", q1);
