const API_KEY = `f08099e3c8ce3c1131bc56cc0d460a2c`;
const gitCityName = () => {
  const cityName = document.getElementById("nameValue");
  const cityNameValue = cityName.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${API_KEY}`;
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
  setInnerText("temp", temperature.name);
};
