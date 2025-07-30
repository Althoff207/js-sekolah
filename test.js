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

// let bike = {
//     name: "PINARELLO",
//     model: "Dogma F",
//     gear: "12",
//     color: "Midnight Blue",

//     start: function() {
//         console.log("Sepeda mulai dikayuh")
//     },
//     brake: function() {
//         console.log("Sepeda mengerem")
//     }
// }

// console.log(bike.name);
// console.log(bike.model);
// console.log(bike.gear);
// console.log(bike.color);

// bike.start();
// bike.brake();

// function Car(name, model, color, weight) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.weight = weight;
    
//     this.start = function() {
//         console.log(`${this.name} dinyalakan.`);
//     };
//     this.drive = function() {
//         console.log(`${this.name} sedang berjalan.`);
//     };
// }

// let car1 = new Car("White", 2024, "Black and Blue", "500kg");
// let car2 = new Car("Ferara", 2024, "Black", "500kg");

// car1.start();
// car2.drive();

// function Bike(name, model, color, weight) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.weight = weight;
    
//     this.start = function() {
//         console.log(`${this.name} sepeda dikayuh.`);
//     };
//     this.brake = function() {
//         console.log(`${this.name} sepeda mengerem.`);
//     };
// }

// let bike1 = new Bike("Pinarello", 2024, "Black and White", "7.5kg");

// bike1.start();
// bike1.brake();

// class Car {
//     constructor(name, model, color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} dinyalakan.`)
//     }

//     drive() {
//         console.log(`${this.name} berjalan.`)
//     }
// }


// let car1 = new Car("White Ferarri", 2021, "White");
// car1.start();

// class Bike {
//     constructor(name, model, color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }

//     start() {
//         console.log(`${this.name} dikayuh.`)
//     }

//     brake() {
//         console.log(`${this.name} mengerem.`)
//     }
// }


// let bike1 = new Bike("Cervello S5", 2025, "Red");
// bike1.start();

class Student {
    constructor(name, department, year) {
        this.name = name;
        this.department = department;
        this.year = year;
    }

    introduce() {
        console.log(`Halo saya ${this.name}, mahasiswa ${this.department} angkatan ${this.year}.`)
    }

    isSenior() {
        // let a = this.year;
        // let b = 2025;
        // let senior = a < b;

        // console.log(`${senior} Senior.`)
        return this.year < 2025;
    }
}


let student1 = new Student("Althoff", "Teknik Informatika", 2021);
student1.introduce();
console.log(student1.isSenior())
