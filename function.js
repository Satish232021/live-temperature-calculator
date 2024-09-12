const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

celcius.addEventListener('input', () => {
    calculateTemp(event);
});
fahrenheit.addEventListener('input', () => {
    calculateTemp(event);
});
kelvin.addEventListener('input', () => {
    calculateTemp(event);
});

function calculateTemp(event){
    let currentValue = +event.target.value
    console.log(currentValue);

    switch (event.target.name) {
        case 'celcius':
            kelvin.value = (currentValue + 273.32).toFixed(2);
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
            if (celcius.value === '') {
                fahrenheit.value = '';
                kelvin.value = '';
            }
            break;
        case 'fahrenheit':
            celcius.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            if (fahrenheit.value === '') {
                celcius.value = '';
                kelvin.value = '';
            }
            break;
        case 'kelvin':
            celcius.value = (currentValue - 273.32).toFixed(2);
            fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            if (kelvin.value === '') {
                fahrenheit.value = '';
                celcius.value = '';
            }
            break;

    
        default:
            console.log('working');
            break;
    }

}