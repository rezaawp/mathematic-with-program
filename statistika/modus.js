const _ = require("lodash");

const dataMentah = [32, 35, 33, 32, 35, 36, 34, 35];

console.log(dataMentah.length);
dataMentah.sort((a, b) => a - b);

const [hasil, totalData] = _(dataMentah).countBy().toPairs().maxBy(_.last);

console.log({ hasil, totalData });
