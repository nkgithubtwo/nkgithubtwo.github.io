const country_name = document.getElementById("country_name");
const search_btn = document.querySelector(".btn_search");
const country_universities = document.querySelector(".country_universities");
const container = document.querySelector(".container");

const show_data = async () => {
  let c_name = country_name.value;
  if (c_name == "" || c_name == null) {
    alert("Enter Country name...");
  } else {
    try {
      const promise_data = await fetch(
        `http://universities.hipolabs.com/search?country=${c_name}`
      );

      const response_data = await promise_data.json();
      if(response_data == ''){
          alert("Enter valid Country name...");
      }

      display(response_data);
    } catch (e) {
      alert("Error : " + e);
    } 
  }
};

const display = (data) => {
    let i = 1;

    country_universities.innerText ="";

  data.forEach((ele) => {
    let country_university = document.createElement("p");
    country_university.innerText = `${i++}. ${ele.name}`;

    country_universities.append(country_university);
    container.append(country_universities);
  
  });


};

search_btn.addEventListener("click", show_data);
