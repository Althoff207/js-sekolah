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

//

//inheritance

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} sedang makan.`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, color) {
//         super(name);
//         this.color = color;
//     }
//     meow() {
//         console.log(`${this.name}  si ${this.color} mengeong.`);
//     }
// }

// const kucing = new Cat("Ewo", "Putih");
// kucing.eat();
// kucing.meow();

// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
//   budak() {
//     console.log(`${this.name} posisinya ${this.position} gaji ${this.salary}`);
//   }
// }

// class Manager extends Employee {
//   constructor(name, position, salary, department) {
//     super(name, position, salary);
//     this.department = department;
//   }
//   lead() {
//     console.log(`${this.name} memimpin departemen ${this.department}.`);
//   }
// }

// const employee = new Employee("Franz", "Budak", "seribu");
// const manager = new Manager("Rasyah", "kesehatan", "satu juta", "produksi");
// employee.budak();
// manager.lead();

// class Animal {
//   speak() {
//     console.log("Hewan bersuara...");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Meong~");
//   }
// }

// const c = new Cat();
// c.speak();

// class BankAccouunt {
//   constructor() {
//     this._balance = 0;
//   }

//   deposit(amount) {
//     this._balance += amount;
//   }

//   showBalance() {
//     console.log(`Saldo saat ini: Rp${this._balance}`);
//   }
// }

// const akun = new BankAccouunt();
// akun.deposit(500000);
// akun.showBalance();

// akun._balance = 9999999;
// akun.showBalance();

// class SecureAccount {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   showBalance() {
//     console.log(`Saldo aman: Rp${this.#balance}`);
//   }
// }

// const akun = new SecureAccount();
// akun.deposit(500);
// // akun.#balance = 9999;
// akun.showBalance();

// class Wallet {
//   #pin = 1234;

//   getPin() {
//     return this.#pin;
//   }
// }

// const dompet = new Wallet();
// console.log(dompet.getPin());

// class Message {
//   send() {
//     console.log("mengirim pesan umum");
//   }
// }

// class Email extends Message {
//   send() {
//     console.log("mengirim email ke pengguna");
//   }
// }

// class SMS extends Message {
//   send() {
//     console.log("mengirim sms ke nomor penerima");
//   }
// }

// const m2 = new Message();
// const m3 = new Email();
// const m4 = new SMS();
// m2.send();
// m3.send();
// m4.send();

class User {
    #password;
    constructor(password) {
        this.#password = password;
    }

    checkPassword(input) {
        if (input === this.#password) {
            console.log("benar");
        } else {
            console.log("salah");
        }
    }
}


const user = new User("rahasia");
user.checkPassword("rahasia");
