function updateClock(){
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const sec = document.getElementById('secs');
const dateObj = new Date();
hour.innerText = dateObj.getHours();
min.innerText = dateObj.getMinutes();
sec.innerText = dateObj.getSeconds();
}
setInterval(updateClock, 1000);
updateClock();