import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

import outagesRoutes from './routes/outagesRoutes'

const app = express();
const PORT = 3000;
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
app.use(bodyParser.json());

/* Route Handlers */
app.use('/outages',outagesRoutes);
app.listen(PORT, () => console.log("Started listening"));

module.exports = app;
export default app;