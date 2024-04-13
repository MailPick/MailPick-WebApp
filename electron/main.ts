import { app, BrowserWindow, Menu,ipcMain, MenuItem } from 'electron'
import path from 'node:path'

process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

let win: BrowserWindow | null
export const SEND_MAIN_PING = 'send_main_ping';
// const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createLoginWindow(){
  win = new BrowserWindow({
    width: 400,
    height: 500,
    webPreferences:{
      preload: path.join(__dirname, 'preload.js'),
    },
    titleBarStyle: 'hidden',
  })
  win.loadURL("http://localhost:5173")
  const menu = new Menu()
  menu.append(new MenuItem({
    label:"MailPick",
    submenu:[{
      role:"quit",
      accelerator:"CmdOrCtrl+Q",
      click:()=>{
        app.quit()
      }
    },{
      role:"reload",
      accelerator:"CmdOrCtrl+R",
      click:()=>{
        win?.webContents.reload()
      }
    },{
      label:"devtools",
      accelerator:"CmdOrCtrl+D",
      click:()=>{
        win && win.webContents.openDevTools();
      }
    },{
      label:"close devtools",
      accelerator:"CmdOrCtrl+Shift+D",
      click:()=>{
        win && win.webContents.closeDevTools();
      }
    },{
      label: "zoom",
      accelerator: "CmdOrCtrl+=",
      click: () => {
        if (win) {
          const currentZoom = win.webContents.getZoomFactor();
          win.webContents.setZoomFactor(currentZoom + 0.1);
        }
      }
    },{
      label: "zoom out",
      accelerator: "CmdOrCtrl+-",
      click: () => {
        if (win) {
          const currentZoom = win.webContents.getZoomFactor();
          win.webContents.setZoomFactor(currentZoom - 0.1);
        }
      }
    }]
  }))
    Menu.setApplicationMenu(menu)
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('check-login');
  });

  win.on('closed', () => {
    win = null;
  });
}

function switchToMainWindow(){
  if(win){
    win.setSize(1600, 900);
    win.center();
    win.loadURL("http://localhost:5173/main");

    
  }
}

// function createWindow() {
//   app.setName("MailPick")
//   win = new BrowserWindow({ 
//     width: 1600,
//     height: 900,
//     minWidth: 800,
//     minHeight: 600,
//     title:"MailPick",
//     titleBarStyle: 'hidden',
//     icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//     },
//   })
  

//   // Test active push message to Renderer-process.
//   win.webContents.on('did-finish-load', () => {
//     win?.webContents.send('main-process-message', (new Date).toLocaleString())
//   })

//   if (VITE_DEV_SERVER_URL) {
//     win.loadURL(VITE_DEV_SERVER_URL)
//   } else {
//     // win.loadFile('dist/index.html')
//     win.loadFile(path.join(process.env.DIST, 'index.html'))
//   }
// }

let mailBoxWindow: BrowserWindow | null;

ipcMain.on('open-mailbox', ()=>{
  if (mailBoxWindow) {
    if(mailBoxWindow.isMinimized()) mailBoxWindow.restore();
    mailBoxWindow.focus(); // 창이 이미 있으면 포커스
    return;
  }
  
  mailBoxWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false
    },
    titleBarStyle: 'hidden',
  })

  mailBoxWindow.on('closed', () => {
    mailBoxWindow = null; 
  });

  const menu = new Menu()
  menu.append(new MenuItem({
    label:"MailPick",
    submenu:[{
      role:"close",
      accelerator:"CmdOrCtrl+W",
      click:()=>{
        mailBoxWindow && mailBoxWindow.close();
      }
    },{
      role:"reload",
      accelerator:"CmdOrCtrl+R",
      click:()=>{
        win?.webContents.reload()
      }
    },{
      //개발자 도구 열기
      label:"DevTools",
      accelerator:"CmdOrCtrl+D",
      click:()=>{
        mailBoxWindow && mailBoxWindow.webContents.openDevTools();
      } 
    }]
}))
Menu.setApplicationMenu(menu)
  mailBoxWindow.loadURL("http://localhost:5173/mailbox")
})

app.whenReady().then(createLoginWindow)
ipcMain.on('login-successful', switchToMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createLoginWindow();
  }
})

