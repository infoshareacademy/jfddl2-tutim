var stick;

$(document).ready(function () {
    // Inicjalizujemy ludzika
    stick = new Stick();
    console.log(stick);
    stick.init();
    // stick.crouch();

    // Tworzymy co 100ms przeszkody
    createObstacles(100, stick);

    setTimeout(function () {
        $('#game-play').addClass('hard');
    }, 500000);
});

function createObstacles(speed, stick) {
    setInterval(function () {
        var o = new Obstacle();
        o.init();
        setTimeout(function () {
            o.move();
        }, 100);

        setInterval(function () {
            if (o.collide(stick)) {
                stick.removeHp();
            }
            // console.log('Koliduje: '+o.collide(stick));
        }, 100);
    }, speed);
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowDown') {
        stick.crouch();
    }
    if (event.code === 'ArrowUp') {
        stick.jump();
    }
});

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