//Change Enter function in text input field with button click

document.getElementById("inputMovieName").addEventListener("keydown", function(event) {
    console.log(event.which);
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

//Starting API call below

var myQueryUrl = "https://api.themoviedb.org/3/search/movie?api_key=da6149720cb9476c5b6f2aaf8ae03cf4&language=en-US&query=";
document.getElementById("searchButton").addEventListener("click", searchMovieDetails);

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

//Search Movie Details with voice
function searchMovieDetailsWithVoice(speechMovieName) {
    //Checking if Search button is working or not
    console.log("Voice Search called");
    document.getElementById("inputMovieName").value = speechMovieName;
    searchMovieDetails();
}