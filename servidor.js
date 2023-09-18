const http = require('http');
const chalk = require('chalk');

const HOST = 'localhost';
const PORT = 8000; 

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  
  const resJSON = {
    nombre: 'Jose Luis Mendoza',
    mensaje: 'Hola, soy Jose Luis Mendoza.'
  };

  
  res.end(JSON.stringify(resJSON));
});

server.listen(PORT, HOST, () => {
  const mensaje = `${chalk.green(`Mi Servidor escuchando en http://${HOST}:${PORT}/`)}`;
  console.log(mensaje);
});
