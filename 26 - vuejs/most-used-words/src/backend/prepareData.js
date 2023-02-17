const toLowerCase = _this =>String.prototype.toLowerCase.call(_this)
module.exports = rows =>{
    return new Promise((resolver, reject)=>{
        try{
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(toLowerCase)
            resolver(words)
        }catch(e){
            reject(e)
        }
    })
}

function filterValidRow(row){
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')

    return notNumber && notEmpty && notInterval
}

function removePunctuation(row){
    return row
        .replace(/[,?!.-]/g, '')
        .replace('"','')
}

function removeTags(row){
    return row.replace(/(<[^>]+)>/gi,'').trim()
}

function mergeRows(fullText, row){
    return `${fullText} ${row}`
}