export async function getWeatherIcon(iconCode) {
    //fallback
    const safeIconCode = iconCode || "cloudy";

    try {
        //dynamic import
        const iconModule = await import(`../assets/icons/${safeIconCode}.svg`);
        return iconModule.default;
    } catch (error) {
        const fallBackModule = await import(`../assets/icons/cloudy.svg`);
        return fallBackModule.default;
    }
}