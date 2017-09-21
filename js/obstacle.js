function Obstacle() {
    this.handle;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

Obstacle.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var obstacles = ['low', 'high'];
    // Losujemy liczbe z zakresu kluczy w tablicy obstacles
    var random = Math.floor(Math.random() * obstacles.length);

    $('#game').append('<div class="obstacle ' + obstacles[random] + '"></div>');
    this.handle = $('#game .obstacle:last-child');
};

Obstacle.prototype.move = function () {
    // Wprawienie przeszkody w ruch
    // Dodac klase move na przeszkodzie
    setTimeout(function () {
        this
    }, 100);
    this.handle.addClass('move');
};


Obstacle.prototype.getCoordinates = function () {
    // Zwracanie koordynatow lewego gornego i lewego dolnego rogu
    return coordinates = {
        // Lewy gorny rog X
        x1: this.handle.offset().left,
        // Lewy gorny rog Y
        y1: this.handle.offset().top,
        // Lewy dolny rog X
        x2: this.handle.offset().left + this.handle.width(),
        // Lewy dolny rog Y
        y2: this.handle.offset().top + this.handle.height(),
    }
};

Obstacle.prototype.collide = function (stick) {
    console.log(stick);
    if (stick instanceof Stick) {
        console.log('@TODO: Collide');
        var coordinates = this.getCoordinates();
        var stickCoordinates = stick.getCoordinates();
        console.log(coordinates);
        console.log(stickCoordinates);

        return 1;
    } else {
        throw new Error('Niepoprawny parametr');
    }
};