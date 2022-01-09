var container = document.getElementById("result");

function randomNumbers() {
  for (var i = 0; i < 30; i++) {
    var value = Math.ceil(Math.random() * 100);

    var array_ele = document.createElement("div");

    array_ele.classList.add("block");

    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

document.getElementById("new_arr").addEventListener("click", randomNumbers);

function swap(element1, elements2) {
  return new Promise((resolve) => {
    var temp = element1.style.transform;
    element1.style.transform = elements2.style.transform;
    elements2.style.transform = temp;

    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(elements2, element1);
        resolve();
      }, 300);
    });
  });
}

async function Bubblesorting(delay = 100) {
  var blocks = document.querySelectorAll(".block");

  for (var i = 0; i < blocks.length; i += 1) {
    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      blocks[j].style.backgroundColor = "#fa5a65";
      blocks[j + 1].style.backgroundColor = "#fa5a65";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      console.log("run");
      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      }

      blocks[j].style.backgroundColor = "#2a9cde";
      blocks[j + 1].style.backgroundColor = "#2a9cde";
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "lightgreen";
  }
}

document.getElementById("sort_num").addEventListener("click", Bubblesorting);
