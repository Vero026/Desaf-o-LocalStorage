const button = document.getElementById('buttonText');
const input = document.getElementById('inputText');

button.addEventListener('click', () => {
    const inputValue = input.value;

    localStorage.setItem('userInput', inputValue);

    input.value = '';
});