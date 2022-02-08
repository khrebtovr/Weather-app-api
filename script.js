const param = {
    'url': "https://api.openweathermap.org/data/2.5/",
    'appid' : '9fe70d8058dd1aee711414e8ea36eecb'
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}
getWeather();
document.querySelector('#city').onchange = getWeather;

function showWeather(data){
    document.querySelector('.weather-city').textContent = data.name;
    document.querySelector('.weather-icon img').src = `//openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
    document.querySelector('.weather-temp').innerHTML = `${Math.round(data.main.temp - 273)} &deg;C`;
    document.querySelector('.weather-desc').textContent = data.weather[0]['description'];
    document.querySelector('.visibility-value').textContent = `${data.visibility / 1000} km`;
    document.querySelector('.humidity-value').textContent = `${data.main.humidity} %`;
    document.querySelector('.wind-value').textContent = `${Math.round(data.wind.speed)} km/h`;
}