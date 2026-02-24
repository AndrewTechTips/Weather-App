/**
 * Converts wind direction from degrees (0-360) to a text compass point (N, NE, E, etc.).
 * It divides the circle into 8 slices of 45°. The modulo (% 8) wraps 360° back to 0° (North).
 */

export function getWindDirection (degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
}

