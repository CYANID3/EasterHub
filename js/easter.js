document.addEventListener('DOMContentLoaded', function() {
    let secretCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'KeyB',
        'KeyA'
    ];

    let inputCode = [];
    let audio = new Audio();
    audio.src = "./music/ntro_music.mp3";
    audio.preload = 'auto';

    document.addEventListener('keydown', function(e) {
    inputCode.push(e.code);

        if (inputCode.length > secretCode.length) {
            inputCode.shift();
        }

        if (inputCode.toString() === secretCode.toString()) {
            audio.play();
            let hiddenText = document.createElement('div');
            hiddenText.textContent = "Хуй соси";
            document.querySelector(".content").appendChild(hiddenText);

            inputCode = [];
        }
    });
});
