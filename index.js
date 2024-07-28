setInterval(() => {

    date = new Date();

    hourTime = date.getHours();
    minuteTime = date.getMinutes();
    secondTime = date.getSeconds();

    hourRotation = 30*hourTime + minuteTime/2;
    minuteRotation = 6*minuteTime;
    secondRotation = 6*secondTime;

    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondRotation}deg)`;
}, 1000);

