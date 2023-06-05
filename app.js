const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const from = document.querySelector("form");
const search = document.querySelector("#search");
const weathter = document.querySelector("#weather");
// const API= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getweather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data)
  return showeather(data);
};

const showeather = (data) => {
    if(data.cod==404){
        weather.innerHTML=`<h>city not found</h>`
        return;
    }
  weathter.innerHTML = `<div>
  weather.innerHTML=`<h2>Loading......</h2>`;
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>
        <div>
          <h1>${data.main.temp}°C</h1>
          <h4>${data.weather[0].main}</h4>
        </div>`;
};

from.addEventListener("submit", function (event) {
  getweather(search.value);
  event.preventDefault();
});
