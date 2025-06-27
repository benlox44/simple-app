const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde CI/CD! actualizado');
});

app.listen(PORT, () => {
  console.log(`App corriendo en el puerto ${PORT}`);
});

app.get('/nuevo', (req, res) => {
  res.send('¡Ruta nueva desplegada por CI/CD!');
});

