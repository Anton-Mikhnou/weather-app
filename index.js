const input = document.getElementById('town');
const degrees = document.querySelector('.mobile__weather-degrees');
const town = document.querySelector('.mobile__location-town');
const country = document.querySelector('.mobile__location-country');
const form = document.querySelector('form');
const type = document.querySelector('.mobile__weather-type');
const picture = document.querySelector('.mobile__picture');
const error = document.querySelector('.error');

async function getWeather(param) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fbdeb1a928fa4975a25193301242903&q=${param}`, {mode: 'cors'});
    const data = await response.json();
    type.textContent = `${data.current.condition.text}`;
    degrees.textContent = `${data.current['temp_c']}°C`
    town.textContent = `${data.location.name}`;
    country.textContent = `${data.location.country}`;
    picture.src = `${data.current.condition.icon}`;
}

getWeather('Minsk');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataForm = new FormData(form);
    const obj = Object.fromEntries(dataForm.entries());
    const place = obj.town;
    getWeather(place);
})

