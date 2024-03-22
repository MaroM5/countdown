function setBackgroundAndImage(endtime) {
    const now = new Date();
    const daysUntilDeadline = Math.ceil((endtime - now) / (1000 * 60 * 60 * 24));

    // Calculate the day of the countdown
    const dayOfCountdown = Math.max(0, 16 - daysUntilDeadline); // Adjust 16 to the total number of days in the countdown

    // Define images for each day
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

    // Get the images for the current day
    const currentImages = images[dayOfCountdown] || [];
    
    // Randomly select one image if there are multiple images for the day
    const randomIndex = Math.floor(Math.random() * currentImages.length);
    const selectedImage = currentImages[randomIndex];

    // Set background color
    const colors = ['#30D5C8', '#c72418', '#1829c7', '#8118c7', '#c73e18', '#18a7c7', '#600e6b', '#6b0e0e', '#d13f3f', '#a83fd1', '#76999c', '#b3a33b', '#7d240b', '#0b247d', '#427d1e', '#a3364f', '#364ea3']; 
    const colorIndex = Math.max(0, dayOfCountdown % colors.length); // Ensure color index is within the range
    document.body.style.backgroundColor = colors[colorIndex]; 

    // Set image source
    document.getElementById('daily-image').src = selectedImage;
}
