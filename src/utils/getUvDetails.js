//We define here 2 func for pulling the UV index color and UV index text

function getUVColor (uv) {
    if (uv <= 2) return '#4ade80'; // green (low)
	if (uv <= 5) return '#facc15'; // yellow (moderate)
	if (uv <= 7) return '#fb923c'; // orange (high)
	if (uv <= 10) return '#f87171'; // red (very high)
	return '#c084fc';   //Purple (extreme)
}

function getUVLevel(uv) {
	if (uv <= 2) return 'Low';
	if (uv <= 5) return 'Moderate';
	if (uv <= 7) return 'High';
	if (uv <= 10) return 'Very High';
	return 'Extreme';
}

export {
    getUVColor,
    getUVLevel
}

