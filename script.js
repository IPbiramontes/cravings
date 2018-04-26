/* global $*/
$(document).ready(function(){
    $.ajax({
        url: "https://swapi.co/api/people/1",
        method: "GET",
        success: function(response) {
            //Log the whole response to the console
            console.log(response);
            // Below write the code to print the name of the person 
            console.log(response.name);
            // Below write the code to print the mass of the person
            console.log(response.mass);
            // Below write the code to print the species of the person
            console.log(response.species);
            // Below write the code to print the starships of the person
	        console.log(response.starships);
    
  },
}); 
    // Using code from playlist find some way to change the results of each card
    
    
  
});
