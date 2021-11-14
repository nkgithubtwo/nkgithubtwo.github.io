const api_url = "https://fakestoreapi.com/products/";

fetch(api_url).then((res) => {
  res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";
      data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + itemData.id + "</td>";
        temp += "<td>" + itemData.title + "</td>";
        temp += "<td>" + itemData.price + "</td>";
        temp += "<td>" + itemData.category + "</td></tr>";
      });
      document.getElementById("data").innerHTML = temp;
    }
  });
});
