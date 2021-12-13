function multiply(a) {
  function mul1(b) {
    function mul2(c) {
      return a * b * c;
    }
    return mul2;
  }
  return mul1;
}

function func() {
  let num1 = document.getElementsByClassName("number1")[0].value;
  let num2 = document.getElementsByClassName("number2")[0].value;
  let num3 = document.getElementsByClassName("number3")[0].value;

  if (num1 == "") {
    alert("Enter Number 1 First");
  } else if (num2 == "") {
    alert("Enter Number 2 First");
  } else if (num3 == "") {
    alert("Enter Number 3 First");
  } else {
    let res = multiply(num1)(num2)(num3);

    console.log(res);

    document.getElementById("result").innerText = "Ans : " + res;
  }
}
