const API_KEY = `84c44ad1cc9065e8dfda92173a043d9c`;
const gitCityName = () => {
  const cityName = document.getElementById("nameValue");
  const cityNameValue = cityName.value;
  cityName.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  console.log(temperature);
  setInnerText("cityName", temperature.name);
  setInnerText("temp", Math.ceil(temperature.main.temp));
  setInnerText("condition", temperature.weather[0].main);
  setInnerText("condition", temperature.weather[0].main);
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weatherIcon");
  imgIcon.setAttribute("src", url);
};
