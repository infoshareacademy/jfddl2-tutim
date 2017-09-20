function Stick() {
    this.health = 3;
    this.handle;
    this.handleHealth;
    this.moved = false;
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
    $('#game').append('<div id="health"><span class="glyphicon glyphicon-heart"></span>' + this.getHealth() + '</div>');
    this.handle = $('#stick');
    this.handleHealth = $('#health');
};

Stick.prototype.getHealth = function () {
    return this.health;
};

// Odjecie jednego zycia z sticka
Stick.prototype.removeHp = function () {
    this.health = this.health - 1;
    this.updateHp();
    if (this.health <= 0) {
        // $('#game').remove();
        console.log('@TODO: GAME OVER');
    }
};

// Aktualizja ilosci HP na ekranie
Stick.prototype.updateHp = function () {
    $(this.handleHealth).html('<span class="glyphicon glyphicon-heart"></span>' + this.getHealth());
};

// Unikanie przeszkody (kucanie)
Stick.prototype.crouch = function () {
    if (!this.moved) {
        this.moved = true;
        $('#stick').addClass('crouch');

        setTimeout(function () {
            $('#stick').removeClass('crouch');
            stick.moved = false;
        }, 1000);
    }
};

// Unikanie przeszkody (skakanie)
Stick.prototype.jump = function () {
    $('#stick').addClass('jump');

    setTimeout(function () {
        $('#stick').removeClass('jump');
    }, 3000);
};

Stick.prototype.getCoordinates = function () {
    // Zwracanie koordynatow prawego gornego i prawego dolnego rogu
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