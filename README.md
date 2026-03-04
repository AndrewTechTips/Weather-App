<div align="center">

  <h1>⛅ Horizon Weather</h1>

  <p>
    A sleek, responsive <strong>Weather Application</strong> powered by the Visual Crossing API.<br />
    Built to practice <strong>async/await</strong>, <strong>REST APIs</strong>, <strong>ES Modules</strong>, and a real <strong>Webpack</strong> bundling workflow.
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-Async%2FAwait-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Webpack-5-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
    <img src="https://img.shields.io/badge/Visual%20Crossing-API-5ad1ff?style=for-the-badge" alt="Visual Crossing API" />
  </p>

  <h3>
    <a href="https://andrewtechtips.github.io/Weather-App/">🌤️ OPEN APP</a>
  </h3>

</div>

<br />

---

## ✨ Features

* **🌍 Real-Time Weather Data:** Fetches live conditions — temperature, humidity, pressure, wind speed & gusts — via the Visual Crossing Timeline API.
* **📅 6-Day Forecast:** Displays the next 6 days with icons, min/max temps, and weather descriptions.
* **📍 Geolocation Support:** "Current" button detects the user's location automatically, no typing needed.
* **🔍 City Autocomplete:** Search suggestions appear as you type for a smooth experience.
* **🧭 Wind Compass:** Converts raw wind degrees into a compass direction (N, NE, SW...) with a live rotating arrow.
* **☀️ UV Index Tracker:** Color-coded UV level (Low → Extreme) with dynamic color feedback.
* **🌅 Sunrise & Sunset:** Displayed with custom SVG icons pulled from local assets.
* **🎨 Immersive Dark UI:** Deep navy background with cyan/purple gradients and glassmorphism cards.

---

## 🧠 Under the Hood

### Fetching Weather Data (`weatherApi.js`)
All API calls go through a dedicated module using `async/await` and proper error handling:

```javascript
export async function getWeatherData(city) {
    const response = await fetch(
        `https://weather.visualcrossing.com/.../timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`
    );
    if (!response.ok) throw new Error("The city couldn't be found!");
    return await response.json();
}
```

### Dynamic Icon Loading (`getWeatherIcon.js`)
Weather icons are loaded dynamically at runtime using Webpack's code-splitting via `import()`:

```javascript
export async function getWeatherIcon(iconCode) {
    try {
        const iconModule = await import(`../assets/icons/${iconCode}.svg`);
        return iconModule.default;
    } catch {
        const fallback = await import(`../assets/icons/cloudy.svg`);
        return fallback.default;
    }
}
```

### Wind Direction Utility (`getWindDirection.js`)
Converts raw degrees (0–360°) into compass points using a clean math trick:

```javascript
export function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(degrees / 45) % 8];
}
```

---

## 📁 Project Structure

```
Weather-App/
├── src/
│   ├── assets/
│   │   └── icons/              # Local SVG weather icons
│   ├── modules/
│   │   ├── weatherApi.js       # API calls & error handling
│   │   └── ui.js               # DOM rendering & display logic
│   ├── utils/
│   │   ├── getWeatherIcon.js   # Dynamic SVG icon loader
│   │   ├── getWindDirection.js # Degrees → compass point
│   │   └── getUvDetails.js     # UV color & level helpers
│   ├── index.js                # Entry point — events & app init
│   ├── style.css               # Dark theme, grid layout, glassmorphism
│   └── template.html           # App shell markup
├── webpack.config.js           # Bundler configuration
├── package.json                # npm scripts & dependencies
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AndrewTechTips/Weather-App.git
    cd Weather-App
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the dev server:**
    ```bash
    npm run dev
    ```

4. **Build for production:**
    ```bash
    npm run build
    ```

---

## 📬 Contact

* **LinkedIn:** [Andrei Condrea](https://www.linkedin.com/in/andrei-condrea-b32148346)
* **Email:** condrea.andrey777@gmail.com

<p align="center">
  <i>"Climate is what we expect, weather is what we get." 🌩️</i>
</p>