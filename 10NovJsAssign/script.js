// **********-------- Ques No - 1 Solution ---------***********

function generateArr() {
  let num1 = Number(document.getElementById("numberOne").value);
  let num2 = Number(document.getElementById("numberTwo").value);

  let arr1 = [];

  for (let i = num1 + 1; i < num2; i++) {
    arr1.push(" " + i + " ");
  }
  document.getElementById("result1").innerText = arr1;
}

//******------   Ques No - 2  Solution ------*******

let arr2 = [];

function addNumber() {
  let val = document.getElementById("add").value;
  if (val == "") {
    alert("Enter a value...");
  } else {
    arr2.push(" " + val + " ");
    console.log(arr2);

    document.getElementById("arrItems").innerText = " " + arr2 + " ";
    document.getElementById("add").value = "";
  }
}

function findFreqNum() {
  let temp = 0;
  let count = 0;
  let flag;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = i; j < arr2.length; j++) {
      if (arr2[i] == arr2[j]) count++;
    }
    if (count > temp) {
      temp = count;
      flag = i;
    }
    count = 0;
  }

  document.getElementById("result2").innerText =
    "Ans. : " + arr2[flag] + " " + " (" + temp + " times)";
}

// ******------   Ques No - 3  Solution ------*******

function primecheck() {
  let inputNumber = document.getElementById("num").value;

  if (inputNumber == "") {
    document.getElementById("result").innerText = "Please enter a number ..";
  } else if (!Number.isInteger(Number(inputNumber))) {
    document.getElementById("result").innerText =
      "Please enter valid number ..";
  } else {
    if (inputNumber % 2 == 0) {
      document.getElementById("result").innerText = "Ans : Even Number";
    } else {
      document.getElementById("result").innerText = "Ans : Odd Number";
    }
  }
}
