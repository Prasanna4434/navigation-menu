// Function to handle scroll event
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Original background color
    }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);
