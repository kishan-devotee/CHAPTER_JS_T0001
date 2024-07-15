console.log("Welcome");

let songIndex = 0;
let audioElement = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemContainer = document.getElementById('songItemContainer');
let prevBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let isShuffle = false;
let shuffleBtn = document.querySelector('#shuffle')

let songs = [
    { songName: "Warriyo", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", coverPath: "assets/covers/1.jpg" },
    { songName: "Cielo", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", coverPath: "assets/covers/2.jpg" },
    { songName: "DEAF KEV", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", coverPath: "assets/covers/3.jpg" },
    { songName: "Different Heaven ", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", coverPath: "assets/covers/4.jpg" },
    { songName: "Janji-Heroes", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", coverPath: "assets/covers/5.jpg" },
    { songName: "joenson Will", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", coverPath: "assets/covers/6.jpg" },
    { songName: "Itsuta - Salam", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", coverPath: "assets/covers/7.jpg" },
    { songName: "viega Dena", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", coverPath: "assets/covers/8.jpg" },
    { songName: "Istumbila kumbod", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", coverPath: "assets/covers/9.jpg" },
    { songName: "disti mumbra", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", coverPath: "assets/covers/10.jpg" },
]

const loadSongs = () => {
    songItemContainer.innerHTML = '';
    songs.forEach((song, i) => {
        let songItem = document.createElement('div');
        songItem.classList.add('songItem');
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="cover">
            <span class="songName">${song.songName}</span>
            <span class="songlistplay">
                <span class="timestamp">
                    Arijit Singh 
                    <i id="${i}" class="far songItemPlay fa-play-circle"></i>
                    <i id="delete-${i}" class="fas fa-trash-alt songItemDelete"></i>
                </span>
            </span>
        `;
        songItemContainer.appendChild(songItem);
    });
    setSongItemEvents();
}

const setSongItemEvents = () => {
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        element.addEventListener('click', (e) => {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        });
    });

    document.querySelectorAll('.songItemDelete').forEach((element) => {
        element.addEventListener('click', (e) => {
            const deleteIndex = parseInt(e.target.id);
            songs.splice(deleteIndex, 1);
            loadSongs();
        });
    });
}

document.getElementById('addSongForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const songName = document.getElementById('songNameInput').value;
    const filePath = document.getElementById('filePathInput').value;
    const coverPath = document.getElementById('coverPathInput').value;
    songs.push({ songName, filePath, coverPath });
    loadSongs();
    e.target.reset();
});

const makeAllPlays = () => {
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});


// shuffleBtn.addEventListener('click', () => {
//     isShuffle =!isShuffle;
//     if (isShuffle) {

//     } else {
//     }
//     loadSongs();
// });

loadSongs();
