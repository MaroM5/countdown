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

        if (t.total <= 0) {
            clearInterval(timeinterval);
            countdownElement.innerHTML = "Countdown ended";
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

function initialize() {
    const deadline = new Date("April 8, 2025 18:00:00 GMT+0300"); //"Month XX, XXXX xx:xx:xx GMT+0300"
    initializeClock(deadline);
}

initialize();
