/* eslint-disable react/prop-types */
import { FormContext } from "./FormContext"
import { useState } from "react"

const initialFormValue = {
    orden: "",
    id: "",
    cliente: "",
    fecha: "",
    serie: "",
    dispositivo: "",
    marca: "",
    modelo: "",
    falla: "",
    estado: "Pendiente",
    sub_estado: "En Reparación",
    ubicacion: "Taller",
    moneda: "$",
    precios: [0, 0, 0],
    empleado: "",
    observaciones: ""
}

function FormProvider({ children }) {
    const[formValue, setFormValue] = useState(initialFormValue)
    
    const updateFormValue = (newValue)=>{
        setFormValue(prevState =>({
            ...prevState, ...newValue,
        }))
    }


    return (
        <FormContext.Provider value={{formValue, updateFormValue, initialFormValue}}>
            {children}
        </FormContext.Provider>

    )
}

export default FormProvider