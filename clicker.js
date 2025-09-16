const clickerButton = document.getElementById('clicker');
const counterDisplay = document.getElementById('counter');
let count = 0;

function updateCounter() {
    count = count + 1; 
    counterDisplay.textContent = count;
}

clickerButton.addEventListener('click', updateCounter);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        updateCounter();
    }
});
