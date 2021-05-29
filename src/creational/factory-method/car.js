"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.pickUp = function (customerName) {
        console.log(this.name + " est\u00E1 buscando o " + customerName);
    };
    ;
    Car.prototype.stop = function () {
        console.log(this.name + " parou");
    };
    ;
    return Car;
}());
exports.Car = Car;
