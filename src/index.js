const express = require("express");
const { simpanganRataTunggal } = require("../statistika/pd/penyebaranData");
const app = express();
const port = 3000;

app.get("/api/simpangan-rata-tunggal", (req, res) => {
  try {
    const { data } = req.query;
    const dataMentah = data.split(",").map((i) => parseInt(i));
    const notNumber = !dataMentah.every((i) => isNaN(i) === false);
    if (notNumber) {
      throw new Error("tipe data error");
    }
    return res.json(simpanganRataTunggal(dataMentah)).status(200);
  } catch (e) {
    return res
      .json({
        error: e.message,
      })
      .status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
