const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// Dark or Light Images
function imageMode(color) {
  image1.src = `assets/undraw_proud_coder_${color}.svg`;
  image2.src = `assets/undraw_feeling_proud_${color}.svg`;
  image3.src = `assets/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(color) {
  toggleIcon.children[0].textContent =
    color === 'dark' ? 'Dark Mode' : 'Light Mode';
  color === 'dark'
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode(color);
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode('light');
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode('dark');
  } else {
    toggleSwitch.checked = false;
    toggleDarkLightMode('light');
  }
}
