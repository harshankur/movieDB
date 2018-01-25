var myMovieName = document.getElementById("inputMovieName").value;

var myQueryUrl = "https://api.themoviedb.org/3/search/movie?api_key=da6149720cb9476c5b6f2aaf8ae03cf4&language=en-US&query=";
document.getElementById("searchButton").addEventListener("click", searchMovieDetails);

function searchMovieDetails() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", myQueryUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            var myResponse = JSON.parse(xmlHttp.responseText);
            alert("The story of this piece is: " + myResponse.results[0].overview);
    };
}