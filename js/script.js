$(document).ready(function() {
    console.log('document loaded');
    $( function() {
    $( "#tabs" ).tabs();
  } );
    
  $( function() {
    $( "#accordion" ).accordion();
  } );
                
    //SMOOTH SCROLL
    $('header a[href^="#"]').click(function(){ //au clic
        var the_id = $(this).attr("href"); //enrengistre la valeur

        $('html, body').animate({ //faire une animation
            scrollTop:$(the_id).offset().top //action et cible
        }, 'slow'); //lentenment
        return false; //évite le comportement de l'ancre (et affichage url)
    });
    
    
    
    
});