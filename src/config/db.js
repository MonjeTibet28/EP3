import mongoose from "mongoose";
import config from "./config.js";

const conectarBD = async () =>{
    try {
        await mongoose.connect(config.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('BD Conectada')
    } catch (error) {
        console.log(`Error a cocentarse al mongoDB ${error}`)
        process.exit(1)
    }
}

export default conectarBD