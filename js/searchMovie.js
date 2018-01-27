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
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", myQueryUrl + myMovieName, true); // true for asynchronous 
    xmlHttp.send("{}");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var myResponse = JSON.parse(xmlHttp.responseText);

            var myResults = myResponse.results;
            var myFirstResult = myResults[0];
            var myOverview = myFirstResult.overview;
            
            console.log("The story of this piece is: " + myOverview);
            alert("The story of this piece is: " + myOverview);
        }
    };
}