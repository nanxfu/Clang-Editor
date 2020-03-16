// import{app,BrowserWindow,Menu} from 'electron'
// var Menu = require('Menu');
// import Menu from 'electron';
var electron = require('electron');

// var Menu = require('electron');
var app = electron.app;

var Menu =electron.Menu;
var BW = electron.BrowserWindow;

var mainWindow = null;
 app.on('ready',function(){
      mainWindow = null;
     mainWindow = new BW({
         width: 1100,
         height:638,
         webPreferences: {
            nodeIntegration: true
      }
         
        //  frame:false
     });
     mainWindow.loadFile('index.html');
     mainWindow.webContents.openDevTools();
    //  console.log(BW,electron);
    // console.log(mainWindow);
     mainWindow.on('closed',()=>{
         mainWindow = null;
     })
 })
//  mainWindow.webContents.openDevTools();
 console.log(mainWindow);
 Menu.setApplicationMenu(null);
 
