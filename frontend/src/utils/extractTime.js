export function extractTime(dateString) {
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    const period = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${padZero(hours)}:${minutes} ${period}`;
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}