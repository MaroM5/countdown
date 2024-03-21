function setBackgroundAndImage(endtime) {
    const now = new Date();
    const daysUntilDeadline = Math.ceil((endtime - now) / (1000 * 60 * 60 * 24));

    // Calculate the day of the countdown
    const dayOfCountdown = Math.max(0, 16 - daysUntilDeadline); // Adjust 16 to the total number of days in the countdown

    const colors = ['#30D5C8', '#c72418', '#1829c7', '#8118c7', '#c73e18', '#18a7c7', '#600e6b', '#6b0e0e', '#d13f3f', '#a83fd1', '#76999c', '#b3a33b', '#7d240b', '#0b247d', '#427d1e', '#a3364f', '#364ea3']; 
    const images = [
        'Day16.jpg',
        'Day15_02.jpg',
        'Day14.jpg',
        'Day13.jpg',
        'Day12.jpg',
        'Day11.jpg',
        'Day10.jpg',
        'Day09.jpg',
        'Day08.jpg',
        'Day07.jpg',
        'Day06.jpg',
        'Day05.jpg',
        'Day04.jpg',
        'Day03.jpg',
        'Day02.jpg',
        'Day01_06.jpg', 'Day01_05.jpg', 'Day01_04.jpg', 'Day01_03.jpg', 'Day01_02.jpg', 'Day01_01.jpg'
    ]; 

    // Ensure that dayOfCountdown is within the range of the images array
    const imageIndex = Math.min(dayOfCountdown, images.length - 1);

    document.body.style.backgroundColor = colors[dayOfCountdown % colors.length]; 
    document.getElementById('daily-image').src = images[imageIndex];
}
