/*
 * Evento -  Event html  Template
 * Build Date: jan 2018
 * Author: colorlib
 * Copyright (C) 2018 colorlib
 */
 /* ------------------------------------- */
/*  TABLE OF CONTENTS
 /* ------------------------------------- */
/*   PRE LOADING                          */
/*   WOW                                 */
/*   sliders                      */
/*    MAPS                               */
/*   COUNTER JS              */


(function($) {
    /* ==============================================
    /*  PRE LOADING
      =============================================== */
    'use strict';
    $(window).load(function() {
        $('.loader').delay(500).fadeOut('slow');
    });


    $(document).ready(function() {

    'use strict';
    /* ==============================================
     /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();
    /* ==============================================
        STICKY HEADER
        =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });

    $(".countdown")
        .countdown("2018/03/01", function(event) {
            $(this).html(
                event.strftime('<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
            );
        });

    /* ------------------------------------- */
    /* Animated progress bars
     /* ------------------------------------- */

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });


        /* --------------------------------------------------------
    MAPS
    ----------------------------------------------------------- */
    var map = $('#map');
    if(map.length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
        var lattuide = map.attr('data-lat');
        var longtuided = map.attr('data-lon');
    }
    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lattuide, longtuided), // New York

            // How you would like to style the map.
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lattuide, longtuided),
            map: map,
            title: 'evento!'
        });
    }


    // javascript página de programação
    //tabs listagem minicursos, palestras e oficinas
    // $("#btn-palestras").on('click', function () {
    //     $("#content-minicursos").hide();
    //     $("#content-oficinas").hide();
    //     $("#content-palestras").fadeIn();
    //     $("#btn-minicursos").removeClass('btn-active');
    //     $("#btn-oficinas").removeClass('btn-active');
    //     $("#btn-palestras").addClass('btn-active');
    // });
    //
    // $("#btn-minicursos").on('click', function () {
    //     $("#content-palestras").hide();
    //     $("#content-oficinas").hide();
    //     $("#content-minicursos").fadeIn();
    //     $("#btn-palestras").removeClass('btn-active');
    //     $("#btn-oficinas").removeClass('btn-active');
    //     $("#btn-minicursos").addClass('btn-active');
    // });
    //
    // $("#btn-oficinas").on('click', function () {
    //     $("#content-minicursos").hide();
    //     $("#content-palestras").hide();
    //     $("#content-oficinas").fadeIn();
    //     $("#btn-minicursos").removeClass('btn-active');
    //     $("#btn-palestras").removeClass('btn-active');
    //     $("#btn-oficinas").addClass('btn-active');
    // });


    //tabs palestras
    //     $("#btn-palestras10").on('click', function () {
    //         $("#palestras11").hide();
    //         $("#palestras12").hide();
    //         $("#palestras10").fadeIn();
    //         $("#btn-palestras11").removeClass('btn-active');
    //         $("#btn-palestras12").removeClass('btn-active');
    //         $("#btn-palestras10").addClass('btn-active');
    //     });
    //
    //     $("#btn-palestras11").on('click', function () {
    //         $("#palestras10").hide();
    //         $("#palestras12").hide();
    //         $("#palestras11").fadeIn();
    //         $("#btn-palestras10").removeClass('btn-active');
    //         $("#btn-palestras12").removeClass('btn-active');
    //         $("#btn-palestras11").addClass('btn-active');
    //     });
    //
    //     $("#btn-palestras12").on('click', function () {
    //         $("#palestras11").hide();
    //         $("#palestras10").hide();
    //         $("#palestras12").fadeIn();
    //         $("#btn-palestras11").removeClass('btn-active');
    //         $("#btn-palestras10").removeClass('btn-active');
    //         $("#btn-palestras12").addClass('btn-active');
    //     });


        //tabs minicursos
        // $("#btn-minicursos10").on('click', function () {
        //     $("#minicursos11").hide();
        //     $("#minicursos12").hide();
        //     $("#minicursos10").fadeIn();
        //     $("#btn-minicursos11").removeClass('btn-active');
        //     $("#btn-minicursos12").removeClass('btn-active');
        //     $("#btn-minicursos10").addClass('btn-active');
        // });
        //
        // $("#btn-minicursos11").on('click', function () {
        //     $("#minicursos10").hide();
        //     $("#minicursos12").hide();
        //     $("#minicursos11").fadeIn();
        //     $("#btn-minicursos10").removeClass('btn-active');
        //     $("#btn-minicursos12").removeClass('btn-active');
        //     $("#btn-minicursos11").addClass('btn-active');
        // });
        //
        // $("#btn-minicursos12").on('click', function () {
        //     $("#minicursos11").hide();
        //     $("#minicursos10").hide();
        //     $("#minicursos12").fadeIn();
        //     $("#btn-minicursos11").removeClass('btn-active');
        //     $("#btn-minicursos10").removeClass('btn-active');
        //     $("#btn-minicursos12").addClass('btn-active');
        // });


        //tabs oficinas
        // $("#btn-oficinas10").on('click', function () {
        //     $("#oficinas11").hide();
        //     $("#oficinas12").hide();
        //     $("#oficinas10").fadeIn();
        //     $("#btn-oficinas11").removeClass('btn-active');
        //     $("#btn-oficinas12").removeClass('btn-active');
        //     $("#btn-oficinas10").addClass('btn-active');
        // });
        //
        // $("#btn-oficinas11").on('click', function () {
        //     $("#oficinas10").hide();
        //     $("#oficinas12").hide();
        //     $("#oficinas11").fadeIn();
        //     $("#btn-oficinas10").removeClass('btn-active');
        //     $("#btn-oficinas12").removeClass('btn-active');
        //     $("#btn-oficinas11").addClass('btn-active');
        // });
        //
        // $("#btn-oficinas12").on('click', function () {
        //     $("#oficinas11").hide();
        //     $("#oficinas10").hide();
        //     $("#oficinas12").fadeIn();
        //     $("#btn-oficinas11").removeClass('btn-active');
        //     $("#btn-oficinas10").removeClass('btn-active');
        //     $("#btn-oficinas12").addClass('btn-active');
        // });


        //tabs dias programação eventos juntos
        $("#btn-programacao10").on('click', function () {
            $("#content-eventos11").hide();
            $("#content-eventos12").hide();
            $("#content-eventos10").fadeIn();
            $("#btn-programacao12").removeClass('btn-active');
            $("#btn-programacao11").removeClass('btn-active');
            $("#btn-programacao10").addClass('btn-active');
        });

        $("#btn-programacao11").on('click', function () {
            console.log("oie");
            $("#content-eventos10").hide();
            $("#content-eventos12").hide();
            $("#content-eventos11").fadeIn();
            $("#btn-programacao10").removeClass('btn-active');
            $("#btn-programacao12").removeClass('btn-active');
            $("#btn-programacao11").addClass('btn-active');
        });

        $("#btn-programacao12").on('click', function () {
            $("#content-eventos10").hide();
            $("#content-eventos11").hide();
            $("#content-eventos12").fadeIn();
            $("#btn-programacao10").removeClass('btn-active');
            $("#btn-programacao11").removeClass('btn-active');
            $("#btn-programacao12").addClass('btn-active');
        });

        //imprimir programação
        $("#imprimir").on('click', function () {
            window.print();
        });

        //abrir descrição do evento
        $(".desc-evento").on('click', function () {
            $("#exampleModal").modal('show');
            $(".modal-title").html($(this).data('titulo'));
            $(".modal-body").html('<p>'+ $(this).data('content') +'</p>');
        });

        $(".speaker_box").on('click', function () {
            var titulo = $(this).data('titulo');
            var texto = $(this).data('resumo');
            var convidado = $(this).data('convidado');
            $('.modal-title').html(titulo);
            $('#textModal').html('<b>Resumo:</b> ' + texto);
            $('#textModal').append('<br><br>'+convidado);
            $('#myModal').modal();
        });

});
}(jQuery));