import { Router } from "express";
import { upload } from "../controllers/multer.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


 const loaderRoute = Router();

loaderRoute.route('/')
    .get((req, res) => {
        
        res.render(path.join(__dirname, '../views/loader'), { title: 'Cargador de Archivo' });
    });

loaderRoute.route('/upload')
    .post(upload.single('Archivo'), (req, res, next) => {
        res.status(200).json({
            success: true,
            message: 'Archivo subido correctamente',
            alertType: 'success'
        });
    }, (err, req, res, next) => {
        if (err instanceof multer.MulterError) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                res.status(400).json({ success: false, error: 'El archivo es demasiado grande. El tamaño máximo permitido es de 5 MB.' });
            } else {
                res.status(400).json({ success: false, error: err.message });
            }
        } else {
            res.status(400).json({ success: false, error: err.message });
        }
    });

    export default loaderRoute