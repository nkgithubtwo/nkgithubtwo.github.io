let ball = document.getElementById("ball");
let intervals,
  arrowKeyPressed = 0;

function moveTop() {
  var top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
  ball.style.transition = "0.5s";
  ball.style.top = `${top - 60}px`;
}

function moveBottom() {
  var top = parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
  ball.style.top = `${top + 60}px`;
  ball.style.transition = "0.5s";
}

function moveLeft() {
  var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));

  ball.style.left = `${left - 60}px`;
  ball.style.transition = "0.5s";
}

function moveRight() {
  var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));

  ball.style.left = `${left + 60}px`;
  ball.style.transition = "0.5s";
}

document.addEventListener("keydown", (e) => {
  if (arrowKeyPressed == 0) {
    arrowKeyPressed++;
    if (e.key == "ArrowUp") {
      if (ball.style.top > "0px") {
        intervals = setTimeout(moveTop, 0);
      }
    } else if (e.key == "ArrowDown") {
      intervals = setTimeout(moveBottom, 0);
    } else if (e.key == "ArrowLeft") {
      if (ball.style.left > "0px") {
        intervals = setTimeout(moveLeft, 0);
      }
    } else if (e.key == "ArrowRight") {
      intervals = setTimeout(moveRight, 0);
    }
  }
});

document.addEventListener("keyup", (e) => {
  arrowKeyPressed = 0;
});
