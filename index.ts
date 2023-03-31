import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import outagesRoutes from './routes/outages'

const app = express();
const HOST = '127.0.0.1';
const PORT = 3001;
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use(bodyParser.json());

/* Route Handlers */
app.use('/outages',outagesRoutes);
app.listen(PORT, HOST, () => console.log("Started listening"));

module.exports = app;
export default app;