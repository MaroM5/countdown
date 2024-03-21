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
        const dayCountdown = document.getElementById('day-countdown');
        dayCountdown.textContent = `Days: ${t.days + 1}`; // +1 because we're counting the current day as well
        const fullCountdown = document.getElementById('full-countdown');
        fullCountdown.textContent = `Exact countdown:\n ${t.days}d ${t.hours}h ${t.minutes}m ${t.seconds}s`;

        if (t.total <= 0) {
            clearInterval(timeinterval);
            confetti.start();
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

function setBackgroundAndImage(endtime) {
    const now = new Date();
    const daysUntilDeadline = Math.ceil((endtime - now) / (1000 * 60 * 60 * 24));

    // Calculate the day of the countdown
    const dayOfCountdown = Math.max(1, 17 - daysUntilDeadline); // Adjust 17 to the total number of days in the countdown

    // Retrieve images for the current day from the images object
    const imageArray = images[dayOfCountdown] || []; // Use empty array if images are not defined for the day

    // Display all images for the day one below the other
    const imageContainer = document.getElementById('daily-image-container');
    imageContainer.innerHTML = ''; // Clear previous images
    imageArray.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Daily Image';
        imageContainer.appendChild(img);
    });

    const colors = ['#30D5C8', '#c72418', '#1829c7', '#8118c7', '#c73e18', '#18a7c7', '#600e6b', '#6b0e0e', '#d13f3f', '#a83fd1', '#76999c', '#b3a33b', '#7d240b', '#0b247d', '#427d1e', '#a3364f', '#364ea3']; 
    document.body.style.backgroundColor = colors[dayOfCountdown % colors.length]; 
}

function initialize() {
    const deadline = new Date("April 6, 2024 07:40:00 GMT+0300"); 
    initializeClock(deadline);
    setBackgroundAndImage(deadline);
}

// Object to store images for each day of the countdown

const images = {
    1: ['Day01_01.jpg', 'Day01_02.jpg', 'Day01_03.jpg', 'Day01_04.jpg', 'Day01_05.jpg', 'Day01_06.jpg'],
    2: ['Day02.jpg'],
    3: ['Day03.jpg'],
    4: ['Day04.jpg'],
    5: ['Day05.jpg'],
    6: ['Day06.jpg'],
    7: ['Day07.jpg'],
    8: ['Day08.jpg'],
    9: ['Day09.jpg'],
    10: ['Day10.jpg'],
    11: ['Day11.jpg'],
    12: ['Day12.jpg'],
    13: ['Day13.jpg'],
    14: ['Day14.jpg'],
    15: ['Day15.jpg', 'Day15_02.jpg'],
    16: ['Day16.jpg']
    // Add more days as needed
};

initialize();
