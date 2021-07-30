// Modules to control application life and create native browser window
const {app, BrowserWindow, screen} = require('electron')
const path = require('path')
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 450,
    height: 600,
    frame: false, //去除標題
    hasShadow: false,  //去除陰影
    transparent: true, //設置透明背景
    resizable: false, //禁止改變視窗大小
    alwaysOnTop: true, //永遠置頂
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  // and load the index.html of the app.
  mainWindow.loadFile('www/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // 自行設定
  let screen_size = screen.getPrimaryDisplay().workArea;
  let window_size = mainWindow.getSize()
  // 設定值
  mainWindow.setBounds({
    x: screen_size.width - window_size[0],
    y: screen_size.height - window_size[1]
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
