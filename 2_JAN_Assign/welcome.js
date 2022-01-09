setInterval(() => {
  let color_one = Math.floor(Math.random() * 166666).toString(16);
  let color_two = Math.floor(Math.random() * 166666).toString(16);
  document.body.style.background = `linear-gradient(to left , ${
    "#" + color_one
  }, ${"#" + color_two})`;
}, 200);
