var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	var video = document.querySelector("#player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume*100 +"%";

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
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else{
		console.log("unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"

	}
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log("the current volume is " + video.volume*100+"%");
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume*100 +"%";
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("old school")
	video.classList.add('oldSchool')
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("modern")
	video.classList.remove('oldSchool')
})