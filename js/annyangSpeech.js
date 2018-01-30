var annyangStarted = false;
document.getElementById("speechButton").addEventListener("click", function(){
    if (annyangStarted == false) {
        annyang.start();
        annyangStarted = true;
    }
    else {
        annyang.abort();
        annyangStarted = false;
    }
});

if(annyang) {
    var commands = {
        'search for *tag': searchMovieDetailsWithVoice
    };

    annyang.addCommands(commands);

    //annyang.start();
}
