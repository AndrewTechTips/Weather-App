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

//Helper function to get the date in this format (2025-02-21) -> Sat
function getDayName (dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {weekday: "short"});
}

//Function for displaying next 7 days forecast
export function displayNextDays(days) {

    const nextDayContainer = document.querySelector(".next-days");

    nextDayContainer.textContent - "";

    const forecastDays = days.slice(1, 8);

    forecastDays.forEach(day => {

        //Main container
        const dayCard = document.createElement("div");
        dayCard.classList.add("day-card")

        //Day name
        const dayNameDiv = document.createElement("div");
        dayNameDiv.classList.add("day-date");
        dayNameDiv.textContent = getDayName(day.datetime);

        //Min and max temp 
        const dayTempDiv = document.createElement("div");
        dayTempDiv.classList.add("day-temp");
        dayTempDiv.textContent = `${Math.round(day.tempmin)}°C / ${Math.round(day.tempmax)}°C`;

        //Icon div
        const dayIconTextDiv = document.createElement("div");
        dayIconTextDiv.classList.add("day-icon-text");
        dayIconTextDiv.textContent = day.icon;

        //Description
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("day-description");
        descriptionDiv.textContent = day.description || day.conditions || '';

        //Append all elements in main card
        dayCard.appendChild(dayNameDiv);        
        dayCard.appendChild(dayTempDiv);
        dayCard.appendChild(dayIconTextDiv);
        dayCard.appendChild(descriptionDiv);

        //Append the entire card in containers
        nextDayContainer.appendChild(dayCard);
    });
}