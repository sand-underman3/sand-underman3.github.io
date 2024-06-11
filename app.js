const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("wsg my bb")
})

app.listen(3000)