$(document).ready(function() {

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#navbar").find('a').on('click', function(event) {
        scrollNavbar(this, event);
    });

    $(window).load(function() {

        var $jumbotronTitle = $('#jumbotron-title');
        var $jumbotronSubtitle = $('#jumbotron-subtitle');
        var $overviewName = $('#overview-name');

        $jumbotronTitle.addClass('animated fadeInDown');

        $jumbotronTitle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function() {

                window.setTimeout(function() {

                    $jumbotronSubtitle.removeClass('invisible');
                    $jumbotronSubtitle.addClass('animated fadeInDown');
                }, 500);

                window.setTimeout(function() {

                    $overviewName.removeClass('invisible');
                    $overviewName.addClass('animated fadeInDown');
                }, 750);
        })
    });

    function scrollNavbar($link, event) {

        event.preventDefault();

        if ($link.hash !== "") {
            var hash = $link.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top }, 800, function(){
                window.location.hash = hash;
            });
        } else {
            $('html, body').animate({ scrollTop: 0 }, 800);
        }
    };

    function isScrolledIntoView($element) {
        var elemTop = $element.getBoundingClientRect().top;
        var elemBottom = $element.getBoundingClientRect().bottom;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    }
});