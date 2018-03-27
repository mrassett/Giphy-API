
//iterate AJAX call around button click to pull 10 GIFs from GIPHY
//write function to click start video
//write function to click stop vide
let existingButtons = ["Black Mirror", "Narcos", "Stranger Things", "13 Reasons Why", "Ozark", "Shameless"];

//create array, loop over each string and create standing buttons from the string objects

    function buttonCreate() {
        $("#button-well").empty(); 
        for (let i = 0; i < existingButtons.length; i++) {
                let generateButton = $("<button class = 'tv'>");
                generateButton.addClass("tv");
                generateButton.addClass("btn btn-info")
                generateButton.attr("data-name", existingButtons[i]);
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
        buttonCreate();





// Event listener for all button elements
$(".tv").on("click", function () {

    let netflix = $(this).attr("data-name");
    // let netflix = $(this).attr("data-tv");
//AJAX call to GIPHY using key provided
apiKey = "TognscCDCvIkZorbQ3YSYr1F937ccMw7";

let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + netflix + "&limit=10";


    $.ajax({
    url: queryURL,
    method: "GET"
    })

// After data comes back from the request
    .then(function(response){
    let results = response.data;    
    for (let i = 0; i < results.length; i++){
    let newGifDiv = $("<div>");
    newGifDiv.addClass("newGifDiv");

console.log(queryURL);

    let gifImage = $("<img>");
    gifImage.attr("src", results[i].images.fixed_height.url); 
    newGifDiv.append(gifImage);
    $("#images").prepend(gifImage);

console.log(response);
console.log(results);
}
})
});
