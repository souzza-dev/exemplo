const button = document.getElementById("theme-toggle");
const body = document.body;

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");


    if(body.classList.contains("dark-mode")){
    button.textContent = " Modo ☀️";
    } else{
    button.textContent = "Modo 🌙"
    }
});