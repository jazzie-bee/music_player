let currentMusic = 0;

const music = document.querySelector('#audio');
const seekSlider = document.querySelector('.seek-slider');
const trackTitle = document.querySelector('.track-title');
const trackArtist = document.querySelector('.track-artist');
const trackArt = document.querySelector('.track-art');
const currentTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration')
const playBtn = document.querySelector('.playpause');
const pauseBtn = document.querySelector('.playpause');
const shuffleBtn = document.querySelector('.shuffle');
const forwardBtn = document.querySelector('.next');
const backwardBtn = document.querySelector('.prev');
const listBtn = document.querySelector('.list');

playBtn.addEventListener("click", function () {
    music.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", function () {
    music.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
});

let songs = [
    {
        name: 'Futuristic Beat',
        path: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\music\song-1-futuristic-beat-146661.mp3',
        artist: 'RoyaltyFreeMusic',
        cover: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\images\futuristic-beat-joel-filipe-99neAF8kqhg-unsplash-square.jpg'
    },
    {
        name: 'Chapter Two (ft. Carrie)',
        path: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\music\song 2-leonell-cassio-chapter-two-ft-carrie-114909.mp3',
        artist: 'Leonell Cassio, Carrie',
        cover: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\images\leo-mr-harter-bfRtDB9EHbQ-unsplash-square.jpg'
    },
    {
        name: 'Forest Lullaby',
        path: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\music\song 3-forest-lullaby-110624.mp3',
        artist: 'Lesfm',
        cover: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\images\forest-kyle-glenn-SrASYZZpyjw-unsplash-square.jpg'
    },
    {
        name: 'Futuristic Timelaspe',
        path: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\music\song 4-futuristic-timelapse-11951.mp3',
        artist: 'Coma-Media',
        cover: 'C:\Users\Jaz\OneDrive\Documents\Code\@projects\music player\images\future-octavian-rosca-UfCYo7zHyY8-unsplash-square.jpg'
    },
]