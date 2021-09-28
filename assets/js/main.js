jQuery(document).ready(function () {

    //Mobile menu
    jQuery('.toggle_div').click(function () {
        jQuery('.mobile_menu_design').toggleClass('active_mobile_menu')
    });

    // Quantity js 
    // Quantity
    jQuery('.add').click(function () {
        var th = $(this).closest('.wrap').find('.count');
        th.val(+th.val() + 1);
    });
    jQuery('.sub').click(function () {
        var th = $(this).closest('.wrap').find('.count');
        if (th.val() > 1) th.val(+th.val() - 1);
    });

    //Slider
    jQuery(".product_slider_group").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 30,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 2,
                center: false,
            },

            450: {
                items: 2,
                center: false,
                dots: true,
            },

            992: {
                items: 4,
                dots: false,
            },
            1600: {
                margin: 80,
                items: 4,
                dots: false,
            }

        }

    });

    jQuery('#nav1').click(function () {
        jQuery('.product_slider_group').trigger('prev.owl.carousel');
        return false;
    });


    jQuery('#nav2').click(function () {
        jQuery('.product_slider_group').trigger('next.owl.carousel');
        return false;
    });

    // about slider 
    jQuery(".about_slider").owlCarousel({
        autoplay: false,
        loop: true,
        dots: true,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
                center: false,
                margin: 0,
            },

            450: {
                items: 2,
                center: false,
                margin: 5,
            },

            992: {
                margin: 10,
                items: 3,
            },
            1600: {
                margin: 100,
                items: 3,
            }

        }

    });
    // End About slider 

    // New slider 
       //Slider
       jQuery(".re_slider1").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 30,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
                center: false,
            },

            450: {
                items: 2,
                center: false,
                dots: false,
            },

            992: {
                items: 4,
                dots: false,
            },
            1600: {
                margin: 30,
                items: 4,
                dots: false,
            }

        }

    });

    // Hompage slider 
    jQuery(".home_slider").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        items: 1,
        dots:false,
        nav:false,
    });


})

// Product details car 
$(document).ready(function () {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: true,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 4,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;
        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});

// End product details car 