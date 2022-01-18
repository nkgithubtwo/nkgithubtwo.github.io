function ImageGallery(nu) {
  let num = 9;
  while (num > 0) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        newImage(data);
      });
    num--;
  }
}
ImageGallery();

function newImage(data) {
  console.log(data);
  const img_loc = data.message;
  const img_box = document.createElement("div");
  const img = document.createElement("img");
  img.src = img_loc;
  img_box.appendChild(img);
  container.appendChild(img_box);
}

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(window.innerHeight);
  console.log(document.documentElement.scrollHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    ImageGallery();
  }
});
