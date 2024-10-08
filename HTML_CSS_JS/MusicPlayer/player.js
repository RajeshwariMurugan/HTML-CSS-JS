document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const songList = document.getElementById('song-list');
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const songTitle = document.getElementById('song-title');
    const songImage = document.getElementById('song-image');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');

    let isPlaying = false;
    let currentSongIndex = 0;


     let songs = [
        { title: '1000 Jannal Veedu', file: 'AAYIRAM JANAL VEEDU.mp3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiuZwUyHS8ZeRg4EknC_0Qp7rpDxgkSkSWQ&s' },
        { title: 'Indha ooril', file: 'Indha Ooril.mp3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCHRGQFR4sfFBym5mmlp1Wb9wWIHlIF5cTA&s' },
        { title: 'Kovakkara kiliyae', file: 'Kovakkara Kiliyae.mp3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-WAcyOFf_JSOefix1kovTubo8r4QNIPu7Q&s' },
        { title: 'Onna pola ', file: 'ONNA POLA AAMBALAYA OORUKULA.mp3', image: 'data:image/jpeg;base64,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' },

        { title: 'Otrai kannale ', file: 'OTRAI KANNALE UNNAI PAARTHEAN.mp3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzDddYk88belaxoBTGwISzHR5QLp1X9KtnQ&s' },
              ];
   
    function updateSongInfo() {
        const song = songs[currentSongIndex];
        audioPlayer.src = `Music/${song.file}`;
        songTitle.textContent = song.title;
        songImage.src = song.image; 
        audioPlayer.load(); 
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }

    function togglePlayPause() {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        isPlaying = !isPlaying;
        playPauseButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updateSongInfo();
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updateSongInfo();
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }

    function updateProgress() {
        const { currentTime, duration } = audioPlayer;
        progressBar.value = (currentTime / duration) * 100;
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    audioPlayer.addEventListener('timeupdate', updateProgress);

    audioPlayer.addEventListener('ended', nextSong);

    progressBar.addEventListener('input', () => {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });

    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    playPauseButton.addEventListener('click', togglePlayPause);
    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-music"></i> ${song.title}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            updateSongInfo();
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
        });
        songList.appendChild(li);
    });

    updateSongInfo();
});