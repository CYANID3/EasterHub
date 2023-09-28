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

    document.addEventListener('keydown', function(e) {
    inputCode.push(e.code);

        if (inputCode.length > secretCode.length) {
            inputCode.shift();
        }

        if (inputCode.toString() === secretCode.toString()) {
            let hiddenText = document.createElement('div');
            hiddenText.textContent = "Хуй соси";
            document.querySelector(".content").appendChild(hiddenText);

            inputCode = [];
        }
    });
});
