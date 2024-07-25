// JS
      jQuery(function(){

           // Menu versão mobile
            var windowWidth = window.innerWidth;
             if(windowWidth < 767) {                                  
                 jQuery(".menu").addClass("mobile");                     
            } 

            jQuery("a.bt-menu").click(function() {
              jQuery(".menu").toggleClass("exibir-menu-mobile");  
            });  

    });


