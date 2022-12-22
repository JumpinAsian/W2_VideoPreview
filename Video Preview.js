

// var vid = document.getElementById("#video")

// var vid = document.createElement("VIDEO");

// var vid = document.getElementById("myVideo").paused;
// Syntax     videoObject.paused
// video.currentTime = 0;

// Set video volume to 20%: document.getElementById("myVideo").volume = 0.2;
// Syntax     videoObject.volume     (returns the volume property)
// Syntax     videoObject.volume = number     (sets the volume property)
// number = must be between 0.0 to 1.0. (0.0 is silent/mute) (1.0 is 100%, also default)

// var video = document.getElementById(id).volume = 0.0;
// var video = document.getElementById(id).paused;


function playVideo(video) {
    video.play();
}

function pauseVideo(video) {
    video.pause();
}