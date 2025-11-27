import { API_KEY } from './env.js';

async function LoadWeather(cityName) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
        );

        const data = await response.json();

        // Return only essential information
        const result = {
            location: data.location.name,
            country: data.location.country,
            localtime: data.location.localtime,

            temp_c: data.current.temp_c,
            condition_text: data.current.condition.text,
            condition_icon: data.current.condition.icon,

            humidity: data.current.humidity,
            wind_kph: data.current.wind_kph,
            wind_dir: data.current.wind_dir,
            feels_like: data.current.feelslike_c,
        };
        return result;

    } catch (error) {
        console.log("Error loading weather:", error);
    }
}

document.getElementById("getWeather").addEventListener("click", async () => {
    const cityName = document.getElementById("city").value;
    const result = await LoadWeather(cityName);

    if (result) {
        document.getElementById("weatherInfo").style.display = "flex";
        document.getElementById("cityName").innerText = `${result.location}, ${result.country}`;
        document.getElementById("localTime").innerText = result.localtime;
        document.getElementById("temp").innerText = `${result.temp_c}°C`;
        document.getElementById("condition").innerText = result.condition_text;
        document.getElementById("weatherIcon").src = `https:${result.condition_icon}`;

        document.getElementById("humidity").innerText = `${result.humidity}%`;
        document.getElementById("windSpeed").innerText = `${result.wind_kph} km/h`;
        document.getElementById("feelsLike").innerText = `${result.feels_like}°C`;
        document.getElementById("windDir").innerText = result.wind_dir;
    }
});