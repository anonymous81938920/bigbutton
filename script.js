const button = document.getElementById("big-red-button");
const audioFiles = [
  "assets/006.wav.mp3",
  "assets/016.wav.mp3",
  "assets/000_2.wav.mp3",
  "assets/020.wav.mp3",
  "assets/006_2.wav.mp3",
  "assets/017.wav.mp3",
  "assets/007.wav.mp3",
  "assets/001_2.wav.mp3",
  "assets/005.wav.mp3",
  "assets/015.wav.mp3",
  "assets/007_2.wav.mp3",
  "assets/014.wav.mp3",
  "assets/004.wav.mp3",
  "assets/002_2.wav.mp3",
  "assets/018.wav.mp3",
  "assets/008.wav.mp3",
  "assets/001.wav.mp3",
  "assets/011.wav.mp3",
  "assets/010.wav.mp3",
  "assets/000.wav.mp3",
  "assets/004_2.wav.mp3",
  "assets/009.wav.mp3",
  "assets/019.wav.mp3",
  "assets/009_2.wav.mp3",
  "assets/003_2.wav.mp3",
  "assets/002.wav.mp3",
  "assets/012.wav.mp3",
  "assets/013.wav.mp3",
  "assets/003.wav.mp3",
  "assets/008_2.wav.mp3",
];

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioBuffers = new Array(audioFiles.length);
let shuffledIndices = [];
let currentIndex = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeAndShuffle() {
  shuffledIndices = shuffle([...Array(audioFiles.length).keys()]);
}

function loadSound(url, index) {
  fetch(url)
    .then((response) => response.arrayBuffer())
    .then((data) => audioContext.decodeAudioData(data))
    .then((buffer) => {
      audioBuffers[index] = buffer;
    });
}

audioFiles.forEach((file, index) => {
  loadSound(file, index);
});

initializeAndShuffle();

button.addEventListener("click", () => {
  if (currentIndex >= shuffledIndices.length) {
    initializeAndShuffle();
    currentIndex = 0;
  }

  const audioIndex = shuffledIndices[currentIndex];
  const buffer = audioBuffers[audioIndex];

  if (buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
  }

  currentIndex++;
});