import './style.css';

import { getWeatherData } from "./modules/weatherApi.js";
import { displayCurrentWeather } from "./modules/ui.js";

const searchInput = document.querySelector("#my-city");

searchInput.addEventListener("keypress", async (event) => {

    //Check to see if the key pressed is enter to display the info 

    if(event.key === "Enter") {
        const city = searchInput.value;

        if(city) {
            const weatherData = await getWeatherData(city);
            displayCurrentWeather(weatherData);
            searchInput.value = "";
        }
    }
});

//When page is loaded for the first time, we load a default city
window.addEventListener("load", async () => {
    const initialData = await getWeatherData("London");
    displayCurrentWeather(initialData);
});

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