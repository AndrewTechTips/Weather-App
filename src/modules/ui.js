import sunriseIcon from '../assets/icons/sunrise.svg';
import sunsetIcon from '../assets/icons/sunset.svg';
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { getWindDirection } from '../utils/getWindDirection';

export async function displayCurrentWeather (data) {
    
    if(!data) return;

    const current = data.currentConditions;
    const today = data.days[0];

    //Location Name
    document.querySelector(".city-name").textContent = data.resolvedAddress;

    //Box - 1
    document.querySelector(".date-today").textContent = today.datetime;

    const iconCurrentEl = document.querySelector(".icon-current");
    const iconUrl = await getWeatherIcon(current.icon);
    const iconImg = document.createElement("img");
    iconImg.src = iconUrl;
    iconImg.alt = current.icon;
    iconImg.classList.add("weather-icon-main");
    iconCurrentEl.append(iconImg);


    document.querySelector(".temp-current").textContent = `${current.temp}°C`;
    document.querySelector(".min-today").textContent = `Min: ${today.tempmin} °C`
    document.querySelector('.max-today').textContent = `Max: ${today.tempmax}°C`;

    //Box 2 details 
    document.querySelector('.feelslike-head').textContent = 'Feels Like';
    document.querySelector('.temp-feelslike').textContent = `${Math.round(current.feelslike)}°C`;
    document.querySelector('.description').textContent = today.description || today.conditions || "";

    //Box 3 details
    document.querySelector('.wind-head').textContent = 'Wind';
    document.querySelector('.wind-speed').textContent = `Speed: ${current.windspeed} km/h`;
    
    if (current.windgust) {
        document.querySelector('.wind-gusts').textContent = `Gusts: ${current.windgust} km/h`;
    }

    const windDirDegrees = current.winddir;
    const windArrowEl = document.querySelector("#wind-arrow");
    const windDirTextEl = document.querySelector("#wind-dir-text");

    if (windArrowEl && windDirTextEl) {
        windArrowEl.style.transform = `rotate(${windDirDegrees}deg)`;
        windDirTextEl.textContent = getWindDirection(windDirDegrees);
    } 

    //Extra Info
    const sunriseEl = document.querySelector(".sunrise");
    sunriseEl.textContent = "";

    const sunriseImg = document.createElement("img");
    sunriseImg.src = sunriseIcon;
    sunriseImg.classList.add("sun-icon");
    sunriseImg.alt = "Sunrise";

    const textSpan = document.createElement("span");
    textSpan.textContent = `Sunrise ${current.sunrise.slice(0, 5)}`;

    sunriseEl.append(sunriseImg, textSpan);

    const sunsetEl = document.querySelector(".sunset");
    sunsetEl.textContent = "";

    const sunsetImg = document.createElement("img");
    sunsetImg.src = sunsetIcon;
    sunsetImg.alt = "Sunset";
    sunsetImg.classList.add("sun-icon");

    const textSpan2 = document.createElement("span");
    textSpan2.textContent = `Sunset ${current.sunset.slice(0, 5)}`;
    sunsetEl.append(sunsetImg, textSpan2);
    
    document.querySelector('.humidity').textContent = `Humidity: ${current.humidity}%`;
    document.querySelector('.pressure').textContent = `Pressure: ${current.pressure} hPa`;

    const uvIndex = current.uvindex ?? 0;

    document.querySelector('.uv-index').textContent = `UV Index: ${current.uvindex}`;


    document.querySelector('.chance-of-rain').textContent = `Rain chance: ${today.precipprob}%`;
}

//Helper function to get the date in this format (2025-02-21) -> Sat
function getDayName (dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {weekday: "short"});
}

//Function for displaying next 6 days forecast
export async function displayNextDays(days) {

    const nextDayContainer = document.querySelector(".next-days");

    nextDayContainer.textContent = "";

    const forecastDays = days.slice(1, 7);

    for (const day of forecastDays) {

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
        const dayIconDiv = document.createElement("div");
        dayIconDiv.classList.add("day-icon");

        //Fetch the icon from assets
        const dayIconUrl = await getWeatherIcon(day.icon);

        //Image icon
        const img = document.createElement("img");
        img.classList.add("weather-icon-small");
        img.src = dayIconUrl;
        img.alt = day.conditions;

        dayIconDiv.appendChild(img);

        //Description
        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("day-description");
        descriptionDiv.textContent = day.description || day.conditions || '';

        //Append all elements in main card
        dayCard.appendChild(dayNameDiv);        
        dayCard.appendChild(dayTempDiv);
        dayCard.appendChild(dayIconDiv);
        dayCard.appendChild(descriptionDiv);

        //Append the entire card in containers
        nextDayContainer.appendChild(dayCard);
    };
}