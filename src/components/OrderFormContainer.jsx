import { useState, useEffect } from "react"
import OrderForm from "./OrderForm";


function OrderFormContainer() {
    const [formValue, setFormValue] = useState(initialFormValue);
    const [formValues, setFormValues] = useState([])

    const initialFormValue = {
        orden: "",
        id: "",
        cliente: "",
        fecha: "",
        serie: "",
        dispositivo: "",
        marca: "",
        modelo: "",
        falla: ""
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValue(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Añadir el nuevo objeto al array de formValues
        setFormValues(prevValues => [...prevValues, formValue])
        
        // Limpiar el formulario después de añadir el objeto
        setFormValue(initialFormValue)
    }

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    return (
        <OrderForm
        formValue={formValue}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
    )
}

export default OrderFormContainer
