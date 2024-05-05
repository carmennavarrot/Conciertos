const express = require('express');
const{ connectDB }= require('./src/utils/database');
const routerConcert = require('./src/api/routes/concert.routes');
const routerAttende = require('./src/api/routes/attende.controller')


const server = express();
server.use(express.json());
connectDB();

 
server.use('/', routerConcert);
server.use('/attende', routerAttende);



const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Escuchando puerto http://localhost:${PORT}`);
  });