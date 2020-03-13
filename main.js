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
         
        //  frame:false
     });
     mainWindow.loadFile('index.html');
     console.log(BW,electron);
     mainWindow.on('closed',()=>{
         mainWindow = null;
     })
 })
 
 Menu.setApplicationMenu(null);
 
