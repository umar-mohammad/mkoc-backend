const express = require("express")
const app = express()
const port = process.env.PORT || 3001

const data = require("./data.json")

app.get("/", (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
