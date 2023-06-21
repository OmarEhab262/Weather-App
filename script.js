const apiKey = "4439ecee3de7bde91e62e71e15b79bc1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weaterIcon = document.querySelector(".weater-icon");
const card = document.querySelector(".card");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    card.style.background = " linear-gradient(135deg, #00efba, #5b548a)";
  }
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  if (data.weather[0].main == "Clouds") {
    weaterIcon.src = "images/clouds.png";
    card.style.background = "linear-gradient(135deg, #C4E1E8, #C4E1E8)";
    card.style.color = "#444";
  } else if (data.weather[0].main == "Clear") {
    card.style.background = "linear-gradient(135deg, #FFE269,#58544c)";
    card.style.color = "#fff";
    weaterIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weaterIcon.src = "images/drizzle.png";
    card.style.background = "linear-gradient(135deg, #AD9B7A,#C4E1E8)";
    card.style.color = "#fff";
  } else if (data.weather[0].main == "Mist") {
    card.style.background = "linear-gradient(135deg, #00efba, #AD9B7A);";
    card.style.color = "#fff";
    weaterIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weaterIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Rain") {
    weaterIcon.src = "images/rain.png";
    card.style.background = "linear-gradient(135deg, #e1f3f5,#5d5e59)";
    card.style.color = "#fff";
  }
  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
