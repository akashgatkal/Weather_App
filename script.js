async function fetchWeatherData(cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fe19d651769407038321d15c8a300f74`; 
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
}

function fetchCity() {
    let cityName = document.getElementById("city_name");
    if(cityName.value==="") {
        alert("Enter A city Name");
    }else{
        fetchWeatherData(cityName.value);
        cityName.value="";


    }
}
