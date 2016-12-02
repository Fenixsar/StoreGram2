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

        }
    });
});


/*----------------------------------------------------------
    Detect Mobile Browser
-----------------------------------------------------------*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('ismobile');
}


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

});
