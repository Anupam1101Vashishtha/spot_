
// let audioElement = new Audio('gods.mp3')
// audioElement.play();
// if we call the play method along with audioElement then song will get play.

// But what we want is that .. only when we click on the play button then only it gets played 


let songIndex = 0;
let audioElement = new Audio("lucille.mp3");
let masterPlay = document.getElementById('masterPlay')
let myProgessBar = document.getElementById('myProgressBar')


let songs = [
    {songName: "Lucille", filePath: "lucille.mp3"},
    {songName: "gambler", filePath: "gambler.mp3"},
    {songName: "god's gonna cut you down", filePath: "gods.mp3"},
    {songName: "succession theme song", filePath: "succession.mp3"},
    {songName: "stand by me", filePath: "stand by me.mp3"},
]


// handling play - pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
    }
})


audioElement.addEventListener('timeupdate',()=>{
    console.log('time updating');
    // update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgessBar.value = progress;
})

 