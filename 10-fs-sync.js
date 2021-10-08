const { readFileSync, writeFileSync } = require('fs')

try {
    const firstRead = readFileSync(__dirname + '/contents/deepseas/texts/mytext.txt', 'utf-8')
    try {
        const secondRead = readFileSync(__dirname + '/contents/deepseas/texts/mytext2.txt', 'utf-8')
        console.log(firstRead + '\n' + secondRead)
        try {
            writeFileSync(__dirname + '/contents/deepseas/texts/result-sync.txt', 'Here is the result :' + firstRead + '\n' + secondRead + '\n', { flag: 'a' })
            try {
                const resultFileContent = readFileSync(__dirname + '/contents/deepseas/texts/result-sync.txt', 'utf8')
                console.log('\nResult file Content: \n', resultFileContent)
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
} catch (error) {
    console.log(error)
}