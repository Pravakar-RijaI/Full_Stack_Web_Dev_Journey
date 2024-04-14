const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed = Number.parseFloat(this.speed) + 10 + " km/h";
    console.log(`${this.make} at Speed: ${this.speed}`);
}

Car.prototype.brake = function () {
    this.speed = Number.parseFloat(this.speed) - 5 + " km/h";
    console.log(`${this.make} at Speed: ${this.speed}`);
}

const BMW = new Car("BMW", "120 km/h");
const Mercedes = new Car("Mercedes", "95 km/h");

BMW.accelerate();
BMW.accelerate();
BMW.brake();

Mercedes.accelerate();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
