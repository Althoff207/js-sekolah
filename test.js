// for (let i = 1; i <= 3; i++) {
//     console.log("Perulangan ke-" + i)
// }

// let shoes = ["Niks", "Adadis", "Pumh"];

// // console.log(shoes[0]);
// // console.log(shoes[2]);

// shoes[2] = "Maison Margiela";
// shoes.push("Firenze atelier");
// shoes.unshift("Haruta Alvin");

// shoes.pop(); //menghapus data dari belakang
// shoes.shift(); //menghapus data dari depan
// shoes.splice(1, 1); //meghapus 1 item dari indeks ke 1

// console.log(shoes);

//parameter
// function sapa(nama) {
//     console.log("halo, " + nama + "!");
// }

// sapa("Rahmat");
// sapa("Riyadi");

//return
// function tambah(a, b) {
//     return a + b;
// }

// let hasil = tambah(5, 3);
// console.log("Hasil: " + hasil);

// function LuasPersegi(sisi) {
//     return sisi * sisi;
// }

// let hasil = LuasPersegi(4)
// console.log("output: " + hasil)

//oop
// let car = {
//   //Object literal mobil
//   name: "Fiat",
//   model: 500,
//   weight: "850kg",
//   color: "white",

//   start: function () {
//     console.log("Mobil dinyalakan.");
//   },
//   drive: function () {
//     console.log("Mobil berjalan.");
//   },
//   brake: function () {
//     console.log("Mobil mengerem.");
//   },
//   stop: function () {
//     console.log("Mobil berhanti.");
//   },
// };

// console.log(car.name);
// console.log(car.color);

// car.start();
// car.drive();

let bike = {
    name: "PINARELLO",
    model: "Dogma F",
    gear: "12",
    color: "Midnight Blue",

    start: function() {
        console.log("Sepeda mulai dikayuh")
    },
    brake: function() {
        console.log("Sepeda mengerem")
    }
}

console.log(bike.name);
console.log(bike.model);
console.log(bike.gear);
console.log(bike.color);

bike.start();
bike.brake();