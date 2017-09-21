$(document).ready(function () {
    // Inicjalizujemy ludzika
    var stick = new Stick();
    console.log(stick);
    stick.init();
    // stick.crouch();

    // Tworzymy co 500ms przeszkody
    createObstacles(1500, stick);
});

function createObstacles(speed, stick) {
    setInterval(function () {
        var o = new Obstacle();
        o.init();
        setTimeout(function () {
            o.move();
        }, 50);

        setInterval(function() {
            console.log(stick);
            console.log('Koliduje: '+o.collide(stick));
        }, 100);
    }, speed);
}

// Person.prototype.sayHello = function() {
//     console.info('Witam ' + this.name);
// };
// Person.prototype.getHealth = function() {
//     console.info('Health ' + this.health);
// };
// function Doctor(name, surname) {
//     Person.call(this, name, surname);
//     this.hospital = 'Main';
// }
// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;
// Doctor.prototype.cure = function(person) {
//     if (person instanceof Person === false) {
//         throw new Error("Can't cure!");
//     }
//     person.health += 10;
// };
//
// var person2 = new Person('Mateusz', 'Trener');
// var person1 = new Person('Arek', 'Wtyklo');
// var doctor = new Doctor('Dr', 'House');
//
// console.log(person1.sayHello());
// console.log(person2.sayHello());
// console.log(doctor.sayHello());