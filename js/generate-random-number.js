window.addEventListener('DOMContentLoaded', () => {
    console.log('%c >>> DOM loaded ', 'background: #222; color: #fcee21');

    let randomButton = document.getElementById('random_button');
    let randomNumberDiv = document.getElementById('random_number');
    let winNumberSpan = document.getElementById('win_number');

    randomButton.addEventListener('click', () => {

        let minValue = document.getElementById('from').value;
        let maxValue = document.getElementById('upto').value;

        winNumberSpan.textContent = '';
        randomNumberDiv.style.backgroundImage = 'url("/img/fireworks.gif?' + new Date().getTime() + '")';

        let random = new Random(Random.engines.mt19937().autoSeed());
        let winNumber = random.integer(minValue, maxValue);
        console.log('Random value from ' + minValue + ' to ' + maxValue+ ': ' + winNumber);
        // randomNumberDiv.classList.add('fireworks');
        setTimeout(function() { winNumberSpan.textContent = winNumber; }, 500);
        setTimeout(function() {
            // randomNumberDiv.classList.remove('fireworks');
            randomNumberDiv.style.backgroundImage = 'none';
        }, 5500);

    });

});

/* background-image: url('/img/fireworks.gif'); */