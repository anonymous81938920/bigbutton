const button = document.getElementById('big-red-button');
const audioFiles = [
    'assets/0.mp3',
    'assets/1.mp3',
    'assets/2.mp3',
    'assets/3.mp3',
    'assets/4.mp3'
];

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioBuffers = [];

function loadSound(url, index) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            audioBuffers[index] = buffer;
        });
}

audioFiles.forEach((file, index) => {
    loadSound(file, index);
});

let lastPlayedIndex = -1;

button.addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * audioBuffers.length);
    } while (randomIndex === lastPlayedIndex);

    lastPlayedIndex = randomIndex;
    const buffer = audioBuffers[randomIndex];

    if (buffer) {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);
    }
});
