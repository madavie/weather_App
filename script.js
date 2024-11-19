const apiKey = 'e96e69d75da3e10ebbb46774fd46961e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data)

    if (response.ok) {
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
      document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
      document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

      const weatherIcon = document.querySelector('.weather-icon');
      setWeatherIcon(data.weather[0].main, weatherIcon);

      document.querySelector('.weather').style.display = 'block';
      document.querySelector('.details').style.cssText = "display: flex;align-items: center;justify-content: space-between;padding: 0 20px;margin-top: 50px;";
    } else {
      document.querySelector('.city').innerHTML = 'City not found';
      clearWeatherData();
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    clearWeatherData();
  }
}

function setWeatherIcon(weatherType, weatherIcon) {
  const iconMap = {
    'Clouds': 'images/clouds.png',
    'Clear': 'images/clear.png',
    'Rain': 'images/rain.png',
    'Drizzle': 'images/drizzle.png',
    'Mist': 'images/mist.png'
  };

  weatherIcon.src = iconMap[weatherType] || 'images/default.png';
}

function clearWeatherData() {
  document.querySelector('.temp').innerHTML = '';
  document.querySelector('.humidity').innerHTML = '';
  document.querySelector('.wind').innerHTML = '';
  document.querySelector('.weather-icon').src = '';
  document.querySelector('.weather').style.display = 'block';
  document.querySelector('.details').style.display = 'none';
}


searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
























































































































// const apiKey = 'e96e69d75da3e10ebbb46774fd46961e'
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
// const searchBox = document.querySelector('.search input')
// const searchBtn = document.querySelector('.search button')


// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
//   var data = await response.json()

//   document.querySelector('.city').innerHTML = data.name;
//   document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
//   document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
//   document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
//   const weatherIcon = document.querySelector('.weather-icon');

//   if (data.weather[0].main == 'Clouds') {
//     weatherIcon.src = 'images/clouds.png'
//   }
//   else if (data.weather[0].main == 'Clear') {
//     weatherIcon.src = 'images/clear.png'
//   }
//   else if (data.weather[0].main == 'Rain') {
//     weatherIcon.src = 'images/rain.png'
//   }
//   else if (data.weather[0].main == 'Drizzle') {
//     weatherIcon.src = 'images/drizzle.png'
//   }
//   else if (data.weather[0].main == 'Mist') {
//     weatherIcon.src = 'images/mist.png'
//   }
//   document.querySelector('.weather').style.display = 'block';
//   document.querySelector('.details').style.cssText = "display: flex;align-items: center;justify-content: space-between;padding: 0 20px;margin-top: 50px;"

//   // console.log(data)
// }
// searchBtn.addEventListener('click', () => {
//   checkWeather(searchBox.value)
// })
// // checkWeather()
