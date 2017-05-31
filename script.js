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
    if (game_mode === 'hero'){
        $('body').addClass('hero_background');
    }
    else if (game_mode === 'villain'){
        $('body').addClass('villain_background');
    }
    $('.stats_container').show();
}

