jQuery(document).ready(function () {

    //Mobile menu
    jQuery('.toggle_div').click(function(){
        jQuery('.mobile_menu_design').toggleClass('active_mobile_menu')
    });

    //Slider
    jQuery(".product_slider_group").owlCarousel({
        autoplay: false,
        loop: true,
        margin:30,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 3000,
        smartSpeed: 800,
        responsive: {
            0: {
              items: 2,
              center:false,
            },
    
            450: {
              items: 2,
              center:false,
              dots: true,
            },
    
            992: {
                items: 4,
                dots: false,
            },
            1600:{
                margin:80,
                items: 4,
                dots: false,
            }
    
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
              center:false,
              margin:0,
            },
    
            450: {
              items: 2,
              center:false,
              margin:5,
            },
    
            992: {
                margin:10,
                items: 3,
            },
            1600:{
                margin:100,
                items: 3,
            }
    
        }
          
    });
    // End About slider 

    function changeActive(e) {
        // Remove o seletor classe de todos item
        $('.owl-stage .owl-item').removeClass('ativo');
        setTimeout(function() {
          // Adiciona o seletor classe nos item da pagina ativa
          $('.owl-stage .active:first').addClass('ativo');
          $('.owl-stage .active:last').addClass('ativo');
        },0);
      }
      var owl = $('.owl-carousel');
      owl.on('initialized.owl.carousel', changeActive);
      owl.owlCarousel({
        onChanged: changeActive,
        onTranslate: changeActive,
      });

})