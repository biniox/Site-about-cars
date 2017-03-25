    $(document).ready(function()
    {
        $('#logos').animate({ 
        right: "+800",
        bottom: "90%"
    }, 2000,
    'easeInOutElastic');
    
        $('#menu').hide().delay(500).slideDown(500);
        $('#kontaktcd').animate({ 
        top: "40%",
        left: "500px"
    }, 2000,
    'easeInOutElastic'); 
  
        $('.skontaktuj').toggle(function()
                              {
           $('#kontakt').animate({ 
        top: "30%",
        left: "+35px"
    }, 2000,
    'easeInOutElastic'); 
            
        }, function()
                              {
           $('#kontakt').animate({ 
        top: "-263px",
    }, 2000,
    'easeInOutElastic');   
        }
        
        );
        
        $('#gallery').toggle(function()
                             {
            $('ol > li > ul').slideDown();
            
        }, function() {
            $('ol > li > ul').stop().slideUp(500).hide(500);  
            
        });
            $('ol > li > ul').hide();  
			
			$(function() {
$('#galeria a').lightBox();
});
    });