const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const volumeControl = document.getElementById("volume");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const playlist = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song.mp5"];
let currentSongIndex = 0;

function loadSong() {
    audio.src = playlist[currentSongIndex];
    audio.load();
}



playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerText = "Pause";
    } else {
        audio.pause();
        playPauseButton.innerText = "Play";
    }
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 ) % playlist.length;
    loadSong();
    audio.play();
});

nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong();
    audio.play();
});

audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong();
    audio.play();
});