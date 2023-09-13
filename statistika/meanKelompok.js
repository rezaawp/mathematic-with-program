/**
 * 2. MEAN DATA KELOMPOK
 */

/*
Contoh : Hitnglah rata rata data pada tabel di bawah ini
┌─────────┬─────────┬───────────┐
│ (index) │  nilai  │ frekuensi │
├─────────┼─────────┼───────────┤
│    0    │ '10-14' │     4     │
│    1    │ '15-19' │     8     │
│    2    │ '20-24' │     5     │
│    3    │ '25-29' │     6     │
│    4    │ '30-34' │     4     │
│    5    │ '35-39' │     3     │
└─────────┴─────────┴───────────┘
*/

/**
 * RUMUS METODE BIASA
 * xi = nilai tengah kelas ke i
 * xi = (Bb + Ba) / 2
 * Rumus : sum fixi / sum fi
 */

/**
 * Data nilai dibawah ini harus sesuai dengan format penulisan seperti dibawah !
 * Contoh benar salah satu data nilai :
 * @example 100-103 atau 91-95
 * Contoh salah :
 * @example 100 - 103
 */

const data = [
  { nilai: "10-14", frekuensi: 4 },
  { nilai: "15-19", frekuensi: 8 },
  { nilai: "20-24", frekuensi: 5 },
  { nilai: "25-29", frekuensi: 6 },
  { nilai: "30-34", frekuensi: 4 },
  { nilai: "35-39", frekuensi: 3 },
];

let sumfixi = 0;
let sumfi = 0;
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  const kelas = element.nilai.split("-");
  const batasBawah = parseInt(kelas[0]);
  const batasAtas = parseInt(kelas[1]);
  element["xi"] = (batasBawah + batasAtas) / 2;
  element["fixi"] = element.frekuensi * element["xi"];
  sumfixi += element["fixi"];
  sumfi += element.frekuensi;
}

const hasilMetodeBiasa = sumfixi / sumfi;
console.table(data);

console.log("HASIL MENGGUNAKAN METODE BIASA = ", hasilMetodeBiasa);

/**
 * Menggunakan metode pengkodean
 * @see login as a rezaaawp@gmail.com {https://file.notion.so/f/s/c1e50ede-f149-4aa3-8ee2-04315b006b8f/Screenshot_20230801-154418.png?id=c6a9cac9-d148-4cd1-803e-9f049ce3560f&table=block&spaceId=a812de81-f628-4821-8dd9-4801d0a8d035&expirationTimestamp=1691193600000&signature=SkLcC3Ipxwai6G7y1RWF1Cot_FSMTnBMA089Nk4JsWw&downloadName=Screenshot_20230801-154418.png}
 */
