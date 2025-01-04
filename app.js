import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import loaderRoute from './routes/loader.routes.js';
import { engine } from 'express-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST']
}));


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

app.use('/api', loaderRoute);

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));