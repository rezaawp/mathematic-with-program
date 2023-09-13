const _ = require("lodash");

const average = (data) => {
  const sum = _.sum(data);

  return sum / data.length;
};

module.exports = average;
