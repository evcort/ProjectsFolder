for (let i = 0; i < 16; i++) {
    $('#tilesContainer').append('<div class = "tiles"></div>')
};

$('.tiles').on('click', function() {
    $(this).toggleClass('colorChange');
});