var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	var video = document.querySelector("#player1");
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
	console.log("TimeStamp: " + video.currentTime);
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
})

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == false){
		console.log("muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "mute"
	}
	else{
		console.log("unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "unmute"

	}
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log("the current volume is " + video.volume);
	video.volume = this.volume/100;

	innerHtml()
})
