const express = require("express")
const app = express()
const port = process.env.PORT || 3001

const data = require("./data.json")

app.get("/cruises/:id", (req, res) => {
    const { id } = req.params
    console.log(data.cruises.filter((cruise) => cruise.id === id))
    res.json(data.cruises.filter((cruise) => cruise.id === id))
})

app.get("/cruises", (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
