const apiKey = '334bd4fc56ede825265e8d8b32a969a0';
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('locationInput');
const weatherResult = document.getElementById('weatherResult');

getWeatherBtn.addEventListener('click', async () => {
  const location = locationInput.value;

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    const cityName = data.name;
    const temp = data.main.temp;
    const weatherDescription = data.weather[0].description;

    weatherResult.innerHTML = `
      <h2>${cityName}</h2>
      <p>Temperatura: ${temp}°C</p>
      <p>Descripción: ${weatherDescription}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = 'No se pudo obtener el clima para esta ubicación.';
  }
});
