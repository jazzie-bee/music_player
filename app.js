let currentMusic = 0;

// Audio source
const music = document.querySelector('#audio');

// Select everything that needs behaviors. I.e. song info needs to change w/ audio, slide seeker, timestamps and images need to change & play/pause icons
const seekSlider = document.querySelector('.seek-slider');
const songName = document.querySelector('.song');
const artistName = document.querySelector('.artist');
const trackCover = document.querySelector('.cover');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.musicduration')
const musicContainer = document.getElementById('.player');
const playBtn = document.querySelector('.fa-circle-play');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// || Setup music details and time
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

setMusic(0);

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
    return `${min}:${sec}`;
}

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    trackCover.classList.add('play');
}

// || Event listeners; play/pause song
playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('fa-circle-pause');

    if(playBtn.className.includes('fa-circle-play')){
        music.pause();
    }
    if(playBtn.className.includes('fa-circle-pause')){
        music.play();
    }
})

// || Previous song
prevBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})

// || Next song
nextBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

// || Seek bar progress
setInterval(() => {
    seekSlider.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekSlider.max)){
        nextBtn.click();
        playBtn.classList.remove('pause');
        trackCover.classList.add('play');
    }
}, 500)

seekSlider.addEventListener('change', () => {
    music.currentTime = seekSlider.value;
})