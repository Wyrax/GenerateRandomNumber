window.addEventListener('DOMContentLoaded', () => {
    console.log('%c >>> DOM loaded ', 'background: #222; color: #bada55');

    let randomButton = document.getElementById('random_button');

    randomButton.addEventListener('click', () => {
        let minValue = document.getElementById('from').value;
        let maxValue = document.getElementById('upto').value;
        // console.log({minValue});
        // console.log({maxValue});
        // console.log('cliCK');
        // console.log(randomIntFromInterval(minValue, maxValue));

        // var array = new Uint32Array(10);
        // window.crypto.getRandomValues(array);

        // console.log("Your lucky numbers:");
        // for (var i = 0; i < array.length; i++) {
        // console.log(array[i]);
        // }

        // var random = new Random.Random();
        // alert("Random value from 1 to 100: " + random.integer(1, 100));

        let random = new Random(Random.engines.mt19937().autoSeed());
        console.log('Random value from ' + minValue + ' to ' + maxValue+ ': ' + random.integer(minValue, maxValue));
    });

    function randomIntFromInterval(min, max) { // min and max included 
        console.log({min});
        console.log({max});
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
});