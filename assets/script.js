var searchInput = document.querySelector('#search-input');
var userFormEl = document.querySelector('#user-form');

var repoContainerEl = document.querySelector('#repos-container');
// var repoSearchTerm = document.querySelector('#repo-search-term');
// var languageButtonsEl = document.querySelector('#language-buttons');
var searchButton = document.querySelector('#click-button');


// search form submit event listener

// userFormEl.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var cityname = searchInput.value.trim();
//   console.log(cityname);
//   if (cityname) {
//     getCityReops(cityname);

//     repoContainerEl.textContent = '';
//     searchInput.value = '';
//   }

//   else {
//     alert('Please enter a City name')
//   }

//   // console.log(searchInput.value);
// });

// fetch searched city name information
let city = document.querySelector('.city-name-here');
let date = document.querySelector('.current-date');
let tempature = document.querySelector('.celcius');
let wind = document.querySelector('.wind-speed');
let humidity = document.querySelector('.humidity');

let applicationId = '590c7bf2297f2d927f47ead0d1610b7f';
let weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + applicationId;
let daysForcastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?&appid=' + applicationId;
// fetch(daysForcastApiUrl + `&q=sacramento`).then(res => res.json()).then(data => {console.log(data)})
let getCityReops = async (city) => {
  let endpoint = weatherApiUrl + '&q=' + city;
  let response = await fetch(endpoint);
  console.log(response)
  let weather = await response.json();

  console.log(weather);
  return weather;
}

let getDaysRepos = async (days) => {
  let endpoint = daysForcastApiUrl + '&q=' + days;
  let response = await fetch(endpoint);
  let weather = await response.json();

  console.log(weather);
  return weather;

}

// getCityReops(searchInput.value);

searchButton.addEventListener('click', async (event) => {
  // if (event.keycode === 13) {
  event.preventDefault();
  let weather = await getCityReops(searchInput.value);
  console.log("jeans", weather)
  currentWeatherInfo(weather);
  // }
});

// ISSUE not changing titles
let currentWeatherInfo = (data) => {
  console.log("burrito")
  city.textContent = data.name + ', ' + data.sys.country;
  date.textContent = dayOfTheWeek();
  tempature.textContent = data.main.temp;
  humidity.textContent = data.main.humidity;
  wind.textContent = data.wind.speed;

};

let dayOfTheWeek = () => {
  return new Date().toLocaleDateString('en-EN', { 'weekday': 'long' });
};


for (let i = 0; i < 20; i+=1) {
  if (i % 2 == 0) {
    console.log("even numbered run")
  } console.log("odd numbered run")
  console.log(`this loop has run ${i} times`)
}