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

// class User {
//     #password;
//     constructor(password) {
//         this.#password = password;
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("benar");
//         } else {
//             console.log("salah");
//         }
//     }
// }


// const user = new User("rahasia");
// user.checkPassword("rahasia");

// latihan

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     info() {
//         console.log(`${this.title} oleh ${this.author}`);
//     }
// }

// class Ebook extends Book {
//     // #filesize = 0;

//     constructor(title, author, fileSize) {
//         super(title, author);
//         this.fileSize = fileSize;
//     }

//     info() {
//         console.log(`${this.title} oleh ${this.author}, ukuran file: ${this.fileSize} MB`);
//     }
// }

// const buku = new Book("Filosoi Teras", "Henry Manampiring");
// buku.info();

// const ebook = new Ebook("Atomic Habits", "James Clear", "2");
// ebook.info();

// class HotelRoom {
//     #isBooked = false;

//     bookRoom() {
//         this.#isBooked = true;
//     }

//     checkStatus() {
//         console.log(`${this.#isBooked ? "Kamar sudah dipesan." : "Kamar tersedia."}`);
//     }
// }

// const room = new HotelRoom();
// room.checkStatus();
// room.bookRoom();
// room.checkStatus();

// class Product {
//     constructor(name) {
//         this.name = name;
//     }
//     display() {
//         console.log(`${this.name} ini adalah produk yang berkualitas.`);
//     }
// }

// class Clothing extends Product {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }

//     display() {
//         console.log(`Produk: ${this.name}, Ukuran: ${this.size}`);
//     }
// }

// const product = new Product("Sepatu");
// product.display();

// const shirt = new Clothing("Kaos", "L");
// shirt.display();

// class Ticket {
//     constructor(event, price) {
//         this.event = event;
//         this.price = price;
//     }

//     printTicket() {
//         console.log(`Tiket untuk acara ${this.event} seharga Rp${this.price}`);
//     }
// }

// class VIPTicket extends Ticket {
//     printTicket() {
//         console.log(`Tiket untuk acara ${this.event} seharga Rp${this.price} (VIP)`);
//     }
// }

// const regularTicket = new Ticket("Konser Musik", 100000);
// const vipTicket = new VIPTicket("Konser Musik", 500000);

// if (regularTicket.price > 100000) {
//     // Tiket VIP
//     new VIPTicket(regularTicket.event, regularTicket.price).printTicket();
// } else {
//     // Tiket biasa
//     regularTicket.printTicket();
// }

// if (vipTicket.price > 100000) {
//     vipTicket.printTicket();
// } else {
//     new Ticket(vipTicket.event, vipTicket.price).printTicket();
// }

// class Animal {
//     #energy = 0; 

//     getEnergy() {
//         return this.#energy;
//     }

//     eat(amount) {
//         this.#energy += amount;
//         if (this.#energy > 100) this.#energy = 100;
//         console.log(`Energi setelah makan: ${this.#energy}`);
//     }

//     sleep(time) {
//         this.#energy += time * 2;
//         if (this.#energy > 100) this.#energy = 100;
//         console.log(`Energi setelah tidur: ${this.#energy}`);
//     }
// }

// class Dog extends Animal {
//     eat(amount) {
//         super.eat(amount * 2);
//     }
// }

// // Contoh penggunaan:
// const dog = new Dog();
// dog.eat(10);
// dog.sleep(50);
// console.log("Energi sekarang:", dog.getEnergy());

// class Account {
//     #balance = 0;

//     getBalance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && this.#balance - amount >= 0) {
//             this.#balance -= amount;
//         } else {
//             console.log("Penarikan ditolak: saldo tidak cukup.");
//         }
//     }
// }

// class SavingsAccount extends Account {
//     withdraw(amount) {
//         const maxWithdraw = this.getBalance() * 0.5;
//         if (amount > maxWithdraw) {
//             console.log("Penarikan ditolak: tidak boleh lebih dari 50% saldo.");
//         } else {
//             super.withdraw(amount);
//         }
//     }
// }

// // Contoh penggunaan:
// const acc = new Account();
// acc.deposit(1000);
// acc.withdraw(300);
// console.log("Saldo Account:", acc.getBalance());

// const saving = new SavingsAccount();
// saving.deposit(1000);
// saving.withdraw(100);
// saving.withdraw(400);
// console.log("Saldo SavingsAccount:", saving.getBalance());

//  class Vehicle {
//     #speed = 0

//     accelerate(amount) {
//         this.#speed = Math.min(180, this.#speed + amount)
//     }

//     brake(amount) {
//         this.#speed = Math.max(0, this.#speed - amount)
//     }

//     getSpeed() {
//         return this.#speed
//     }
// }

// class Car extends Vehicle {
//     accelerate(amount) {
//         console.log("Car accelerating")
//         super.accelerate(amount)
//     }
// }

// const myCar = new Car()
// myCar.accelerate(50)
// console.log(`Kecepatan: ${myCar.getSpeed()} km/jam`)
// myCar.brake(20)
// console.log(`Kecepatan: ${myCar.getSpeed()} km/jam`)

// class Employee {
//     #workingHours = 0

//     logHours(hours) {
//         this.#workingHours += hours
//         console.log(`Total jam kerja: ${this.#workingHours}`)
//     }

//     getHours() {
//         return this.#workingHours
//     }
// }

// class RemoteEmployee extends Employee {
//     logHours(hours) {
//         if (hours > 8) {
//             console.log("Exceeded daily work limit")
//         } else {
//             super.logHours(hours)
//         }
//     }
// }

// const emp1 = new RemoteEmployee()
// emp1.logHours(1)
// emp1.logHours(9)

// class Airplane {
//     #altitude = 0

//     ascend(meters) {
//         this.#altitude = Math.min(12000, this.#altitude + meters)
//     }

//     descend(meters) {
//         this.#altitude = Math.max(0, this.#altitude - meters)
//     }

//     getAltitude() {
//         return this.#altitude
//     }
// }

// class Jet extends Airplane {
//     ascend(meters) {
//         super.ascend(meters * 2)
//     }
// }

// const jet1 = new Jet()
// jet1.ascend(2000)
// console.log(`Ketinggian: ${jet1.getAltitude()} meter`)
// jet1.descend(500)
// console.log(`Ketinggian: ${jet1.getAltitude()} meter`)

//Part 10
// class ParkingSpot {
//     #isOccupied = false

//     occupy() {
//         if (!this.#isOccupied) {
//             this.#isOccupied = true
//             console.log("Spot occupied")
//         } else {
//             console.log("Spot already occupied")
//         }
//     }

//     vacate() {
//         if (this.#isOccupied) {
//             this.#isOccupied = false
//             console.log("Spot vacated")
//         } else {
//             console.log("Spot is already empty")
//         }
//     }
// }

// class ElectricParkingSpot extends ParkingSpot {
//     occupy(isElectric) {
//         if (!isElectric) {
//             console.log("Only electric cars allowed")
//         } else {
//             super.occupy()
//         }
//     }
// }

// const spot1 = new ElectricParkingSpot()
// spot1.occupy(false)
// spot1.occupy(true)
// spot1.vacate()

//Part 11
// class User {
//     #password

//     constructor(password) {
//         this.#password = password
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Benar")
//         } else {
//             console.log("Salah")
//         }
//     }
// }

// const user1 = new User("rahasia123")
// user1.checkPassword("rahasia123")
// user1.checkPassword("password")

//Part 12
// class Vehicle {
//     move() {
//         console.log("Kendaraan bergerak")
//     }
// }

// class Car extends Vehicle {
//     move() {
//         console.log("Mobil berjalan di jalan raya")
//     }
// }

// class Boat extends Vehicle {
//     move() {
//         console.log("Perahu berlayar di laut")
//     }
// }

// const v = new Vehicle()
// const c = new Car()
// const b = new Boat()

// v.move()
// c.move()
// b.move()

//Part 13
// class Order {
//     #status = "Pending"

//     get status() {
//         return this.#status
//     }

//     set status(newStatus) {
//         if (newStatus === "Delivered" || newStatus === "Cancelled") {
//             this.#status = newStatus
//         } else {
//             console.log("Status tidak valid")
//         }
//     }
// }

// const order1 = new Order()
// console.log(order1.status)

// order1.status = "Delivered"
// console.log(order1.status)

// order1.status = "Processing"
// console.log(order1.status)

//Part 14
// class Payment {
//     #amount

//     constructor(amount) {
//         this.#amount = amount
//     }

//     getAmount() {
//         return this.#amount
//     }

//     process() {
//         console.log(`Memproses pembayaran sebesar ${this.#amount}`)
//     }
// }

// class CreditCardPayment extends Payment {
//     process() {
//         console.log(`Memproses pembayaran kartu kredit sebesar ${this.getAmount()}`)
//     }
// }

// const pay1 = new Payment(500000)
// pay1.process()

// const pay2 = new CreditCardPayment(750000)
// pay2.process()

//Part 15
// class Account {
//     #balance = 0

//     constructor(balance = 0) {
//         this.#balance = balance
//     }

//     getBalance() {
//         return this.#balance
//     }

//     showBalance() {
//         console.log(`Saldo: ${this.#balance}`)
//     }
// }

// class PremiumAccount extends Account {
//     showBalance() {
//         console.log(`Saldo anda adalah: ${this.getBalance()} (Akun Premium)`)
//     }
// }

// const acc1 = new Account(500000)
// acc1.showBalance()

// const acc2 = new PremiumAccount(2000000)
// acc2.showBalance()