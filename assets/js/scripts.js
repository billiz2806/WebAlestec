document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autosize');
    var mql = window.matchMedia('(max-width: 1250px)');
    header_info = document.querySelector('.header-info');
    navWeb = document.querySelector('.navWeb');
    navMovil = document.querySelector('.navMovil');
    carousel = document.getElementById('carousel-slider');
    googlemaps = document.querySelector('.google-maps');
 

    AOS.init();

    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top == 0){
                el_autohide.classList.remove('size-down');
                el_autohide.classList.add('size-up');
            }else{
                el_autohide.classList.remove('size-up');
                el_autohide.classList.add('size-down');
            }            
            last_scroll_top = scroll_top;
            if(googlemaps.style.cssText){
                googlemaps.style.cssText = null;
            }
            errormaps = document.getElementById('error_b95fc0bac8a8a3887310447cc5b6a9161fee2c2d');
            if(errormaps){
                document.getElementById('error_b95fc0bac8a8a3887310447cc5b6a9161fee2c2d').remove();
            }
            
      }); 
      
    }

    function render(e){
        if(e.matches){
            header_info.classList.add('d-none');
            navWeb.classList.add('d-none');
            navMovil.classList.remove('d-none');
            carousel.classList.add('d-none');
        }else{
            header_info.classList.remove('d-none');
            navWeb.classList.remove('d-none');
            navMovil.classList.add('d-none');
            carousel.classList.remove('d-none');
        }
    }

    render(mql);
    mql.addEventListener('change', render);

  });