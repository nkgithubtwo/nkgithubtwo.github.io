//***************************************  Question 01 ************************************ */

const minNumber = (...arr) => {
  let min = arr[0];
  for(let i = 1 ; i < arr.length ; i++){
     if(arr[i] < min){
       min = arr[i];
     }
  }
  return min;
}

let op1 = minNumber(435,234,5,34,56,2,67);
let op2 = minNumber(53,456,30,45,50,24);
let op3 = minNumber(69,86,45,33,34,7);

console.log(op1);
console.log(op2);
console.log(op3);

// *********************************** Question 02 **************************************//

let arr2 = [];
let count;

let add_Ele = document.getElementById("add");
let input = document.getElementById("input");
let find = document.getElementById("res2");

add_Ele.addEventListener("click", () => {
  if(isNaN(input.value)){
    alert("Enter Valid Number");
    input.value = "";
  }
  else{
  arr2.push(input.value);
  document.getElementById('display').innerText += input.value + " , ";
  document.getElementById('display').style.fontWeight = 900;
  input.value = "";
}
});

Array.prototype.find_Prime = function() {
  if(this.length == 0)
  {
    alert("Enter Number Please.")
  }
  else{
  for (let i = 0; i < this.length; i++) {
    count = 0;
    for (let j = 1; j <= this[i]; j++) {
        
      if (this[i] % j == 0) {
        count++;
      }
      
        if (count == 2 && j == this[i]) {
          return true;
        }
      }
    }
  return false;
  }
};

find.addEventListener("click", () => {
  let result = arr2.find_Prime();

  if(result)
  {
    document.getElementById('output').innerText = "Prime Number is Present";
}
else{
  document.getElementById('output').innerText = "Prime Number is not Present";

}
  
});
