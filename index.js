import express from "express"
import cors from "cors"
import orderRoutes from "./db/routes/orderRoutes.js"
import customerRoutes from "./db/routes/customerRoutes.js"

console.log("inicializando base de datos...");
console.log("Conectado a la base de datos correctamente ! ! !")

const app = express()
const port = 4500

app.use(cors())

app.use(express.json())

app.use("/api/order", orderRoutes)
app.use("/api/user", customerRoutes)

app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: " + port)
})



