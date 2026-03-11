const contentDivs = document.querySelectorAll('.right > div');
const radios = document.querySelectorAll('input[type="radio"]');

console.log(contentDivs);


function updateDisplay(id) {
    contentDivs.forEach(div => {
        const targetClass = id.charAt(0).toUpperCase() + id.slice(1);
        
        if (div.classList.contains(targetClass)) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        updateDisplay(e.target.id);
    });
});

updateDisplay('home');