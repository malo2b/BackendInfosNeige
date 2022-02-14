const express = require('express')
const app = express()
const port = 3000
const data = require("./data.json")



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/nivose/', (req, res) => {
    let region = req.query.region
    let sonde = req.query.sonde
    res.send(data[region][sonde]);
})

app.get('/positions/nivose', (req, res) => {
    let positions = []
    Object.entries(data).forEach(region => { // Pour chacune des regions
        Object.entries(region[1]).forEach(sonde => { // Pour chacune des sondes
            positions.push({
                "nom" : sonde[0],
                "latitude": sonde[1].latitude,
                "longitude": sonde[1].longitude
            })
        });
    });
    res.send(positions)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

