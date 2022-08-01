const express = require("express")
const app = express()
const port = process.env.PORT || 3001

const data = require("./data.json")

app.get("/cruises/:id", (req, res) => {
    const id = req.params.id
    const resultArray = data.cruises.filter((cruise) => cruise.id == id)
    if (result.length > 0) {
        res.json({ cruise: resultArray[0] })
    } else {
        res.status(404).send("Cruise Not Found")
    }
})

app.get("/cruises", (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
