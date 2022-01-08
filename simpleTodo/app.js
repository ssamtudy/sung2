//✅date display
const inputLabel = document.querySelector('.label')

const today = new Date();
const yaer = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = weekday[today.getDay()];

inputLabel.innerText = yaer + '/' + month + '/' + date + '/' + day;
// inputLabel.innerText = today.toLocaleDateString();