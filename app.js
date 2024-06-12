const express = require("express")

const app = express()
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.send("wsg my bb")
})

const GenRouters  = require("./Projects/generalRouters")
app.use("/sites", GenRouters)

app.listen(3000)