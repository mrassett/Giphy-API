"use strict";



//AJAX call to GIPHY using key provided
//iterate AJAX call around button click to pull 10 GIFs from GIPHY
//write function to click start video
//write function to click stop vide
let existingButtons = ["Black Mirror", "Narcos", "Stranger Things", "13 Reasons Why", "Ozark", "Shameless"];


//create array, loop over each string and create standing buttons from the string objects

    function buttonCreate() {
        $("#button-well").empty(); 
        for (let i = 0; i < existingButtons.length; i++) {
                let generateButton = $("<button>");
                generateButton.html(existingButtons[i]);
                console.log(generateButton);
                $("#button-well").append(generateButton);
        }
    }
//write function to dynamically create buttons upon new user entry - wrap around clicking submit 

    $("#add-button").on("click", function(event){
        event.preventDefault();
        let tvShowEntry = $("#enter-show").val();
        existingButtons.push(tvShowEntry);
        buttonCreate();
        console.log(tvShowEntry);
        $("#enter-show").empty();
});
console.log(buttonCreate);
buttonCreate();

//AJAX call to GIPHY using key provided