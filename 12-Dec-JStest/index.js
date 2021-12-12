let fetchData = fetch("https://meme-api.herokuapp.com/gimme");

let response = fetchData.then((response) => {
  return response.json();
});

let result = response.then((data) => {
  memeDisplay(data);
});

function memeDisplay(data) {
  let img = document.createElement("img");
  img.src = data.url;
  img.style.width = "60%";
  img.style.height = "700px";

  document.body.append(img);
}
