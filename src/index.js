function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let tempersture = response.data.temperature.current;
    let cityElement= document.querySelector("#city");

    cityElement.innerHTML= response.data.city;
    temperatureElement.innerHTML= Math.round(tempersture);
}

function searchCity(city){
    let apiKey = "540f410t39afca518e877dc5abodd75b";
    let apiUrl= `https://api.shecodes.io/weather/v1/current?query={city}&key={apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit (event){
    event.preventDefault();
    let searchInput= document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Paris");
