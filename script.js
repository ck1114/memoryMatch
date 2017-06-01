$(document).ready(function(){
    $('.logo').delay(2000).animate({ left: '17%', top:'15%'}, 1000);
    $('.stats_container').hide();
});

var game_mode;

function hero_selected(){
    $('.ultron').addClass('grayscale').removeClass('dropshadow');
    $('.select_villain').removeClass('dropshadow');
    $('.select_hero').addClass('dropshadow');
    $('.captain_america').removeClass('grayscale').addClass('dropshadow');
    $('.select_play').addClass('flash').bind('click', play_game);
    game_mode = 'hero';
}

function villain_selected(){
    $('.captain_america').addClass('grayscale').removeClass('dropshadow');
    $('.select_hero').removeClass('dropshadow');
    $('.select_villain').addClass('dropshadow');
    $('.ultron').removeClass("grayscale").addClass('dropshadow');
    $('.select_play').addClass('flash').bind('click', play_game);
    game_mode = 'villain';
}

function play_game(){
    $('.loading_screen').addClass('animated fadeOut')
    if(game_mode === 'hero'){
        $('body').addClass('hero_background');
    }
    else if(game_mode === 'villain'){
        $('body').addClass('villain_background');
    }
    $('.stats_container').show();
    create_cards();
    $('.card').click(card_clicked);
}

//CREATE CARDS DYNAMICALLY
var cards = [];

function create_cards() {
    for(var i=0; i<2; i++){
        for(var x=1; x<=14; x++){
            cards.push('assets/front_'+x+'.png');
        }
    }

    cards.sort(function(a, b){return 0.5 - Math.random()});
    console.log(cards);

    for(var j=0; j<7; j++){
        for(var k=1; k<5; k++){
            $('.row'+k).append('<div class="card">');
            $('.row'+k).find(".card:eq("+j+")").append($('<img class="front">').attr({'src': cards[0]}));
            $('.row'+k).find(".card:eq("+j+")").append('<img class="back" src="assets/card_back.jpg">');
            cards.splice(0,1);
        }
    }
}

//GAME OPERATION
var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

function card_clicked() {
    if($(this).hasClass("already_clicked")){
        return;
    }
    if

}


