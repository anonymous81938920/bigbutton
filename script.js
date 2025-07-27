const button = document.getElementById('big-red-button');
const audioFiles = [
    'assets/0.mp3',
    'assets/1.mp3',
    'assets/2.mp3',
    'assets/3.mp3',
    'assets/4.mp3'
];

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const audio = new Audio(audioFiles[randomIndex]);
    audio.play();
});
