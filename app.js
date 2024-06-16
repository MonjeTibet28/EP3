import express from "express"
import db from './src/config/db.js'
import config from './src/config/config.js'
import cors from 'cors'
import path from 'path'
import router from "./src/routes/usuario.routes.js"

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
db()


app.set('port', config.port)

app.use((req, res, next) => {
    next()
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

export default app