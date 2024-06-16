import { config } from "dotenv";

config()

export default {
    database: process.env.DATABASE || '',
    port: process.env.HOST || ''
}