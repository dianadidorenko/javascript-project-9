// ====================================================================================================
// Практика 1 - Создать список уведомлений с кнопкой закрытия.
// При нажатии на кнопку закрытия уведомление должно пропадать.
// ====================================================================================================

// Перший варіант

// let closeNotification = document.querySelector(".notification__close"),
//   item1 = document.querySelector(
//     ".notification__items .notification__item:nth-child(1)"
//   ),
//   item2 = document.querySelector(
//     ".notification__items .notification__item:nth-child(2)"
//   ),
//   item3 = document.querySelector(
//     ".notification__items .notification__item:nth-child(3)"
//   );

// clickMe1.addEventListener("click", function () {
//   item1.style.display = "none";
// });

// clickMe2.addEventListener("click", function () {
//   item2.style.display = "none";
// });

// clickMe3.addEventListener("click", function () {
//   item3.style.display = "none";
// });

// ====================================================================================================
// Другий варіант

// let items = document.getElementsByClassName("notification__item"),
//   buttons = document.getElementsByClassName("notification__close");

// for (let i = 0; i < items.length; i++) {
//   clickMe1.addEventListener("click", function () {
//     items[0].style.display = "none";
//   });
//   clickMe2.addEventListener("click", function () {
//     items[1].style.display = "none";
//   });
//   clickMe3.addEventListener("click", function () {
//     items[2].style.display = "none";
//   });
// }

// ====================================================================================================
// Оптимізований варіант

let items = document.getElementsByClassName("notification__item"),
  buttons = document.getElementsByClassName("notification__close");

for (let i = 0; i < items.length; i++) {
  close();

  function close() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        items[i].style.display = "none";
      });
    }
  }
}