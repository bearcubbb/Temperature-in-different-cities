const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = [];

let maxTemp = -Infinity;
let minTemp = Infinity;

for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let temp = prompt(`Введите температуру в городе ${city}:`);
    temperatures.push(temp);
}

console.log(temperatures);

let cityList = document.createElement('ul');
let cityListContainer = document.querySelector(".h1__container__main");
console.log(cityListContainer);
//добавляю cityList ПОСЛЕ h1 в cityListContainer
cityListContainer.after(cityList);

cities.forEach((city, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${city}: ${temperatures[index]}°C`;
    cityList.appendChild(listItem);
});

temperatures.forEach(temp => {
    if (temp > maxTemp) {
        maxTemp = temp;
    } else if (temp < minTemp) {
        minTemp = temp;
    }
});

const maxTempText = document.createElement('p');
maxTempText.textContent = `Максимальная температура: ${maxTemp}°C\n Минимальная температура: ${minTemp}°C`;
cityList.after(maxTempText);

//temperatures.forEach(temp => {
//  if (temp > maxTemp) {
//    maxTemp = temp;
//}
//if (temp < minTemp) {
//   minTemp = temp;
//}
//});

console.log(`Максимальная температура: ${maxTemp}°C`);
console.log(`Минимальная температура: ${minTemp}°C`);