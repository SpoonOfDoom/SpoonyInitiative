const { app, BrowserWindow } = require('electron')

const windows = []

app.whenReady().then(() => {

  // A transparent window.
  const windowOptions = {
    x: 600,
    y: 600
  }
  // On Windows platforms, a transparent window must be frameless
  if (process.platform === 'win32') {
    windowOptions.frame = false
  }
  windows.push(new BrowserWindow(windowOptions))


  windows.forEach((window) => {
    // Load our index.html
    window.loadFile('index.html')
  })
})
