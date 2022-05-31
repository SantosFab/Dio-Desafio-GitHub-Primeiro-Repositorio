const elementBody = document.getElementsByTagName("body")[0]; /* Lembre-se que retorna uma coleção por isso existe um index */
const elementH1 = document.getElementById("page-title");
const elementBtn = document.getElementById("mode-selector");
const elementFtr = document.getElementsByTagName("footer")[0]; /* Lembre-se que retorna uma coleção por isso existe um index */

function chamarDarkMode() {
    darkMode();
    changeText();
}

function darkMode() { 
    elementBody.classList.toggle("dark-mode");
    elementFtr.classList.toggle("dark-mode");
    elementH1.classList.toggle("dark-mode");
    elementBtn.classList.toggle("dark-mode");
};

function changeText() {
    if (elementBody.classList.contains("dark-mode")) {
        elementBtn.innerHTML = "Light Mode";
        elementH1.innerHTML = "Dark Mode ON";
    } else {
        elementBtn.innerHTML = "Dark Mode";
        elementH1.innerHTML = "Light Mode ON";
    }
}

elementBtn.addEventListener("click", chamarDarkMode);

/* function darkMode(elementBody, elementH1, elementFtr, elementBtn) {  Porque não consigo codar a função enviando os elementos? 
    elementBody.classList.toggle("dark-mode");
    elementFtr.classList.toggle("dark-mode");
    elementH1.classList.toggle("dark-mode");
    elementBtn.classList.toggle("dark-mode");
};

elementBtn.addEventListener("click", darkMode(elementBody, elementFtr, elementH1, elementBtn));  será que o addEventListener não aceita essa funcionalidade?*/

