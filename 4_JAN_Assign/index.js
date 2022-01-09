// ****************************************  Tic Tac Toe Game *********************************************//

const heading = document.querySelector(".heading");
const resetButton = document.querySelector(".reset-btn");
const gameCells = document.querySelectorAll(".cell");

var isXturn = true;
var count = 0;
function eventHandler(event) {
  const classList = event.target.classList;
  if (classList.length > 1) {
    return;
  }
  if (isXturn) {
    classList.add("X");
    isXturn = false;
    heading.textContent = "O's turn";
  } else {
    classList.add("O");
    isXturn = true;
    heading.textContent = "X's turn";
  }
  count++;
  if (count >= 5) {
    checkGameStatus();
  }
}

for (cell of gameCells) {
  cell.addEventListener("click", eventHandler);
}

const resetHandler = () => {
  window.location.reload(true);
};

resetButton.addEventListener("click", resetHandler);

const checkGameStatus = () => {
  const index0classList = gameCells[0].classList;
  const index1classList = gameCells[1].classList;
  const index2classList = gameCells[2].classList;
  const index3classList = gameCells[3].classList;
  const index4classList = gameCells[4].classList;
  const index5classList = gameCells[5].classList;
  const index6classList = gameCells[6].classList;
  const index7classList = gameCells[7].classList;
  const index8classList = gameCells[8].classList;

  if (index0classList.contains("O")) {
    if (index1classList.contains("O") && index2classList.contains("O")) {
      alert("O Won");
    } else if (index3classList.contains("O") && index6classList.contains("O")) {
      alert("O Won");
    } else if (index4classList.contains("O") && index8classList.contains("O")) {
      alert("O Won");
    }
  }

  if (
    index3classList.contains("O") &&
    index4classList.contains("O") &&
    index5classList.contains("O")
  ) {
    document.getElementById('result').innerText ="Result: O Won";
}
    if (
      index6classList.contains("O") &&
      index7classList.contains("O") &&
      index8classList.contains("O")
    ) {
        document.getElementById('result').innerText ="Result: O Won";
    }

    if (
        index1classList.contains("O") &&
        index4classList.contains("O") &&
        index7classList.contains("O")
      ) {
        document.getElementById('result').innerText ="Result: O Won";
    }

      if (
        index2classList.contains("O") &&
        index5classList.contains("O") &&
        index8classList.contains("O")
      ) {
        document.getElementById('result').innerText ="Result: O Won";
    }


      if (index0classList.contains("X")) {
        if (index1classList.contains("X") && index2classList.contains("X")) {
            document.getElementById('result').innerText ="Result: X Won";
        } else if (index3classList.contains("X") && index6classList.contains("X")) {
            document.getElementById('result').innerText ="Result: X Won";
        } else if (index4classList.contains("X") && index8classList.contains("X")) {
            document.getElementById('result').innerText ="Result: X Won";
        }
      }
    
      if (
        index3classList.contains("X") &&
        index4classList.contains("X") &&
        index5classList.contains("X")
      ) {
        document.getElementById('result').innerText ="Result: X Won";
    }
        if (
          index6classList.contains("X") &&
          index7classList.contains("X") &&
          index8classList.contains("X")
        ) {
            document.getElementById('result').innerText ="Result: X Won";
        }

        if (
            index1classList.contains("X") &&
            index4classList.contains("X") &&
            index7classList.contains("X")
          ) {
            document.getElementById('result').innerText ="Result: X Won";
          }
    
          if (
            index2classList.contains("X") &&
            index5classList.contains("X") &&
            index8classList.contains("X")
          ) {
            document.getElementById('result').innerText ="Result: X Won";
        }
  
};

// *********************************  Form Validaton **********************************************//

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password1 = id("password1"),
  password2 = id('password2'),
  form = id("form"),
  errorMsg = classes("error");

  let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
      
    }
    else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "Name cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password1, 2, "Password cannot be blank");
    engine(password2, 3, "Confirm Password cannot be blank");

   
  });


