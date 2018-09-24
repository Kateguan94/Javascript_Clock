var hoursElement = document.getElementsByClassName('hours')[0];
var minutesElement = document.getElementsByClassName('minutes')[0];
var secondsElement = document.getElementsByClassName('seconds')[0];

function setHours(hours) {
    // one hour is equal to 30° because
    // 360° / 60hours = 30°/hour
    var angle = hours * 30;
    hoursElement.style.transform = 'rotate(' + angle + 'deg)';
}

function setMinutes(minutes) {
    // one minute is equal to 6° because
    // 360° / 60minutes = 6°/minute
    var angle = minutes * 6;
    minutesElement.style.transform = 'rotate(' + angle + 'deg)';
}

function setSeconds(seconds) {
    // one second is equal to 6° because
    // 360° / 60seconds = 6°/second
    var angle = seconds * 6;
    secondsElement.style.transform = 'rotate(' + angle + 'deg)';
}

function tick() {
    var date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
}
tick();
setInterval(tick, 1000);

// Create indicators for hours and minutes/seconds around the clock face
var second = 0;
var outline = document.getElementsByClassName('outline')[0];
while (second < 60) {
    var div = document.createElement('div');
    div.classList.add('secondsIndicator');
    div.style.transform = 'rotate(' + (second * 6) + 'deg)';
    second++;
    outline.appendChild(div);
}

var hour = 0;
while (hour < 12) {
    var div = document.createElement('div');
    div.classList.add('hoursIndicator');
    div.style.transform = 'rotate(' + ((hour * 30) - 1.25) + 'deg)';
    hour++;
    outline.appendChild(div);
}