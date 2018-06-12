var myTextInput = document.getElementById("inputMovieName");
var mySearchButton = document.getElementById("searchButton");

//Change Enter function in text input field with button click

myTextInput.addEventListener("keydown", function(event) {
    console.log(event.which);
    if (event.keyCode === 13) {
        event.preventDefault();
        mySearchButton.click();
    }
});

//Starting API call below

var myQueryUrl = "https://api.themoviedb.org/3/search/movie?api_key=da6149720cb9476c5b6f2aaf8ae03cf4&language=en-US&query=";
mySearchButton.addEventListener("click", searchMovieDetails);


//------   Searching for the movie after keydown      ---------

// Init a timeout variable to be used below
var timeout = null;

// Listen for keystroke events

myTextInput.onkeyup = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log('Input Value:', myTextInput.value);
        if (myTextInput.value.length >= 2) {
            searchMovieDetails();
        }
    }, 500);
};


function searchMovieDetails() {
    //Checking if Search button is working or not
    console.log("Beginning Search now!");

    var autoSuggestedMovies = [];

    var myMovieName = myTextInput.value;
    fetch(myQueryUrl+myMovieName)
    .then(function (response) {
        return response.json();
    }).then(function(data) {
        for (var index = 0; index < 5; index++) {
            autoSuggestedMovies.push(data.results[index].title + "      " + data.results[index].release_date);
        }
        console.log(autoSuggestedMovies);
        console.log(data.results[0].overview);
        alert("The story of this movie is: " + data.results[0].overview);
    });
    //Autocomplete feature to be used for auto-suggest in movies
    $("#inputMovieName").autocomplete({
        source: autoSuggestedMovies,
        minLength: 2
    });
}


/*

function searchMovieDetails() {
    //Checking if Search button is working or not
    console.log("Beginning Search now");

    var myMovieName = document.getElementById("inputMovieName").value;
    fetch(myQueryUrl+myMovieName)
    .then(function (response) {
        return response.json();
    }).then(function(data) {
        alert("The story of this movie is: " + data.results[0].overview);
    });
}

*/

//Search Movie Details with voice
function searchMovieDetailsWithVoice(speechMovieName) {
    //Checking if Search button is working or not
    console.log("Voice Search called");
    myTextInput.value = speechMovieName;
    searchMovieDetails();
}