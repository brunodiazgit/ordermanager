import { createContext, useContext } from "react"

export const buttonContext = createContext()

export const useButton = ()=> useContext(buttonContext)
