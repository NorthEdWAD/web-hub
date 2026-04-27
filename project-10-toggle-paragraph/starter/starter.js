// Select the toggle paragraph, toggle button, and reset button
const toggleParagraph = document.querySelector('#toggleParagraph');
const toggleBtn = document.querySelector('#toggleBtn');
const resetBtn = document.querySelector('#resetBtn');

// Arrow function to toggle between light and dark mode
const toggleMode = () => {
    if (toggleParagraph.classList.contains('light-mode')) {
        toggleParagraph.classList.remove('light-mode');
        toggleParagraph.classList.add('dark-mode');
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleParagraph.classList.remove('dark-mode');
        toggleParagraph.classList.add('light-mode');
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
};

// Arrow function to reset to light mode
const resetMode = () => {
    toggleParagraph.classList.remove('dark-mode');
    toggleParagraph.classList.add('light-mode');
    toggleBtn.textContent = 'Switch to Dark Mode';
};

// Add event listeners using arrow functions
toggleBtn.addEventListener('click', toggleMode);
resetBtn.addEventListener('click', resetMode);
