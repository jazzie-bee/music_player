let currentMusic = 0;

// Audio source
const music = document.querySelector('#audio');

// Select everything that needs behaviors. I.e. song info needs to change w/ audio, slide seeker, timestamps and images need to change & play/pause icons
const seekSlider = document.querySelector('.seek-slider');
const songName = document.querySelector('.song-name');
const trackArtist = document.querySelector('.track-artist');
const trackCover = document.querySelector('.cover');
const currentTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration')
const playBtn = document.querySelector('.play-pause');
const forwardBtn = document.querySelector('.next');
const backwardBtn = document.querySelector('.prev');

// use click event for contorls. eventListners */ 
// playBtn.addEventListener('click', () => {
//     playBtn.classList.toggle('pause');
//     trackArt.classList.toggle('play');
// })

//Setup music
const setMusic = (i) => {
    seekBar.value = 0;
    let song = song[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    cover.style.backgroundImage = 'url(';{song.cover}')';
}

// Button functions
function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove();
    }
    else{
        song.play();
    }
}