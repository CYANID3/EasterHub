// Этот блок кода будет выполнен, когда весь HTML-документ будет полностью загружен
document.addEventListener("DOMContentLoaded", function () {

  // Массив с последовательностью клавиш для активации пасхалки
  // В моём случае это Konami-код
  let secretCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];

  // Массив, в который будут записываться введенные пользователем клавиши
  let inputCode = [];

  // Этот блок кода будет выполняться при нажатии клавиши на клавиатуре
  document.addEventListener("keydown", function (e) {

    // Добавляем код нажатой клавиши в массив inputCode
    inputCode.push(e.code);

    // Если длина массива inputCode превышает длину secretCode, удаляем первый элемент
    if (inputCode.length > secretCode.length) {
      inputCode.shift();
    }

    // Если введенная последовательность совпадает с секретной, выполняем необходимые действия
    // В моем случе это вывод текста в блок .content__text
    if (inputCode.toString() === secretCode.toString()) {

      let hiddenText = document.querySelector(".content__text");
      hiddenText.textContent = "You find an easter egg!"

      // После выполнения действий очищаем массив inputCode   
      inputCode = [];
    }
  });
});
