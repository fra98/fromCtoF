const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    minHeight: 300,
    minWidth: 700,
    width: 700,
    height: 300,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
  mainWindow.setMenuBarVisibility(false);
};


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

function displaytemp(sel, grad) {
  //alert("La temperatura in Fahrenheit è " + (celsius * 9/5 + 32));  mostra un messaggio a schermo con il risultato
  //document.getElementById('stampa').innerHTML = "La temperatura in gradi Fahrenheit è " + (celsius * 9 / 5 + 32) + "°F";
  switch (sel) {
    case "F":
      document.getElementById('stampa').innerHTML = grad + " gradi celsius sono " + (grad * 9 / 5 + 32) + " gradi fahrenheit.";
      break;
    case "C":
      document.getElementById('stampa').innerHTML = grad + " gradi fahrenheit sono " + ((grad - 32)*5/9) + " gradi celsius.";
      break;
  }
};