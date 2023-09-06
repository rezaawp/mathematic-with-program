const _ = require("lodash");

const dataMentah = [
  5, 6, 6, 6, 7, 8, 8, 8, 8, 8, 9, 10, 10, 10, 10, 10, 10, 12, 11, 13,
];

dataMentah.sort((a, b) => a - b);

const [hasil, totalData] = _(dataMentah).countBy().toPairs().maxBy(_.last);

console.log({ hasil, totalData });
