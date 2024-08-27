import mongoose from "mongoose"

export const connection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ordermanager")
        console.log("Conectado correctamente a la base de datos ordermanager ! ! !");
    } catch (e) {
        console.log("error: " + e)
        throw new Error("No se ha podido conctar a la base de datos ! ! !")
    }
}