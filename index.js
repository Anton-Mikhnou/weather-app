const input = document.getElementById('town');
const degrees = document.querySelector('.mobile__weather-degrees');
const town = document.querySelector('.mobile__location-town');
const country = document.querySelector('.mobile__location-country');
const form = document.querySelector('form');

// const seachTown = input.value;

async function getWeather(param) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fbdeb1a928fa4975a25193301242903&q=${input.value}`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    degrees.textContent = `${data.current['temp_c']}°C`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather()
})


