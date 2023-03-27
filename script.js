const daysValue = document.getElementById("days");
const hoursValue = document.getElementById("hours");
const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");
const newYears = '1 Jan 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date(); 

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.trunc((totalSeconds / 3600 / 24));
    const hours = Math.trunc((totalSeconds  /3600) % 24);
    const minutes = Math.trunc((totalSeconds / 60) % 60);
    const seconds = Math.trunc(totalSeconds % 60);

    // console.log(days, hours, minutes, seconds);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    console.log(days);
}



setInterval(countdown, 1000)

