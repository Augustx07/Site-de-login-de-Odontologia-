const voiceBtn = document.getElementById("voiceBtn");
const status = document.getElementById("status");

if ('webkitSpeechRecognition' in window) {

const recognition =
new webkitSpeechRecognition();

recognition.lang = 'pt-BR';

voiceBtn?.addEventListener('click', () => {

status.textContent =
"Assistente ativado.";

recognition.start();

});

recognition.onresult = (event) => {

const comando =
event.results[0][0].transcript
.toLowerCase();

status.textContent =
"Comando: " + comando;

if(comando.includes("email")){

document
.querySelector('input[type="email"]')
.focus();

}

if(comando.includes("senha")){

document
.querySelector('input[type="password"]')
.focus();

}

if(comando.includes("entrar")){

document
.querySelector('button[type="submit"]')
.click();

}

if(comando.includes("cadastro")){

window.location =
"cadastro.html";

}

};

}
const themeBtn =
document.getElementById("themeToggle");

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent =
        "☀️ Modo Claro";
    }else{
        themeBtn.textContent =
        "🌙 Modo Escuro";
    }

});