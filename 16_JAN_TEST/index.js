const API_KEY = "2d0d724dc581733ff5f7def03e845252";

const search_city = async () => {
  const city_name = document.querySelector("#city").value;

  const res_promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
  );
  const res_obj = await res_promise.json();

  display(res_obj);
};

const display = (data) => {
  const city_list = document.createElement("div");
  city_list.classList.add("city_list");
  console.log(data.sys.country);
  const city_name = document.createElement("p");
  city_name.classList.add("city_name");
  city_name.innerText = data.name;

  const city_temp = document.createElement("p");
  city_temp.classList.add("city_temp");
  city_temp.innerText = `${data.main.temp} K`;

  const country_name = document.createElement("sup");
  country_name.innerText = data.sys.country;

  const weather_desc = document.createElement("p");
  weather_desc.classList.add("weather_desc");
  weather_desc.innerText = data.weather[0].main;

  city_name.append(country_name);
  city_list.append(city_name);
  city_list.append(city_temp);
  city_list.append(weather_desc);
  document.querySelector(".app_container").append(city_list);
};

document.querySelector(".search").addEventListener("click", search_city);
