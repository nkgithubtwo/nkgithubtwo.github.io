let result = "";
let operation = "";
let operation_new_number = "";

const number_button_clicked = (e) => {
  if (operation == "") {
    result += e.target.dataset.number;
    display(result);
  } else {
    operation_new_number += e.target.dataset.number;
    display(operation_new_number);
  }
};

const add_button_clicked = (e) => {
  operation = "+";

  operation_new_number += e.target.dataset.operation;
  display(operation_new_number);
};

const sub_button_clicked = (e) => {
  operation = "-";

  operation_new_number += e.target.dataset.operation;
  display(operation_new_number);
};

const mul_button_clicked = (e) => {
  operation = "*";

  operation_new_number += e.target.dataset.operation;
  display(operation_new_number);
};

const div_button_clicked = (e) => {
  operation = "/";

  operation_new_number += e.target.dataset.operation;
  display(operation_new_number);
};

const reset_button_clicked = () => {
  operation = "reset";

  result = "";
  operation_new_number = "";
  display(result);
};

const equal_button_clicked = () => {
  result = Number(result) + Number(operation_new_number);
  operation_new_number = "";
  display(result);
};

const display = (value) => {
  document.getElementById("display").innerText = value;
};

let number_buttons = document.querySelectorAll(".number_button");
number_buttons.forEach((single_number_button) => {
  single_number_button.addEventListener("click", number_button_clicked);
});

let add_button = document.querySelector("#add_button");
add_button.addEventListener("click", add_button_clicked);

let sub_button = document.querySelector("#sub_button");
sub_button.addEventListener("click", sub_button_clicked);

let mul_button = document.querySelector("#mul_button");
mul_button.addEventListener("click", mul_button_clicked);

let div_button = document.querySelector("#div_button");
div_button.addEventListener("click", div_button_clicked);

let equal_button = document.querySelector("#equal_button");
equal_button.addEventListener("click", equal_button_clicked);

let reset_button = document.querySelector("#reset_button");
reset_button.addEventListener("click", reset_button_clicked);

