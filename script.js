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
        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${t.days}d ${t.hours}h ${t.minutes}m ${t.seconds}s`;

        // Change background color based on minutes remaining
        const colors = ['#30D5C8', '#c72418', '#1829c7', '#8118c7', '#c73e18', '#18a7c7', '#600e6b', '#6b0e0e', '#d13f3f', '#a83fd1', '#76999c', '#b3a33b', '#7d240b', '#0b247d', '#427d1e', '#a3364f', '#364ea3']; 
        const colorIndex = Math.min(t.minutes, colors.length - 1); // Ensure color index is within the range
        document.body.style.backgroundColor = colors[colorIndex];

        if (t.total <= 0) {
            clearInterval(timeinterval);
            countdownElement.innerHTML = "Countdown ended";
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 60000); // Update clock every minute
}

function initialize() {
    const deadline = new Date("April 6, 2024 07:40:00 GMT+0300");
    initializeClock(deadline);
}

initialize();
