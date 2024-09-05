import { useState } from "react"
function Workshop() {
    const[state, setState] = useState("Pendiente")

    const handleChange = (e)=>{
        setState(e.target.value)
    }

    return (
        <div className="flex items-center justify-center">
            <form className="w-4/5 h-4/5 flex m-10 ">
                <div className="flex flex-col items-start gap-5 w-5/6">
                    <div className="flex flex-col items-start">
                        <label htmlFor="">Estado</label>
                        <select value={state} onChange={handleChange} className="w-24 border border-black">
                            <option value="Pendiente">Pendiente</option>
                            <option value="Terminada">Terminada</option>
                        </select>
                    </div>

                    <div className="flex flex-col items-start">
                        <label htmlFor="">Sub-Estado</label>
                        <select name="" id="" className="w-26 border border-black">
                            {state === 'Pendiente' && 
                            <> 
                            <option value="">En Reparación</option>
                            <option value="">Presupuestada</option>
                            <option value="">Por Confirmar</option>
                            <option value="">Aceptada</option > 
                            </>}

                            {state === 'Terminada' && 
                            <> 
                            <option value="">Reparación Garantía</option>
                            <option value="">Sin Reparación</option>
                            <option value="">Rechazado</option>
                            <option value="">Reparado Pendiente de Cobro</option >
                            <option value="">Reparado / cobrado </option >
                            </>}

                        </select>
                    </div>

                    <div className="flex flex-col items-start">
                        <label htmlFor="">Ubicación / Pago</label>
                        <select name="" id="" className="w-26 border border-black">
                            <option value="">Taller</option>
                            <option value="">Cliente Entregado</option>
                            <option value="">Cliente Entregado / Cobrado</option>
                        </select>
                    </div>

                        
                        <div className="flex gap-20">
                            <label htmlFor="">Precio #1</label>
                            <input className="border border-black w-20" type="number" name="" id="" />
                        </div>
                        <div>
                        <div className="flex gap-20">
                            <label htmlFor="">Precio #2</label>
                            <input className="border border-black w-20" type="number" name="" id="" />
                        </div>

                        <select name="" id="">
                                <option value="">$</option>
                                <option value="">USD</option>
                            </select>
                            </div>
                        <div className="flex gap-20">
                            <label htmlFor="">Precio #3</label>
                            <input className="border border-black w-20" type="number" name="" id="" />
                        </div>

                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col ">
                        <label htmlFor="">Empleado</label>
                        <select name="" id="">
                            <option value="">Bruno</option>
                            <option value="">Facundo</option>
                            <option value="">Javier</option>
                            <option value="">Eduardo envidioso</option>
                        </select>
                    </div>
                    <textarea className="h-32 w-64 rounded-lg border border-black" name="" id=""></textarea>
                </div>
            </form>
        </div>
    )
}

export default Workshop