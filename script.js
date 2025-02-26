function getLocation() {
    let x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Геолокація не підтримується вашим браузером.";
    }
}

function showPosition(position) {
    let x = document.getElementById("demo");
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br><br><br>Longitude: " + position.coords.longitude;
}

document.addEventListener("DOMContentLoaded", () => {
    getLocation();
    setInterval(getLocation, 5000);
});