// --------------------     Question 01     -------------------------

document.getElementById("btn_result1").addEventListener("click", cb);

function cb() {
  let factNum = document.getElementById("factNum").value;
  if (isNaN(factNum)) {
    document.getElementById("factNum").value = "";
    document.getElementById("result1").innerHTML =
      "Input Correct Numeric Value...";
  } else {
    let result = factorial(factNum);
    document.getElementById("result1").innerHTML = "Ans : " + result;
  }
}
function factorial(num) {
  if (num == 1) return num;
  return num * factorial(--num);
}

// ------------------------      Question 02      ------------------------

let pin = -1;

const set_pin = () => {
  let pin_one = document.getElementById("pin_one").value;
  let pin_two = document.getElementById("pin_two").value;

  if (isNaN(pin_one) || isNaN(pin_two)) {
    alert("Enter Numeric Pin only");
  } else if (pin_one.length == 4 && pin_two.length == 4) {
    if (pin_one == pin_two) {
      pin = pin_one;
      document.getElementById("pin_one").value = "";
      document.getElementById("pin_two").value = "";
      alert("You Sccessfully set Pin. Now you can unlock the Device..");
      document.getElementById("hide").style.display = "none";
    } else {
      alert("Pin dont't match..");
    }
  } else {
    alert("Pin should be 4 Digit only");
  }
};

document.getElementById("set_pin_btn").addEventListener("click", set_pin);

let digit_one = document.getElementById("btn-pin-first");
let digit_second = document.getElementById("btn-pin-second");
let digit_third = document.getElementById("btn-pin-third");
let digit_fourth = document.getElementById("btn-pin-fourth");

document.getElementById("num_1").onclick = button_click;
document.getElementById("num_2").onclick = button_click;
document.getElementById("num_3").onclick = button_click;
document.getElementById("num_4").onclick = button_click;
document.getElementById("num_5").onclick = button_click;
document.getElementById("num_6").onclick = button_click;
document.getElementById("num_7").onclick = button_click;
document.getElementById("num_8").onclick = button_click;
document.getElementById("num_9").onclick = button_click;
document.getElementById("num_0").onclick = button_click;

document.getElementById("clear").onclick = clear_pin;

let i = 0;
function button_click() {
  let pin_str = pin.toString();
  var arr_pin = pin_str.split("");
  if (pin == -1) {
    alert("First Set Pin");
  } else {
    document.getElementById(`digit_${i}`).innerText = this.innerText;
    if (i == 3 && arr_pin[i] == this.innerText) {
      window.location.href = "welcome.html";
    } else if (arr_pin[i] == this.innerText && i < 4) {
      ++i;
    } else if (i < 4) {
      alert("Pin Don't Match. Please enter again..");
      {
        document.getElementById(`digit_${0}`).innerText = "";
        document.getElementById(`digit_${1}`).innerText = "";
        document.getElementById(`digit_${2}`).innerText = "";
        document.getElementById(`digit_${3}`).innerText = "";

        i = 0;
      }
    }
  }
}

function clear_pin() {
  document.getElementById(`digit_${0}`).innerText = "";
  document.getElementById(`digit_${1}`).innerText = "";
  document.getElementById(`digit_${2}`).innerText = "";
  document.getElementById(`digit_${3}`).innerText = "";
  i = 0;
}

//-------------------    Question 03      -----------------------

let btn_click = document.getElementById("btn_result3");

btn_click.addEventListener("click", func);

function func() {
  document.getElementById("result3").innerText = "";
  let input = document.getElementById("input").value;
  if (isNaN(input)) {
    document.getElementById("result3").innerText =
      "Enter Correct Numeric Value...";
  } else {
    for (let i = 1; i <= input; i++) {
      if (i % 3 == 0 && i % 5 == 0)
        document.getElementById("result3").innerText += ` ${"FizzBuzz"} `;
      else if (i % 3 == 0)
        document.getElementById("result3").innerText += ` ${"Fizz"} `;
      else if (i % 5 == 0)
        document.getElementById("result3").innerText += ` ${"Buzz"} `;
      else document.getElementById("result3").innerText += ` ${i} `;
    }
  }
}
