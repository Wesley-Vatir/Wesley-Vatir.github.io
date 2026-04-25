function sayHello() {
  alert("Thanks for visiting my portfolio 👋");
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

const songs = [
  {
    title: 'Summer Vibes',
    artist: 'Electronic Dreams',
    source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://via.placeholder.com/100?text=Album+1'
  }
];

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');

let currentSongIndex = 0;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.source;
  cover.src = song.cover;
}

document.addEventListener('DOMContentLoaded', () => {
  loadSong(songs[currentSongIndex]);

  // WAJIB muted biar bisa autoplay
  audio.muted = true;
  audio.autoplay = true;
  audio.loop = true; // biar muter terus

  audio.play().then(() => {
    // Unmute otomatis pas user gerakin mouse/klik/scroll
    const unmute = () => {
      audio.muted = false;
      document.removeEventListener('mousemove', unmute);
      document.removeEventListener('click', unmute);
      document.removeEventListener('scroll', unmute);
      document.removeEventListener('keydown', unmute);
    };

    document.addEventListener('mousemove', unmute, { once: true });
    document.addEventListener('click', unmute, { once: true });
    document.addEventListener('scroll', unmute, { once: true });
    document.addEventListener('keydown', unmute, { once: true });

  }).catch(err => {
    console.log('Gagal autoplay:', err);
  });
});