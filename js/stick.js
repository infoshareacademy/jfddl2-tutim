function Stick() {
    this.health = 3;
    this.handle;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

// Inicjalizacja naszego czlowieka
Stick.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    $('#game').append('<div id="stick" class="init"></div>');
    $('#game').append('<div id="health" ><span class="glyphicon glyphicon-heart"></span>'+this.getHealth()+'</div>');
    this.handle = $('#stick');
};

Stick.prototype.getHealth = function () {
    return this.health;
};

Stick.prototype.removeHp = function () {
    this.health = this.health - 1;
    if (this.health <= 0) {
        console.log('@TODO: GAME OVER');
    }
};

// Unikanie przeszkody (kucanie)
Stick.prototype.crouch = function () {
    $('#stick').css('height', '15vh');
    console.log('@TODO: crouch');
};

Stick.prototype.getCoordinates = function () {
    // Zwracanie koordynatow prawego gornego i lewego dolnego rogu
    return coordinates = {
        // Prawy gorny rog X
        x1: this.handle.offset().left + this.handle.width(),
        // Prawy gorny rog Y
        y1: this.handle.offset().top,
        // Prawy dolny rog X
        x2: this.handle.offset().left + this.handle.width(),
        // Prawy dolny rog Y
        y2: this.handle.offset().top + this.handle.height(),
    }
};