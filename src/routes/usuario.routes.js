import { Router } from "express";
import {methods as userController} from '../controllers/usuarioController.js'
import path from 'path'

import { fileURLToPath } from 'url';
const router = Router()


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/login.html'))
})

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/register.html'))
})


router.post('/register', userController.crearUsuario)
router.post('/login', userController.obtenerUsuario)


export default router