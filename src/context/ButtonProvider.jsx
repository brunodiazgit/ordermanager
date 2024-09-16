/* eslint-disable react/prop-types */
import { useState } from "react"
import { buttonContext } from "./ButtonContext"

function ButtonProvider({ children }) {
    const [disabled, setDisabled] = useState(true)

    const disabledHandler=()=>{
        setDisabled(false)
    }



    return (
        <buttonContext.Provider value={{disabledHandler, disabled}}>
            {children}
        </buttonContext.Provider>
    )
}

export default ButtonProvider