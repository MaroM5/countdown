function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(endtime) {
    function updateClock() {
        const t = getTimeRemaining(endtime);
        document.getElementById('countdown').innerHTML = `${t.days}d ${t.hours}h ${t.minutes}m ${t.seconds}s`;

        if (t.total <= 0) {
            clearInterval(timeinterval);
            confetti.start();
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

function setBackgroundAndImage(endtime) {
    const remainingDays = Math.ceil((endtime - new Date()) / (1000 * 60 * 60 * 24));

    const colors = ['#30D5C8', '#c72418', '#1829c7', '#8118c7', '#c73e18', '#18a7c7', '#600e6b', '#6b0e0e', '#d13f3f', '#a83fd1', '#76999c', '#b3a33b', '#7d240b', '#0b247d', '#427d1e', '#a3364f', '#364ea3']; 
    const images = [
        ['Day17.jpg'],
        ['Day16.jpg'],
        ['Day15_02.jpg', 'Day15.jpg'],
        ['Day14.jpg'],
        ['Day13.jpg'],
        ['Day12.jpg'],
        ['Day11.jpg'],
        ['Day10.jpg'],
        ['Day09.jpg'],
        ['Day08.jpg'],
        ['Day07.jpg'],
        ['Day06.jpg'],
        ['Day05.jpg'],
        ['Day04.jpg'],
        ['Day03.jpg'],
        ['Day02.jpg'],
        ['Day01_06.jpg', 'Day01_05.jpg', 'Day01_04.jpg', 'Day01_03.jpg', 'Day01_02.jpg', 'Day01_01.jpg']
    ]; 

    document.body.style.backgroundColor = colors[remainingDays % colors.length]; 
    document.getElementById('daily-image').src = images[remainingDays % images.length][0];
}

function initialize() {
    const deadline = new Date("April 6, 2024 07:40:00 GMT+0300"); 
    initializeClock(deadline);
    setBackgroundAndImage(deadline);
}

initialize(); 
