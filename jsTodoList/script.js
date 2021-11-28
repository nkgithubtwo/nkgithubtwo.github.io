var todoArray = [];
let temp = 0;
myFunc = () => {
  temp++;
  var inputValue = document.getElementById("textValue");

  if (inputValue.value == "") {
    alert("Please input something....!!!");
  } else {
    var idval = document.createElement("span");
    idval.style.fontSize = "18px";
    idval.style.marginTop = "25px";

    // for task addtion
    var task = document.createElement("span");
    task.innerHTML = inputValue.value;
    task.style.fontSize = "20px";
    task.style.marginLeft = "30px";
    task.style.color = "white";

    //for edit button
    var edit = document.createElement("button");
    edit.innerHTML = "EDIT";
    edit.style.fontSize = "17px";
    edit.style.padding = "3px 10px";
    edit.style.marginLeft = "30px";
    edit.style.width = "100px";
    edit.style.marginTop = "10px";

    // for update and save the task again.
    edit.onclick = function () {
      if (edit.innerHTML == "EDIT") {
        inputValue.placeholder = "Update the task...";
        edit.innerHTML = "SAVE";
      } else {
        let id = obj.Id;
        todoArray[id - 1].text = inputValue.value;
        task.innerHTML = todoArray[id - 1].text;
        edit.innerHTML = "EDIT";
        inputValue.placeholder = "Enter Today task...";

        inputValue.value = "";
      }
    };

    //for delete button
    var del = document.createElement("button");
    del.innerHTML = "DELETE";
    del.style.fontSize = "17px";
    del.style.padding = "3px 10px";
    del.style.marginLeft = "30px";
    del.style.marginTop = "5px";
    del.style.width = "100px";

    // delete a task from array and remove from browser display
    del.onclick = function () {
      let id = obj.Id;
      todoArray = todoArray.filter((item) => item.Id !== id);
      document.getElementById("todoList").removeChild(del);
      document.getElementById("todoList").removeChild(edit);
      document.getElementById("todoList").removeChild(task);
      document.getElementById("todoList").removeChild(idval);
    };

    // Object for each task
    var obj = {
      text: inputValue.value,
      Id: temp,
    };

    // add task to array
    todoArray.push(obj);

    //display task to browser
    for (var i = 1; i <= todoArray.length; i++) {
      idval.innerHTML = i + ".";

      document.getElementById("todoList").appendChild(idval);
      document.getElementById("todoList").appendChild(task);
      document.getElementById("todoList").appendChild(edit);
      document.getElementById("todoList").appendChild(del);
    }

    // after add a task input should be blanked for another task to be added.
    inputValue.value = "";
  }
};
