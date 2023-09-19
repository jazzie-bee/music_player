let currentMusic = 0;

// select audio source
const music = document.querySelector('#audio');

// select everything that needs behaviors. I.e. song info needs to change w/ audio, slide seeker, timestamps and images need to change
const seekSlider = document.querySelector('.seek-slider');
const title = document.querySelector('.title');
const trackArtist = document.querySelector('.track-artist');
const trackArt = document.querySelector('.track-art');
const currentTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration')
const playBtn = document.querySelector('.playpause');
const forwardBtn = document.querySelector('.next');
const backwardBtn = document.querySelector('.prev');

// use click event to buttons. eventListners */ 
playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause');
    trackArt.classList.toggle('play');
})

//setup music
