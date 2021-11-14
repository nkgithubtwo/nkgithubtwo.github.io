function func(new_id) {
  let id1 = document.getElementById("b1");
  let id2 = document.getElementById("b2");
  let id3 = document.getElementById("b3");

  if (new_id === id1.value) {
    if (id1.innerText == "+") {
      document.getElementById("ans1").style.display = "block";
      id1.innerText = "-";
    } else {
      document.getElementById("ans1").style.display = "none";
      id1.innerText = "+";
    }
  } else if (new_id === id2.value) {
    if (id2.innerText == "+") {
      document.getElementById("ans2").style.display = "block";
      id2.innerText = "-";
    } else {
      document.getElementById("ans2").style.display = "none";
      id2.innerText = "+";
    }
  } else {
    if (id3.innerText == "+") {
      document.getElementById("ans3").style.display = "block";
      id3.innerText = "-";
    } else {
      document.getElementById("ans3").style.display = "none";
      id3.innerText = "+";
    }
  }
}
