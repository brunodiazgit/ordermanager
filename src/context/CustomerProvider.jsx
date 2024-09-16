/* eslint-disable react/prop-types */
import { CustomerContext } from "./CustomerContext"


function CustomerProvider({children}){
    return(
        <CustomerContext.Provider>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerProvider