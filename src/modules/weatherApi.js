const API_KEY = "JB5SA2X6NDZ2337KC8CAB4LAU";

export async function getWeatherData(city) {

    try {

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`);

        if(!response.ok) {
            throw new Error("The city couldn't be found!");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        alert(error.message);
        return null;
    }
}