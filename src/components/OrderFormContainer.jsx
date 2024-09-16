import { useState, useEffect } from "react"
import OrderForm from "./OrderForm"
import { useForm } from "../context/FormContext"


function OrderFormContainer() {
    const {formValue, updateFormValue, initialFormValue} = useForm()
    const [formValues, setFormValues] = useState([])
    const handleChange = (e) => {
        const { id, value} = e.target

        if (id.startsWith("precio")) {
            const index = parseInt(id.replace("precio", ""), 10)
            const newPrecios = [...formValue.precios]
            newPrecios[index] = parseFloat(value) || 0
            updateFormValue({ precios: newPrecios })
        } else {
            updateFormValue({ [id]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Añadir el nuevo objeto al array de formValues
        setFormValues(prevValues => [...prevValues, formValue])

        // Limpiar el formulario después de añadir el objeto
        updateFormValue(initialFormValue)
    }

    useEffect(() => {
        console.log(formValues);
    }, [formValues]);

    return (
        <>
            <OrderForm
                formValue={formValue}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default OrderFormContainer
