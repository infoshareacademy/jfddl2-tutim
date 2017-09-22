function Stick() {
    this.health = 3;
    this.handle;
    this.handleHealth;
    this.score = 0;
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
    $('#game-play').append('<div id="stick" class="init"></div>');

    $('#game-play').append('<div id="score"><span class="glyphicon glyphicon-calendar"></span>' + this.getScore() + '</div>');
    $('#game-play').append('<div id="health"><span class="glyphicon glyphicon-heart"></span>' + this.getHealth() + '</div>');
    this.handle = $('#stick');
    this.handleHealth = $('#health');
    var self = this;
    this.interval = setInterval(function(){
        self.score = self.score + 1;
        self.updateScore();
    }, 1000);
};

Stick.prototype.getHealth = function () {
    return this.health;
};

Stick.prototype.getScore = function () {
    return this.score;
};

// Odjecie jednego zycia z sticka
Stick.prototype.removeHp = function () {
    var health = this.health -1;
    if (health < 0) {
        // $('#game-play').remove();
        console.log('@TODO: GAME OVER');
        clearInterval(this.interval);
        $('#stick').remove();
        $('#game-play').css('animation', 'none');
    }
    else {
        this.health = health;
        this.updateHp();
    }
};

// Aktualizja ilosci HP na ekranie
Stick.prototype.updateHp = function () {
    $(this.handleHealth).html('<span class="glyphicon glyphicon-heart"></span> ' + this.getHealth());
};

Stick.prototype.updateScore = function () {
    $('#score').html('<span class="glyphicon glyphicon-calendar"></span> ' + this.getScore());
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


Stick.prototype.crouch = function(){
    var stick = $('#stick');
    stick.addClass('crouch');
    setTimeout(function(){
        stick.removeClass('crouch');
        stick.addClass('rise');
    },1000);
    stick.removeClass('rise');
}


// Unikanie przeszkody (skakanie)
Stick.prototype.jump = function () {
    var stick = $('#stick');
    stick.addClass('jump');
    setTimeout(function () {
        stick.removeClass('jump');
        stick.addClass('fall');
    }, 1000);
    stick.removeClass('fall');
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