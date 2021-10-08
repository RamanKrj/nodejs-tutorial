const fs = require('fs')

console.log(`Start File read/write operation`)

fs.readFile(`${__dirname}/contents/deepseas/texts/mytext.txt`, 'utf8', (err, data) => {

    if (err) throw err

    const first = data

    console.log(`Read 1st file`)

    fs.readFile(`${__dirname}/contents/deepseas/texts/mytext2.txt`, `utf8`, (err, data) => {

        if (err) throw err

        const second = data

        console.log(`Read 2nd file.`)

        fs.writeFile(`${__dirname}/contents/deepseas/texts/result-async.txt`,
            `Here is the result :${first}, ${second}\n`, { flag: 'a' }, (err) => {

                if (err) throw err

                console.log(`File has been written.`)
            })
    })
})

console.log('Done with the task')