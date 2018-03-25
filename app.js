//create array, loop over each string and create standing buttons from the string objects
//create field to type into
//write function to dynamically create buttons upon new user entry - wrap around clicking submit 
//AJAX call to GIPHY using key provided
//iterate AJAX call around button click to pull 10 GIFs from GIPHY
//write function to click start video
//write function to click stop vide
let existingButtons = ["Black Mirror", "Narcos", "Stranger Things", "13 Reasons Why", "Ozark", "Shameless","Mindhunter"];

$( document ).ready(function() {
  
    function buttonCreate() {
        $("#button-well").empty(); 
        for (let i = 0; i < existingButtons.length; i++) {
                let generateButton = $("<button>");
        
                    generateButton.attr({
                    "class" : "show",
                    "data-name": existingButtons[i],
                    text : existingButtons[i]
                    });
                    console.log(generateButton);

        $("#button-well").append(generateButton);
    }
}

    $("submit").on("click", function(event){
        event.preventDefault();
        let tvShowEntry = $("enter-show").val();
        existingButtons.push(tvShowEntry);
        buttonCreate();
        console.log(tvShowEntry);
})
buttonCreate();
console.log(buttonCreate);

});

