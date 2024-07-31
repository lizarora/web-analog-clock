let selectedTimeZoneDifference = 0;

function currentTime() {
    date = new Date();

    let hourDiff = Math.floor(selectedTimeZoneDifference);
    let minDiff = (selectedTimeZoneDifference - hourDiff) *60
    let hourTime = date.getHours() + hourDiff;
    let minuteTime = date.getMinutes() + minDiff;
    let secondTime = date.getSeconds();

    if (hourTime >= 24) {
        hourTime -= 24;
    } else if (hourTime < 0) {
        hourTime += 24;
    }

    hourRotation = 30 * hourTime + minuteTime / 2;
    minuteRotation = 6 * minuteTime;
    secondRotation = 6 * secondTime;

    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondRotation}deg)`;
}

document.getElementById('timezone1').addEventListener('click', () => {
    selectedTimeZoneDifference = 1; // EST 
    currentTime();
});

document.getElementById('timezone2').addEventListener('click', () => {
    selectedTimeZoneDifference = -2; // PST 
    currentTime();
});

document.getElementById('timezone3').addEventListener('click', () => {
    selectedTimeZoneDifference = 10.5; // IST 
    currentTime();
});

setInterval(currentTime, 1000);

currentTime();



