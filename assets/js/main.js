jQuery(document).ready(function () {
    jQuery(".product_slider_group").owlCarousel({
        autoplay: false,
        loop: true,
        margin:80,
        dots: false,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        items:2,
        responsive: {
            0: {
              items: 2,
              center:false,
            },
    
            450: {
              items: 2,
              center:false,
            },
    
            576: {
              items: 4,
              center:false,
            },
    
        }
          
    });

    jQuery('#nav1').click(function(){
        jQuery('.product_slider_group').trigger('prev.owl.carousel');
            return false ;
     });
            
            
    jQuery('#nav2').click(function(){       
        jQuery('.product_slider_group').trigger('next.owl.carousel');
        return false ;          
    });

})