/* global $*/
$(document).ready(function(){
    $.get("div.html", function(data){
            $("#OurNav").html(data);
    });
    $("#cssButton").click(function() {
        alert( "Handler for .click() called." );
    });
}); 
    // Using code from playlist find some way to change the results of each card
