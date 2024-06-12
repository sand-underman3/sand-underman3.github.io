const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("What? Dont be here.")
})

router.get("/:site", (req, res) => {
    const siteQuery = req.params.site
    res.render()
    res.status(200).send(`The site you have request is ${siteQuery}. unfortunately we DONT HAVE IT!!!!`)
})