const express = require('express')
const app = express()
const port = 4000
const data = require("./quartieri.json");

app.get('/', (req, res) => {
    console.log("Ecco");
    res.send(`geo(${JSON.stringify(data)});`);
});

app.listen(port, () => console.log(`GeoJSON app listening at http://localhost:${port}`))