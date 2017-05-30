$(document).ready(function(){
    $('.logo').delay(2000).animate({ left: '17%', top:'15%'}, 1000);
});

function hero_selected(){
    $('.ultron').addClass('grayscale').removeClass('dropshadow');
    $('.select_villain').removeClass('dropshadow');
    $('.select_hero').addClass('dropshadow');
    $('.captain_america').removeClass('grayscale').addClass('dropshadow');
    $('.select_play').addClass('flash');
}

function villain_selected(){
    $('.captain_america').addClass('grayscale').removeClass('dropshadow');
    $('.select_hero').removeClass('dropshadow');
    $('.select_villain').addClass('dropshadow');
    $('.ultron').removeClass("grayscale").addClass('dropshadow');
    $('.select_play').addClass('flash');
}
