//importa módulos app e BrowserWindo do Electron
const { app, BrowserWindow } = require('electron')

// funçao para criar a janela principal
function createWindow () {
    // criar uma nova instancia do BrowserWindow
    const window = new BrowserWindow({
        width: 800, // Largura da janela
        height: 600, // LAlutra da janela

    })
    
// carregar o arquivo HTML janela Janela
window.loadFile('src/pages/index.html');
}


// Evento que é acionado quando o Electron está pronto
app.whenReady().then( () => {
    createWindow(); // Chama funçao de criar a janela
} )