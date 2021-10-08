const http = require('http')

http.createServer((req, res) => {

    if (req.url === "/") {
        res.end(`Welcome to my Home Page !!`)
    } else if (req.url === "/about") {
        res.end(`Hi buddy !! I'm Raman.`)
    } else {
        res.end(`<html><body>
        <h2>Oops !!</h2>
        <p>The page u'r looking for is not available at the moment</p>
        <a href="/">Home Page</a></body></html>`)
    }

}).listen(3000, () => {
    console.log(`The web server is running on port: 3000`)
})