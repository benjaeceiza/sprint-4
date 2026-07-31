const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const initDB = require('./src/config/initDB');
const productRouter = require("./src/routes/products.router");
const categoryRouter = require('./src/routes/categories.router');

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());


app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);

app.listen(process.env.PORT, async () => {
    console.log(`Servidor escuchado en el puerto ${process.env.PORT}`);

    await initDB();
});