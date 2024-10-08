
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Challenge Time Pass</title>
</head>
<body>
    <header>
        <a href="/">Inicio</a>
    </header>
    <div>
        <div>
            <h1>Bienvenido Developers</h1>
        </div>
        <div>
            <h3>La hora actual es:</h3>
            <h2>${req.dateType}H.</h2>
            <a href="/endroute"><button> Validar Hora </button></a>
        </div>
    </div>
</body>
</html>
        `)
})

module.exports = route;
