const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a la ruta final!</h1>
        <h3>Estás en ./endroute</h3>
    `);
});

module.exports = router;