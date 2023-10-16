let currentMusic = 0;

// Audio source
const music = document.querySelector('#audio');

// Select everything that needs behaviors. I.e. song info needs to change w/ audio, slide seeker, timestamps and images need to change & play/pause icons
const seekSlider = document.querySelector('.seek-slider');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist');
const trackCover = document.querySelector('.cover');
const currentTime = document.querySelector('.current-time');
const muiscDuration = document.querySelector('.total-duration')
const playBtn = document.querySelector('.play');
const forwardBtn = document.querySelector('.next');
const backwardBtn = document.querySelector('.prev');

//Setup music
const setMusic = (i) => {
    seekSlider.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    trackCover.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekSlider.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}

// Button functions
// function playPause(){
//     if(ctrlIcon.classList.contains('fa-circle-pause')){
//         song.pause();
//         ctrlIcon.classList.remove('fa-circle-pause');
//         ctrlIcon.classList.add('fa-circle-play');
//     }
//     else{
//         song.play();
//         ctrlIcon.classList.add('fa-circle-pause');
//         ctrlIcon.classList.remove('fa-circle-play');
//     }
// }

// let playTrack = function(icon) {
//     icon.classList.toggle('fa-circle-pause')
// }

// Play music event
playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('fa-circle-pause')){
        music.play();
    } else{
        music.pause();
    }
    playBtn.classList.toggle('fa-circle-pause');
    cover.classList.toggle('fa-circle-play');
    // $(this).find('i').toggleClass('fa-regular fa-circle-pause fa-4x');
})

// || Time formatting
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

setMusic(0);
