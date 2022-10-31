var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	// video.defaultPlaybackRate(4)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();

})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video Speed = " + video.playbackRate);
	video.playbackRate = video.playbackRate* .9;
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Video Speed = " + video.playbackRate);
	video.playbackRate = video.playbackRate* 1.1;
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Video Time = " + video.time);
	video.time = video.time + 10;
})