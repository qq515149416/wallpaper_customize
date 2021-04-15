const { app, BrowserWindow,Menu } = require('electron');

const createWindow = () => {   
    Menu.setApplicationMenu(null);
    // 创建浏览器窗口
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 800,
      minHeight: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    // 打开开发者工具
    // win.webContents.openDevTools()
  
    // 加载index.html文件
    win.loadFile('index.html');
  }
  
  app.on('ready', createWindow);