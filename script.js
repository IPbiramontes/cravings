/* global $*/
$(document).ready(function(){
    $.get("div.html", function(data){
            $("#OurNav").html(data);
    });
    $("#cssButton").click(function() {
        var userSearch = $("input").val();
        var location =""
        userSearch === location
     
    });
    $("#cssLoginButton").click(function() {
        var username = $("#USER").val();
        var password = $("#PASS").val();
    if(username === "Isabela" && password === "Leslie" ){
      alert("Congrats, you got in! but this feature don't even fully work yet");  
    }
    else{
        alert("Try again");
    }
    });
    
    console.log(review = "this \u2605 symbol");
    
});