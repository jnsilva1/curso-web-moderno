module.exports =words=> {
    return new Promise((resolver, reject)=>{
        try {
            const groupedWords = words.reduce((obj,word)=>{
                obj[word] = (obj[word]||0) + 1
                return obj
            }, {})

            const groupedWordsArray = Object.keys(groupedWords)
                .map(name => ({name, amount: groupedWords[name] }))
                .sort((w1, w2)=> w2.amount - w1.amount)

            resolver(groupedWordsArray)
        } catch (e) {
            reject(e)
        }
    })
}