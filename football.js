// ====================================================================================================
// Практика 2 - Создать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана,
// и мячом размером 100 на 100 пикселей.Сделать так, чтобы при клике мышкой по полю, мяч плавно перемещался
// на место клика.Учтите: необходимо, чтобы центр мяча останавливался именно там, где был совершен клик мышкой.
// Также предусмотрите, чтобы мяч не выходил за границы поля.
// =========================================================================================================

let ball = document.getElementById("ball");

field.addEventListener("click", function (e) {
  ball.style.left = e.pageX - 50 + "px";
  ball.style.top = e.pageY - 50 + "px";

  if (e.pageX < 50) {
    ball.style.left = e.pageX + 20 + "px";
    ball.style.top = e.pageY + 20 + "px";
  }
  if (e.pageY < 1150) {
    ball.style.top = e.pageY + "px";
    ball.style.left = e.pageX + "px";
  }
  if (e.pageY > 1100) {
    ball.style.right = e.pageX + "px";
    ball.style.top = e.pageY - 100 + "px";
  }
  if (e.pageX > 1750) {
    ball.style.left = e.pageX - 100 + "px";
  }
});

const ballJump = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(5)" },
  { transform: "rotate(360deg) scale(1)" },
  { transform: "rotate(360deg) scale(1.5)" },
  { transform: "rotate(360deg) scale(1)" },
];

const ballTiming = {
  duration: 7000,
  iterations: 1,
};

const ballMove = document.querySelector(".ball");

field.addEventListener("click", () => {
  ballMove.animate(ballJump, ballTiming);
});
