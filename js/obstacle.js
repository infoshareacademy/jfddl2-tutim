function Obstacle() {
    this.handle;
    this.collided = false;

}

Obstacle.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    // @TODO: Losowanie obiektu
    var obstacles = ['car','car1','bicycle','bucket','picket','hamburger','fries','pizza','soda'];
    // Losujemy liczbe z zakresu kluczy w tablicy obstacles
    var random = Math.floor(Math.random() * obstacles.length);

    $('#game-play').append('<div class="obstacle ' + obstacles[random] + '"></div>');
    this.handle = $('#game-play .obstacle:last-child');
};

Obstacle.prototype.move = function () {
    // Wprawienie przeszkody w ruch
    // Dodac klase move na przeszkodzie
    setTimeout(function () {
        this
    }, 50);
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
    if (stick instanceof Stick) {
        if (this.collided) {
            return false;
        }

        var coordinates = this.getCoordinates();
        var stickCoordinates = stick.getCoordinates();

        if (coordinates.x1 <= stickCoordinates.x1 && stickCoordinates.y1 <= coordinates.y1 && coordinates.y1 <= stickCoordinates.y2) {
            this.collided = true;
            return true;
        }

        if (coordinates.x2 <= stickCoordinates.x2 && stickCoordinates.y1 <= coordinates.y2 && coordinates.y2 <= stickCoordinates.y2) {
            this.collided = true;
            return true;
        }

        return false;
    } else {
        throw new Error('Niepoprawny parametr');
    }
};


