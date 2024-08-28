const express = require('express');
const app = express();
const PORT = 3000

const indexRoutes = require('./routes/index.js');
const endrouteRoutes = require('/routes/endroute.js');

const horaMiddleware = require('./middleware/horaMiddleware.js');
const validarHora = require('./middleware/validarHora.js');


app.use(horaMiddleware);

app.use('/', indexRoutes);

app.use('/endroute', validarHora, endrouteRoutes);

app.use((req, res) => {
    res.status(404).send('<h1>404</h1><h2>Página no encontrada</h2>')
});

  
  app.listen(PORT, () => {
    console.log(`El servidor express está escuchamndo en el puerto http://localhost:${PORT}`)
  });
  