var stick;
var intervalID;

$(document).ready(function () {
    // Inicjalizujemy ludzika
    stick = new Stick();
    console.log(stick);
    stick.init();

    // Tworzymy co 500ms przeszkody
    createObstacles(2500, stick);

    setTimeout(function () {
        $('#game-play').addClass('hard');
    }, 500000);
});

function createObstacles(speed, stick) {
    intervalID = setInterval(function () {
        var o = new Obstacle();
        o.init();
        setTimeout(function () {
            o.move();
        }, 100);

        setInterval(function () {
            if (o.collide(stick)) {
                stick.removeHp();
            }
        }, 2000);
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