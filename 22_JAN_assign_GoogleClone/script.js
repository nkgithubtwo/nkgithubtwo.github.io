const API_KEY = "4dbc687f1a7b661951aa99096c1f0d88";

let search_item = document.querySelector("#search_txt");
let result_dis = document.querySelector("#result");
let suggestion = document.querySelector(".sugg_val");
let suggestion_block = document.querySelector(".suggestion");

async function search_result(e) {
  e.preventDefault();
  let search_val = search_item.value;
  let cookie_str = "";
  cookie_str = `${search_val}=${search_val}; `;
  document.cookie = cookie_str;

  const fetch_res = await fetch(
    `http://api.serpstack.com/search?access_key=${API_KEY}&query=${search_val}`
  );
  const json_res = await fetch_res.json();
  suggestion_block.classList.remove("show");

  display_data(json_res);
}

function display_data(data) {
  result_dis.innerHTML = "";
  data.organic_results.forEach((res) => {
    result_dis.innerHTML += `
    <h1>${res.title}</h1><br>
    <a target="_blank" href="${res.url}">${res.url}</a>
    <p>${res.snippet}</p>
    `;
  });
}

function input_suggestion() {
  let all_cookies = document.cookie;

  all_cookies = all_cookies.split("; ");
  let arr = [];
  all_cookies.forEach((ele) => {
    arr.push(ele.split("=")[0]);
  });

  let search_ = search_item.value;
  search_ = search_.split("");

  arr.forEach((ele) => {
    let item = ele;
    ele = ele.split("");

    for (let i = 0; i < ele.length && i < search_.length; i++) {
      if (search_[i] == ele[i]) {
        suggestion_block.classList.add("show");
        suggestion.innerHTML = item;

        suggestion.addEventListener("click", () => {
          search_item.value = item;
        });
      }
    }
  });
}


search_item.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    search_result();
  }
});

search_item.addEventListener("input", input_suggestion);

