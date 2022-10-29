"use strict";
let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  fuel: 0,
  started: false,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      alert("Біп!");
      this.fuel = fiat.fuel - 1;
    } else {
      alert("Спочатку запустіть двигун!");
    }
    if (this.fuel == 0) {
      alert("Для подальшого руху потрібно поповнення палива!");
    }
  },
  showFuel: function () {
    alert("У меня в баку " + this.fuel + " литрів бензину!");
  },
  addFuel: function (amount) {
    this.fuel += amount;
  },
  toString: function () {
    return "Автомобіль " + this.make;
  },
};

fiat.addFuel(5);
fiat.showFuel();
fiat.drive();
fiat.start();
fiat.drive();
fiat.showFuel();
fiat.start();
fiat.drive();
fiat.showFuel();
fiat.start();
fiat.drive();
fiat.showFuel();
fiat.start();
fiat.drive();
fiat.showFuel();
fiat.start();
fiat.drive();
alert(fiat);
