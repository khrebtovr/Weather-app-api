const param = {
    'url': "https://api.openweathermap.org/data/2.5/",
    'appid' : '9fe70d8058dd1aee711414e8ea36eecb'
}
const cities = {
    '2988506': 'Paris',
    '2172797': 'Cairns',
    '625144': 'Minsk',
    '703448': 'Kyiv'
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function createSelectCities(){
    const selectCities = document.createElement('select');
    selectCities.id = 'city';
    for(let key in cities){
        let option = document.createElement('option');
        option.textContent = cities[key];
        option.value = key;
        selectCities.appendChild(option)
    }
    const select = document.querySelector('.select-city');
    select.appendChild(selectCities)
}
createSelectCities()

function showWeather(data){
    document.querySelector('.weather-date').textContent = new Date().toDateString();
    document.querySelector('.weather-city').textContent = data.name;
    document.querySelector('.weather-icon img').src = `//openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
    document.querySelector('.weather-temp').innerHTML = `${Math.round(data.main.temp - 273)} &deg;C`;
    document.querySelector('.weather-desc').textContent = data.weather[0]['description'];
    document.querySelector('.visibility-value').textContent = `${data.visibility / 1000} km`;
    document.querySelector('.humidity-value').textContent = `${data.main.humidity} %`;
    document.querySelector('.wind-value').textContent = `${Math.round(data.wind.speed)} km/h`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;