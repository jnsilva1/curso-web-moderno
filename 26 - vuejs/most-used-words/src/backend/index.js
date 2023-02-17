const {ipcMain} = require('electron')
const PROCESS_CHANNEL = 'process-subtitles'

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords =require('./groupWords')

ipcMain.on(PROCESS_CHANNEL, (event, paths)=>{
    console.log(paths)
    pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words=> groupWords(words))
    .then(groupedWords=> event.reply(PROCESS_CHANNEL,groupedWords))
})