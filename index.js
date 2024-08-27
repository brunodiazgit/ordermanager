import express from "express"
import cors from "cors"
import {connection} from "./db/connection.ts"
import orderRoutes from "./db/routes/orderRoutes.ts"

console.log("inicializando base de datos...")
connection()

const app = express()
const port = 4200

app.use(cors())

app.use(express.json())

app.use("/api", orderRoutes)

app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: " + port)
})



