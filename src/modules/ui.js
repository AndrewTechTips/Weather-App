export function displayCurrentWeather (data) {
    
    if(!data) return;

    const current = data.currentConditions;
    const today = data.days[0];

    //Location Name
    document.querySelector(".city-name").textContent = data.resolvedAddress;

    //Main temperatures
    document.querySelector(".temp-current").textContent = `${current.temp}°C`;
    document.querySelector(".min-today").textContent = `Min: ${today.tempmin} °C`
    document.querySelector('.max-today').textContent = `Max: ${today.tempmax}°C`;

    //Box 2 details 
    document.querySelector('.feelslike-head').textContent = 'Feels Like';
    document.querySelector('.temp-feelslike').textContent = `${current.feelslike}°C`;
    document.querySelector('.description').textContent = today.description;

    //Box 3 details
    document.querySelector('.wind-head').textContent = 'Wind';
    document.querySelector('.wind-speed').textContent = `Speed: ${current.windspeed} km/h`;
    if (current.windgust) {
        document.querySelector('.wind-gusts').textContent = `Gusts: ${current.windgust} km/h`;
    }

    //Extra Info
    document.querySelector('.sunrise').textContent = `Sunrise: ${current.sunrise}`;
    document.querySelector('.sunset').textContent = `Sunset: ${current.sunset}`;
    document.querySelector('.humidity').textContent = `Humidity: ${current.humidity}%`;
    document.querySelector('.pressure').textContent = `Pressure: ${current.pressure} hPa`;
    document.querySelector('.uv-index').textContent = `UV Index: ${current.uvindex}`;
    document.querySelector('.chance-of-rain').textContent = `Rain chance: ${today.precipprob}%`;


}