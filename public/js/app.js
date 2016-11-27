$(document).ready(function() {
    $('body').on('click', '[data-ma-action]', function(e) {
        e.preventDefault();

        var $this = $(this);
        var action = $(this).data('ma-action');

        switch (action) {

            /*-------------------------------------------
                Sidebar & Chat Open/Close
            ---------------------------------------------*/
            case 'sidebar-open':
                var target = $this.data('ma-target');
                var backdrop = '<div data-ma-action="sidebar-close" class="ma-backdrop" />';

                $('body').addClass('sidebar-toggled');
                $('#header, #header-alt, #main').append(backdrop);
                $this.addClass('toggled');
                $(target).addClass('toggled');

                break;

            case 'sidebar-close':
                $('body').removeClass('sidebar-toggled');
                $('.ma-backdrop').remove();
                $('.sidebar, .ma-trigger').removeClass('toggled')

                break;


                /*-------------------------------------------
                    Profile Menu Toggle
                ---------------------------------------------*/
            case 'profile-menu-toggle':
                $this.parent().toggleClass('toggled');
                $this.next().slideToggle(200);

                break;


                /*-------------------------------------------
                    Mainmenu Submenu Toggle
                ---------------------------------------------*/
            case 'submenu-toggle':
                $this.next().slideToggle(200);
                $this.parent().toggleClass('toggled');

                break;

                /*-------------------------------------------
                    Login Window Switch
                ---------------------------------------------*/
            case 'login-switch':
                var loginblock = $this.data('ma-block');
                var loginParent = $this.closest('.lc-block');

                loginParent.removeClass('toggled');

                setTimeout(function() {
                    $(loginblock).addClass('toggled');
                });

                break;


        }
    });
});


/*----------------------------------------------------------
    Detect Mobile Browser
-----------------------------------------------------------*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('ismobile');
}

$(window).load(function() {
    /*----------------------------------------------------------
        Page Loader
     -----------------------------------------------------------*/
    if (!$('html').hasClass('ismobile')) {
        if ($('.page-loader')[0]) {
            setTimeout(function() {
                $('.page-loader').fadeOut();
            }, 500);

        }
    }
})

$(document).ready(function() {


    /*----------------------------------------------------------
        Scrollbar
    -----------------------------------------------------------*/
    function scrollBar(selector, theme, mousewheelaxis) {
        $(selector).mCustomScrollbar({
            theme: theme,
            scrollInertia: 100,
            axis: 'yx',
            mouseWheel: {
                enable: true,
                axis: mousewheelaxis,
                preventDefault: true
            }
        });
    }

    if (!$('html').hasClass('ismobile')) {
        //On Custom Class
        if ($('.c-overflow')[0]) {
            scrollBar('.c-overflow', 'minimal-dark', 'y');
        }
    }


    /*----------------------------------------------------------
        Dropdown Menu
    -----------------------------------------------------------*/
    if ($('.dropdown')[0]) {
        //Propagate
        $('body').on('click', '.dropdown.open .dropdown-menu', function(e) {
            e.stopPropagation();
        });

        $('.dropdown').on('shown.bs.dropdown', function(e) {
            if ($(this).attr('data-animation')) {
                $animArray = [];
                $animation = $(this).data('animation');
                $animArray = $animation.split(',');
                $animationIn = 'animated ' + $animArray[0];
                $animationOut = 'animated ' + $animArray[1];
                $animationDuration = ''
                if (!$animArray[2]) {
                    $animationDuration = 500; //if duration is not defined, default is set to 500ms
                } else {
                    $animationDuration = $animArray[2];
                }

                $(this).find('.dropdown-menu').removeClass($animationOut)
                $(this).find('.dropdown-menu').addClass($animationIn);
            }
        });

        $('.dropdown').on('hide.bs.dropdown', function(e) {
            if ($(this).attr('data-animation')) {
                e.preventDefault();
                $this = $(this);
                $dropdownMenu = $this.find('.dropdown-menu');

                $dropdownMenu.addClass($animationOut);
                setTimeout(function() {
                    $this.removeClass('open')

                }, $animationDuration);
            }
        });
    }



    /*----------------------------------------------------------
        Auto Size Textare
    -----------------------------------------------------------*/
    if ($('.auto-size')[0]) {
        autosize($('.auto-size'));
    }





    /*----------------------------------------------------------
        NoUiSlider (Input Slider)
    -----------------------------------------------------------*/
    //Basic
    if ($('#input-slider')[0]) {
        var slider = document.getElementById('input-slider');

        noUiSlider.create(slider, {
            start: [20],
            connect: 'lower',
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    //Range
    if ($('#input-slider-range')[0]) {
        var sliderRange = document.getElementById('input-slider-range');

        noUiSlider.create(sliderRange, {
            start: [40, 70],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    }

    //Range with value
    if ($('#input-slider-value')[0]) {
        var sliderRangeValue = document.getElementById('input-slider-value');

        noUiSlider.create(sliderRangeValue, {
            start: [10, 50],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });

        sliderRangeValue.noUiSlider.on('update', function(values, handle) {
            document.getElementById('input-slider-value-output').innerHTML = values[handle];
        });
    }



    /*-----------------------------------------------------------
        Link prevent
    -----------------------------------------------------------*/
    $('body').on('click', '.a-prevent', function(e) {
        e.preventDefault();
    });


    /*----------------------------------------------------------
        Bootstrap Accordion Fix
    -----------------------------------------------------------*/
    if ($('.collapse')[0]) {

        //Add active class for opened items
        $('.collapse').on('show.bs.collapse', function(e) {
            $(this).closest('.panel').find('.panel-heading').addClass('active');
        });

        $('.collapse').on('hide.bs.collapse', function(e) {
            $(this).closest('.panel').find('.panel-heading').removeClass('active');
        });

        //Add active class for pre opened items
        $('.collapse.in').each(function() {
            $(this).closest('.panel').find('.panel-heading').addClass('active');
        });
    }




    /*-----------------------------------------------------------
        IE 9 Placeholder
    -----------------------------------------------------------*/
    if ($('html').hasClass('ie9')) {
        $('input, textarea').placeholder({
            customClass: 'ie9-placeholder'
        });
    }



});
