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
        dayNameDiv.classList.add("day-name");
        dayNameDiv.textContent = getDayName(day.datetime);

        //Icon div
        const dayIconTextDiv = document.createElement("div");
        dayIconTextDiv.classList.add("day-icon-text");
        dayIconTextDiv.textContent = day.icon;

        //Temperature container
        const dayTempsDiv = document.createElement("div");
        dayTempsDiv.classList.add("day-temps");

        //Span for max temp
        const maxTempSpan = document.createElement("span");
        maxTempSpan.classList.add("max-temp");
        maxTempSpan.textContent = `${Math.round(day.tempmax)}°`;

        //Span for min temp
        const minTempSpan = document.createElement("span");
        minTempSpan.classList.add("min-temp");
        minTempSpan.textContent = `${Math.round(day.tempmin)}°`;

        //Append temperatures in their container
        dayTempsDiv.appendChild(maxTempSpan);
        dayTempsDiv.appendChild(minTempSpan);

        //Append all elements in main card
        dayCard.appendChild(dayNameDiv);
        dayCard.appendChild(dayIconTextDiv);
        dayCard.appendChild(dayTempsDiv);

        //Append the entire card in containers
        nextDayContainer.appendChild(dayCard);
    });
}