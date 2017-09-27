function Stick() {
    this.health = 3;
    this.handle;
    this.handleHealth;
    this.score = 0;
    this.moved = false;
    this.positions = {
        inital: '5%',
        crouched: '-15%',
        jumped: '20%'     
    };
}

// Inicjalizacja naszego czlowieka
Stick.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    var gamePlay = $('#game-play');
    gamePlay.append('<div id="stick" class="init"></div>');

    gamePlay.append('<div id="score"><span class="glyphicon glyphicon-calendar"></span>' + this.getScore() + '</div>');
    gamePlay.append('<div id="health"><span class="glyphicon glyphicon-heart"></span>' + this.getHealth() + '</div>');

    this.handle = $('#stick');
    this.handleHealth = $('#health');
    var self = this;

    this.handle.css('bottom', this.positions.inital);

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
        clearInterval(intervalID);
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

Stick.prototype.crouch = function(){
    var self = this;
    self.handle.css('bottom', this.positions.crouched);

    // self.handle.addClass('crouch');
    setTimeout(function(){
        // self.handle.removeClass('crouch');
        self.handle.css('bottom', self.positions.inital);
    },1000);
    // stick.removeClass('rise');
}


// Unikanie przeszkody (skakanie)
Stick.prototype.jump = function () {
    var self = this;
    self.handle.css('bottom', this.positions.jumped);

    // self.handle.addClass('crouch');
    setTimeout(function(){
        // self.handle.removeClass('crouch');
        self.handle.css('bottom', self.positions.inital);
    }, 500);
    // stick.removeClass('rise');
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