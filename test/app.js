var PORT = 5001
var express = require('express')
var app = express()

app.use(express.static(__dirname + "/public"))

app.get("*", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, function () {
    console.log("running on port:", PORT)
})