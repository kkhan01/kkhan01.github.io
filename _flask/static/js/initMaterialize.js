//dropdown menus
$('.dropdown-trigger').dropdown({
    inDuration: 300,
    outDuration: 225,
    //hover: true, // Activate on hover
    belowOrigin: true, // Displays dropdown below the button
    coverTrigger:false //dont cover the trigger
});

//collapsible
$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
});
