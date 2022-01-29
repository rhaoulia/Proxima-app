const electron = require('electron')
const path = require('path')
const remote = electron.remote
const ipcRenderer = require('electron').ipcRenderer;
const closeBtn = document.getElementById('close-btn')

closeBtn.addEventListener('click', function (event) {
       ipcRenderer.send('close-window');
})