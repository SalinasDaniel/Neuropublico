$(function() {
    $('.close').click(function() {
        $('.promotion').css({
            display: 'none',

        });
    });
});


$(function() {
    var width = $(window).width();
    if (width > 767) {
        $('#recipeCarousel').carousel({
            interval: 4000
        });

        $('.carousel .carousel-item').each(function() {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }
});


function ConteoRegresivo() {
    var fecha = new Date('2019', '2', '00', '00', '00', '00');
    var hoy = new Date();
    var dias = 0;
    var horas = 0;
    var minutos = 0;
    var segundos = 0;
    if (fecha > hoy) {
        var diferencia = (fecha.getTime() - hoy.getTime()) / 1000;
        dias = Math.floor(diferencia / 86400);
        diferencia = diferencia - (86400 * dias);
        horas = Math.floor(diferencia / 3600);
        diferencia = diferencia - (3600 * horas);
        minutos = Math.floor(diferencia / 60);
        diferencia = diferencia - (60 * minutos);
        segundos = Math.floor(diferencia);
        document.getElementById('Hora').innerHTML = '' + horas + '';
        document.getElementById('Minutos').innerHTML = '' + minutos + '';
        document.getElementById('Segundos').innerHTML = '' + segundos + '';
        document.getElementById('Hora2').innerHTML = '' + horas + '';
        document.getElementById('Minutos2').innerHTML = '' + minutos + '';
        document.getElementById('Segundos2').innerHTML = '' + segundos + '';
        // document.getElementById('contador').innerHTML = '' + dias + ' : ' + horas + ' : ' + minutos + ' : ' + segundos + 'Días  -  Horas  -  Minutos - Segundos';
        if (dias > 0 || horas > 0 || minutos > 0 || segundos > 0) {
            setTimeout("ConteoRegresivo()", 1000);
        }
    } else {
        document.getElementById('Hora').innerHTML = '0 Días ¡Se acabo la Promocion!';
    }
}



$(function() {
    $(document).ready(function() {
        $('.gmaps').gmaps();
    });
});