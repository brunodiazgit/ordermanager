/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function OrderForm({formValue, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center gap-1 bg-white shadow-md rounded-md m-6 ">
            <div className="flex flex-col w-80">
                <label htmlFor="orden">Orden</label>
                <input className="h-10 rounded-lg border-2 border-black" type="number" id="orden" onChange={onChange} value={formValue.orden} />
            </div>

            <div className="flex justify-between items-end gap-2">
                <div className="flex flex-col">
                    <label htmlFor="id">Id</label>
                    <input className="h-10 rounded-lg border-2 border-black w-16" type="number" id="id" onChange={onChange} value={formValue.id}/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cliente">Cliente</label>
                    <input className="h-10 rounded-lg border-2 border-black w-34" type="text" id="cliente" onChange={onChange} value={formValue.cliente} />
                </div>
                <Link to={'/customer'}><button className=" text-white h-10 w-12 bg-red-800 rounded-md ">+</button></Link>
            </div>

            <div className="flex flex-col">
                <label htmlFor="fecha">Fecha de ingreso</label>
                <input className="h-10 rounded-lg border-2 border-black w-80" type="date" id="fecha" onChange={onChange} value={formValue.fecha} />
            </div>

            <div className="flex flex-col">
                <label htmlFor="serie">Serie</label>
                <input className="h-10 rounded-lg border-2 border-black w-80" type="number" id="serie" onChange={onChange} value={formValue.serie} />
            </div>

            <div className="flex flex-col">
                <label htmlFor="dispositivo">Dispositivo</label>
                <input className="h-10 rounded-lg border-2 border-black w-80" type="text" id="dispositivo" onChange={onChange} value={formValue.dispositivo} />
            </div>

            <div className="flex flex-col">
                <label htmlFor="marca">Marca</label>
                <input className="h-10 rounded-lg border-2 border-black w-80" type="text" id="marca" onChange={onChange} value={formValue.marca}/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="modelo">Modelo</label>
                <input className="h-10 rounded-lg border-2 border-black w-80" type="text" id="modelo" onChange={onChange} value={formValue.modelo} />
            </div>

            <label htmlFor="falla">Falla</label>
            <textarea name="falla" id="falla" className="h-32 w-96 rounded-lg border border-black" onChange={onChange} value={formValue.falla}></textarea>
            <button className="h-10 w-28 bg-red-600 rounded-md text-white mt-2">Guardar</button>
        </form>
    )
}

export default OrderForm
