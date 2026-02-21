import './style.css';

import { getWeatherData } from "./modules/weatherApi.js";
import { displayCurrentWeather, displayNextDays } from "./modules/ui.js";

const searchInput = document.querySelector("#my-city");

searchInput.addEventListener("keypress", async (event) => {

    //Check to see if the key pressed is enter to display the info 

    if(event.key === "Enter") {
        const city = searchInput.value;

        if(city) {
            const weatherData = await getWeatherData(city);

            displayCurrentWeather(weatherData);
            displayNextDays(weatherData.days);
        }

        searchInput.value = "";
    }
});

//When page is loaded for the first time, we load a default city
window.addEventListener("load", async () => {
    const initialData = await getWeatherData("London");
    displayCurrentWeather(initialData);
    displayNextDays(initialData.days);
});

