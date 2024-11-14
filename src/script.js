import './style.css'

// mode change
let toMode = "light";
const modeButton = document.querySelector(".mode_toggle");
modeButton.textContent = `${toMode} mode`;

const toggleMode = () => {
  if (modeButton.textContent.startsWith('light')) {
    toMode = 'dark';
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  } else {
    toMode = 'light';
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }
  modeButton.textContent = toMode + ' mode';
}
modeButton.addEventListener('click', toggleMode);