console.log("Welcome To Spotify");
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("progressbar");
let gif=document.getElementById("gif");
let mastersongname=document.getElementById("mastersongname");
let songItems=Array.from(document.getElementsByClassName('songitems'));
//let time=document.getElementById("time1");
let songs = [
    { songName: "Jeev-Rangala", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Deva Shree Ganesha", filePath: "songs/2.mp3", coverPath: "covers/3.jpeg" },
    { songName: "Ganpati stotram", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg" },
    { songName: "Radha hi bawri", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg" }
];


songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
    // let img = element.querySelector('img');
    // let songNameElement = element.querySelector('.songName');
    // img.src = songs[i].coverPath;
    // songNameElement.innerText = songs[i].songName;

});




//play and pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0; 
    }
})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
     
    })
     
}


Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        //time.innerText=audioElement.currentTime;
        gif.style.opacity=1;
        mastersongname.innerText=songs[index-1].songName;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        audioElement.addEventListener('timeupdate',()=>{
            progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
            progressBar.value=progress;
            const currentTimeDisplay1 = document.getElementById(`time${index}`);
            currentTimeDisplay1.innerText = formatTime(audioElement.currentTime);  
            // if(audioElement.currentTime>0){
            //     audioElement.currentTime=0;
            //     audioElement.play();
            //     currentTimeDisplay1.innerText = formatTime(audioElement.currentTime);
            // }
            // else{
            //     
            // }
            
           // e.target.innerText=formatTime(audioElement.currentTime);
           //document.getElementById(e.target.id).innerHTML=formatTime(audioElement.currentTime); 
        })

    });
});

document.getElementById("next").addEventListener('click',()=>{
       if(index>=4){
        index=0;
       }
       else{
         index=index+1; 
       }
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        mastersongname.innerText=songs[index-1].songName;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

document.getElementById("previous").addEventListener('click',()=>{
    if(index<=0){
     index=0;
    }
    else{
      index=index-1; 
    }
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        mastersongname.innerText=songs[index-1].songName;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})


function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}





























