const apikey = "0bd2eb20fc4100168453d2a4943d0913"; // enter your own api key
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        var WeatherCondition = data.weather[0].main;
        setWeatherIcon(WeatherCondition)

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

function setWeatherIcon(WeatherCondition) {
    switch (WeatherCondition) {
        case 'Clouds':
            weather_icon.src = "images/clouds.png";
            break;
        case 'Clear':
            weather_icon.src = "images/clear.png";
            break;
        case 'Rain':
            weather_icon.src = "images/rain.png";
            break;
        case 'Mist':
            weather_icon.src = "images/mist.png";
            break;
        case 'Drizzle':
            weather_icon.src = "images/drizzle.png";
            break;
        default:
            weather_icon.src = "images/clear.png"
            break;
    }
}