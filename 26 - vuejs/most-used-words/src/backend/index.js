const {ipcMain} = require('electron')
const PROCESS_CHANNEL = 'process-subtitles'

ipcMain.on(PROCESS_CHANNEL, (event, paths)=>{
    console.log(paths)
    event.reply(PROCESS_CHANNEL,[
        {name:'I', amount: 1234 },
        {name:'you', amount: 900 },
        {name:'he', amount: 853 },
        {name:'she', amount: 853 },
        {name:'our', amount: 133 },
        {name:'house', amount: 23 },
    ])
})