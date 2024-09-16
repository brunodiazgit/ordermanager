/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useButton } from "../context/ButtonContext"
import Workshop from "./Workshop"

function OrderForm({ formValue, onChange, onSubmit }) {
    const { disabled, disabledHandler } = useButton()

    return (
        <form onSubmit={onSubmit} className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-1 bg-white shadow-md rounded-md m-6">
            <div className="flex justify-center center items-center gap-2 m-6">
                <button type="button" onClick={disabledHandler} className="h-16 w-40 bg-green-800 rounded-md text-white">Nueva Orden</button>
                <button type="button" className="h-16 w-40 bg-blue-800 rounded-md text-white ">Editar</button>
                <button type="submit" className="h-16 w-40 bg-red-800 rounded-md text-white ">Guardar</button>
            </div>
            <div className="flex flex-col w-80">
                <label htmlFor="orden">Orden</label>
                <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400" : "h-10 rounded-lg border-2 bg-white  border-black p-2"} type="number" id="orden" onChange={onChange} value={formValue.orden} disabled={disabled} />
            </div>

            <div className="flex justify-between items-end gap-2">
                <div className="flex flex-col">
                    <label htmlFor="id">Id</label>
                    <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400 w-16" : "h-10 rounded-lg border-2 bg-white  border-black p-2 w-16"} type="number" id="id" onChange={onChange} value={formValue.id} disabled={disabled} />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cliente">Cliente</label>
                    <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400" : "h-10 rounded-lg border-2 bg-white  border-black p-2"} type="text" id="cliente" onChange={onChange} value={formValue.cliente} disabled={disabled} required/>
                </div>
                <Link to={'/customer'}><button className=" text-white h-10 w-10 bg-red-800 rounded-md ">+</button></Link>
            </div>

            <div className="flex flex-col">
                <label htmlFor="fecha">Fecha de ingreso</label>
                <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400 w-80" : "h-10 rounded-lg border-2 bg-white  border-black p-2 w-80"} type="date" id="fecha" onChange={onChange} value={formValue.fecha} disabled={disabled} required/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="serie">Serie</label>
                <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400 w-80" : "h-10 rounded-lg border-2 bg-white  border-black p-2 w-80"} type="number" id="serie" onChange={onChange} value={formValue.serie} disabled={disabled} required/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="dispositivo">Dispositivo</label>
                <select className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400 w-80" : "h-10 rounded-lg border-2 bg-white  border-black p-2 w-80"} type="text" id="dispositivo" onChange={onChange} value={formValue.dispositivo} disabled={disabled} required>
                    <option value="impresora">Impresora</option>
                    <option value="computadora">Computadora</option>
                    <option value="notebook">Notebook</option>
                    <option value="cartucho">Cartucho</option>
                    <option value="otros">Otros</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="marca">Marca</label>
                <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400 w-80" : "h-10 rounded-lg border-2 bg-white  border-black p-2 w-80"} type="text" id="marca" onChange={onChange} value={formValue.marca} disabled={disabled} required/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="modelo">Modelo</label>
                <input className={disabled ? "h-10 rounded-lg border-2  border-black p-2 bg-gray-400 w-80" : "h-10 rounded-lg border-2 bg-white  border-black p-2 w-80"} type="text" id="modelo" onChange={onChange} value={formValue.modelo} disabled={disabled} required />
            </div>

            <label htmlFor="falla">Falla</label>
            <textarea name="falla" id="falla" className={disabled ? "h-32 w-96 rounded-lg border-2  border-black p-2 bg-gray-400" : "h-32 w-96 rounded-lg border-2 bg-white  border-black p-2"} onChange={onChange} value={formValue.falla} disabled={disabled}></textarea>
            </div>
            <Workshop formValue={formValue} onChange={onChange} disabled={disabled}/>
        </form>
    )
}

export default OrderForm
