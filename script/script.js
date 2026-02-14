const input = document.getElementById('commandInput');
const history = document.getElementById('history');

// Esto hace que el cursor siempre esté listo para escribir
document.addEventListener('click', () => input.focus());

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        
        // 1. Escribir lo que el usuario puso
        const userLine = document.createElement('p');
        userLine.innerHTML = `<span class="prompt">root@mimi:~$</span> ${cmd}`;
        history.appendChild(userLine);
        
        // 2. Ejecutar comando
        processCommand(cmd);
        
        // 3. Limpiar y scroll
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

function processCommand(cmd) {
    const res = document.createElement('p');
    res.className = "res";

    if (cmd === 'help') {
        res.innerHTML = "Comandos: 'ls','open universes', 'cat readme.md', 'play music', 'clear'";
    } else if (cmd === 'ls') {
        res.innerHTML = "readme.md &nbsp;&nbsp; recuerdos.html &nbsp;&nbsp; playlist.html";
    } else if (cmd === 'cat readme.md') {
        res.innerHTML = "Abriendo documentación...";
        setTimeout(() => window.location.href = "modules/readme.html", 1000);
    } else if (cmd === 'open universes') {
        res.innerHTML = "Accediendo a galería...";
        setTimeout(() => window.location.href = "modules/recuerdos.html", 1000);
    } else if (cmd === 'play music') {
        res.innerHTML = "Iniciando stream...";
        setTimeout(() => window.location.href = "modules/playlist.html", 1000);
    } else if (cmd === 'clear') {
        history.innerHTML = "";
        return;
    } else {
        res.innerHTML = `Comando '${cmd}' no reconocido. Escribe 'help'.`;
    }
    
    history.appendChild(res);
}
