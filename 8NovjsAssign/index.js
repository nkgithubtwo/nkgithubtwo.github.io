//   **********-----   Ques No - 1 Solution ------*********

function calcVol() {
  let height = document.getElementById("h").value;
  let radius = document.getElementById("r").value;

  if (height == "") {
    alert("Enter Height..");
  } else if (radius == "") {
    alert("Enter radius..");
  } else {
    let vol = 3.14 * radius * radius * height;
    document.getElementById("result1").innerText =
      "Volume : " + vol + " cubic meter";
  }
}

function calcCurvedArea() {
  let height = document.getElementById("h").value;
  let radius = document.getElementById("r").value;

  if (height == "") {
    alert("Enter Height..");
  } else if (radius == "") {
    alert("Enter radius..");
  } else {
    let curvedArea = 2 * 3.14 * radius * height;
    document.getElementById("result1").innerText =
      "Curved Area : " + curvedArea + " square meter";
  }
}

function calcTotalArea() {
  let height = document.getElementById("h").value;
  let radius = document.getElementById("r").value;

  if (height == "") {
    alert("Enter Height..");
  } else if (radius == "") {
    alert("Enter radius..");
  } else {
    let totalArea = 2 * 3.14 * radius * (parseInt(height) + parseInt(radius));
    document.getElementById("result1").innerText =
      "Total Area : " + totalArea + " square meter";
  }
}

//   **********-----   Ques No - 2 Solution ------*********

function power() {
  let voltage = document.getElementById("v").value;
  let current = document.getElementById("c").value;

  if (voltage == "") {
    alert("Enter Voltage..");
  } else if (current == "") {
    alert("Enter current..");
  } else {
    let power = voltage * current;
    document.getElementById("result2").innerText = "Ans : " + power + " watt";
  }
}

//   **********-----   Ques No - 3 Solution ------*********

function no_of_walls() {
  let ht = document.getElementById("ht").value; //height of single wall
  let wd = document.getElementById("wd").value; //width of single wall
  let area = document.getElementById("area").value; //given area

  if (ht == "") {
    alert("Enter height..");
  } else if (wd == "") {
    alert("Enter width..");
  } else if (area == "") {
    alert("Enter area..");
  } else {
    let no_of_walls = 0;
    let area_of_single_wall = wd * ht;

    while (area >= area_of_single_wall) {
      no_of_walls++;
      area_of_single_wall += wd * ht;

      document.getElementById("result3").innerText =
        "Ans : " + no_of_walls + " walls";
    }
  }
}
