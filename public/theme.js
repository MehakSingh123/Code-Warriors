const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check the user's preference from local storage
const userPrefersDark = localStorage.getItem('theme') === 'dark';

if (userPrefersDark) {
    body.classList.add('dark-mode');
}

// Function to toggle between dark and light themes
function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);
