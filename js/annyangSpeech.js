var annyangStarted = false;
document.getElementById("speechButton").addEventListener("click", function(){
    if (annyangStarted == false) {
        document.getElementById("speechButton").src="img/mic_on.png";
        annyang.start();
        annyangStarted = true;
    }
    else {
        document.getElementById("speechButton").src = "img/mic_off.png";
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
