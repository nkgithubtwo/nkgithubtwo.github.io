let tasks = [];

let delete_task = function (event) {
  let id = event.target.id;
  let element_id = `li_${id}`;
  // console.log(id);
  let elem = document.getElementById(element_id);
  elem.remove();

  let arr = id.split("_");
  let index = arr[1];
  tasks.splice(index, 1);
};
let edit_task = function (event) {
  let id = event.target.id;
  let edit_task = prompt("");
  tasks[id] = edit_task;
  display();
};

let display = function () {
  let ul = document.getElementById("task_list");
  ul.innerText = "";
  for (let i = 0; i < tasks.length; i++) {
    let single_task = tasks[i];
    let new_elem = document.createElement("li");
    new_elem.innerText = single_task;

    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", delete_task);
    btn.id = `btn_${i}`;

    new_elem.id = `li_btn_${i}`;

    let edit_btn = document.createElement("button");
    edit_btn.innerText = "EDIT";
    edit_btn.id = `${i}`;
    edit_btn.addEventListener("click", edit_task);

    let check_task = function (event) {
      if (event.target.tagName === "INPUT") {
        if (event.target.classList.toggle("checked")) {
               console.log(event.target);
        }
      }
    };

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    check.addEventListener("click", check_task);

    //  console.log(check)
    new_elem.appendChild(btn);
    ul.appendChild(new_elem);
    new_elem.appendChild(edit_btn);

    new_elem.appendChild(check);
  }
};

let add_task = function () {
  let input = document.getElementsByName("task")[0];
  let val = input.value;
  tasks.push(val);
  display();
  // console.log(tasks);
};

let btn = document.getElementById("add_task_button");
btn.addEventListener("click", add_task);
