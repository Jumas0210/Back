import 'dotenv/config';
import express from 'express';
import router from './routes/products.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*'
}));

app.use('/products', router);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));
} catch (e) {
    console.log(e);
}