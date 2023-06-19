// ====================================================================================================
// Практика 3 - Создать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
// =========================================================================================================

// button.addEventListener("click", function () {
//   red.style.background = "red";
//   button.addEventListener("click", function () {
//     if (red.style.background == "red") {
//       red.style.background = "grey";
//       yellow.style.background = "yellow";
//     }
//     button.addEventListener("click", function () {
//       if (yellow.style.background == "yellow") {
//         yellow.style.background = "grey";
//         green.style.background = "green";
//       }
//       button.addEventListener("click", function () {
//         if (green.style.background == "green") {
//           green.style.background = "grey";
//         }
//       });
//     });
//   });
// });

// =========================================================================================================
// Другий варіант - не подобається

// let items = document.getElementsByClassName("item");

// for (let i = 0; i < items.length; i++) {
//   changeColor();

//   function changeColor() {
//     button.addEventListener("click", function () {
//       items[0].style.background = "grey";
//       if (items[0].style.background == "grey") {
//         items[0].style.background = "red";
//         button.addEventListener("click", function () {
//           if (items[0].style.background == "red") {
//             items[0].style.background = "grey";
//             items[1].style.background = "yellow";
//             button.addEventListener("click", function () {
//               if (items[1].style.background == "yellow") {
//                 items[1].style.background = "grey";
//                 items[2].style.background = "green";
//                 button.addEventListener("click", function () {
//                   if (items[2].style.background == "green") {
//                     items[2].style.background = "grey";
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// }

// =========================================================================================================
// Третій варіант

button.addEventListener("click", function () {
  if (red.style.backgroundColor == "red") {
    red.style.backgroundColor = "grey";
    yellow.style.backgroundColor = "yellow";
  } else if (yellow.style.backgroundColor == "yellow") {
    yellow.style.backgroundColor = "grey";
    green.style.backgroundColor = "green";
  } else if (green.style.backgroundColor == "green") {
    green.style.backgroundColor = "grey";
    red.style.backgroundColor = "red";
  }
});
