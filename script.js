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
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            countdownElement.style.display = 'none';
            messageElement.style.display = 'block'; 
        } else {
            countdownElement.innerHTML = `${t.days}d ${t.hours}h ${t.minutes}m ${t.seconds}s`;
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}


function initialize() {
    const deadline = new Date("July 02, 2025 22:51:50 GMT+0300");
    initializeClock(deadline);
}

initialize();
