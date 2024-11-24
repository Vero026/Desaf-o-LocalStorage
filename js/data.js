const dataSpam = document.getElementById('data');

const storedData = localStorage.getItem('userInput');

if (storedData) {

    dataSpam.textContent = storedData;

} else{
    dataSpam.textContent = "No hay datos guardados";
}