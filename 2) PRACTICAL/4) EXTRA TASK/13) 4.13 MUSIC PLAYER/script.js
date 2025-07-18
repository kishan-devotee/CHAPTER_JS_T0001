console.log("Welcome");

let songIndex = 0;
let audioElement = new Audio('assets/Audio/Audio.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItemContainer = document.getElementById('songItemContainer');
let prevBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');
let isShuffle = false;
let shuffleBtn = document.querySelector('#shuffle')

let songs = [
    { songName: "Warriyo", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", coverPath: "https://plus.unsplash.com/premium_photo-1664112065830-5819554d0ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" },
    { songName: "Cielo", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", coverPath: "https://media.istockphoto.com/id/905234844/photo/listening-music-smart-phone-connected-to-car-audio-system.webp?b=1&s=170667a&w=0&k=20&c=F2u9uO3VPRB1GhEWDo3J64hay4tBQ-hVmbDtsJReKeQ=" },
    { songName: "DEAF KEV", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", coverPath: "https://images.unsplash.com/photo-1548621641-6aa2e973a768?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y292ZXIlMjBwaG90byUyMG11c2ljfGVufDB8fDB8fHww" },
    { songName: "Different Heaven ", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", coverPath: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y292ZXIlMjBwaG90byUyMG11c2ljfGVufDB8fDB8fHww" },
    { songName: "Janji-Heroes", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", coverPath: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdmVyJTIwcGhvdG8lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D" },
    { songName: "joenson Will", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", coverPath: "https://images.unsplash.com/photo-1483032469466-b937c425697b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdmVyJTIwcGhvdG8lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D" },
    { songName: "Itsuta - Salam", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", coverPath: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdmVyJTIwcGhvdG8lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D" },
    { songName: "viega Dena", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", coverPath: "https://media.istockphoto.com/id/1249932784/photo/audio-book-concept-headphones-and-book-over-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=TR4cdMXOVEKJSFOhEuY2QIzaKQBeO6cT9KVbb5N3BBg=" },
    { songName: "Istumbila kumbod", filePath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", coverPath: "https://media.istockphoto.com/id/905234844/photo/listening-music-smart-phone-connected-to-car-audio-system.webp?b=1&s=170667a&w=0&k=20&c=F2u9uO3VPRB1GhEWDo3J64hay4tBQ-hVmbDtsJReKeQ=" },
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
    songs.unshift({ songName, filePath, coverPath });
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
    if (progress >= 100) {
        songIndex++;
    }
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

let PlayerCommand = () => {
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

prevBtn.addEventListener('click', () => {
    if (isShuffle) {
        songIndex = Math.floor(Math.random() * songs.length);
     
        console.log(songIndex);
    }else {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
    }
    makeAllPlays();
    PlayerCommand()
})

nextBtn.addEventListener('click', () => {
    if (isShuffle) {
        songIndex = Math.floor(Math.random() * songs.length);
    }else {
        songIndex = (songIndex + 1) % songs.length;
    }
    makeAllPlays();
    PlayerCommand()
})

audioElement.addEventListener('ended', () => {
    if (isShuffle) {
        songIndex = Math.floor(Math.random() * songs.length);
    } else {
        console.log(songIndex,songs.length);
        songIndex = songIndex % songs.length;
    }
    makeAllPlays();
    PlayerCommand()
});


shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    if (isShuffle) {
        shuffleBtn.style.color = "green";
    } else {
        shuffleBtn.style.color = "white";
    }
    loadSongs();
});

loadSongs();
