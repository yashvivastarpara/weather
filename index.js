const weatherIcons = {
    Clear:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095627331898449941/sun.png",
    Clouds:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095627739266027530/cloud.png",
    Rain:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095646712720261210/heavy-rain.png",
    Snow:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095629315330285628/snow.png",
    "Brocken Clouds":
      "https://cdn.discordapp.com/attachments/964561366000230421/1095647552646418464/light-rain.png",
    "Few clouds":
      "https://cdn.discordapp.com/attachments/964561366000230421/1095649841654276166/clear-sky.png",
    "Scattered clouds":
      "https://cdn.discordapp.com/attachments/964561366000230421/1095650188321882173/scattered-thunderstorms.png",
    "Broken clouds":
      "https://cdn.discordapp.com/attachments/964561366000230421/1095650823553421346/clouds.png",
    "Overcast clouds":
      "https://cdn.discordapp.com/attachments/964561366000230421/1095651097240158218/cloudy.png",
    Mist:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095651764700725298/mist.png",
    Smoke:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095652086101843968/smoke.png",
    Haze:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095652418219417610/haze.png",
    Dust:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095654840996204644/sandstorm.png",
    Fog:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095655062887469066/fog.png",
    "Sand, dust whirls":
      "https://cdn.discordapp.com/attachments/964561366000230421/1095655447798763530/sand.png",
    Squalls:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095655792671207504/rainy-day.png",
    Tornado:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095656100776398990/tornado.png",
    Drizzle:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095656355349659718/drizzle.png",
    Thunderstorm:
      "https://cdn.discordapp.com/attachments/964561366000230421/1095656547050336297/storm.png"
  };
  
  const apiKey = "e8fdb90ee5665f0b87676b2dd4faeb7c";
  const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather";
  
  const locationInput = document.getElementById("location-input");
  const submitButton = document.getElementById("submit-button");
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const locationName = document.querySelector(".location");
  
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const location = locationInput.value;
    const apiUrl = `${apiUrlBase}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => displayWeather(data))
      .catch((error) => console.log(error));
  });
  
  function displayWeather(data) {
    const weather = data.weather[0].main;
    const temperatureValue = Math.round(data.main.temp);
    const iconUrl = `url(${weatherIcons[weather]})`;
  
    weatherIcon.style.backgroundImage = iconUrl;
    temperature.textContent = `${temperatureValue} °C`;
    locationName.textContent = data.name;
  
    const humidity = data.main.humidity;
    const humidityElement = document.querySelector(".feuchtigkeit");
    humidityElement.textContent = `Humidity: ${humidity}%`;
  
    const weatherText = data.main.weather[0];
    const weatherTextElement = document.querySelector(".wettertext");
    humidityElement.textContent = `Humidity: ${humidity}%`;
  }
  