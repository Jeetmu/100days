const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');
const random = document.getElementById('random')

const newYears = "1 Jan 2023"

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/ 3600 /24 + 1);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    console.log(days,hours, mins, seconds);

    dayEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? '0'+time : time;
}

function randomQuote(){
    const quoteArray = ["Every moment is a fresh beginning",
    "Life's not about expecting, hoping and wishing, it's about doing, being and becoming.",
    "I like the dreams of the future better than the history of the past.",
    "Many years ago, I made a New Year’s resolution to never make new year’s resolutions. Hell, it’s been the only resolution I’ve ever kept!",
    "It takes courage to grow up and become who you really are.",
    "The magic in new beginnings is truly the most powerful of them all."
    ];
    const quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];

    random.innerText = quote;
}

randomQuote();
countdown();

setInterval(randomQuote, 5000);
setInterval(countdown, 1000);