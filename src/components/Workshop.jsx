/* eslint-disable react/prop-types */

function Workshop({ formValue, onChange, disabled }) {

    return (
        <div className="flex items-center justify-center gap-20 m-5">
            <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col items-start">
                    <label htmlFor="estado">Estado</label>
                    <select id="estado" value={formValue.estado} onChange={onChange} className={disabled ? "w-24 border border-black bg-gray-400" : "w-24 border border-black"} disabled={disabled} >
                        <option value="Pendiente">Pendiente</option>
                        <option value="Terminada">Terminada</option>
                    </select>
                </div>

                <div className="flex flex-col items-start">
                    <label htmlFor="sub_estado">Sub-Estado</label>
                    <select id="sub_estado" value={formValue.sub_estado} onChange={onChange} className={disabled ? "w-26 border border-black bg-gray-400" : "w-26 border border-black"} disabled={disabled}>
                        {formValue.estado === 'Pendiente' && (
                            <>
                                <option value="En Reparación">En Reparación</option>
                                <option value="Presupuestada">Presupuestada</option>
                                <option value="Por Confirmar">Por Confirmar</option>
                                <option value="Aceptada">Aceptada</option>
                            </>
                        )}

                        {formValue.estado === 'Terminada' && (
                            <>
                                <option value="Reparación Garantía">Reparación Garantía</option>
                                <option value="Sin Reparación">Sin Reparación</option>
                                <option value="Rechazado">Rechazado</option>
                                <option value="Reparado Pendiente de Cobro">Reparado Pendiente de Cobro</option>
                                <option value="Reparado / cobrado">Reparado / cobrado</option>
                            </>
                        )}
                    </select>
                </div>

                <div className="flex flex-col items-start">
                    <label htmlFor="ubicacion">Ubicación / Pago</label>
                    <select id="ubicacion" value={formValue.ubicacion} onChange={onChange} className={disabled ? "w-26 border border-black bg-gray-400" : "w-26 border border-black"} disabled={disabled}>
                        <option value="Taller">Taller</option>
                        <option value="Cliente Entregado">Cliente Entregado</option>
                        <option value="Cliente Entregado / Cobrado">Cliente Entregado / Cobrado</option>
                    </select>
                </div>

                <div className="flex gap-20">
                    <label htmlFor="precio0">Precio #1</label>
                    <input id="precio0" className={disabled ? "border border-black w-20 bg-gray-400" : "border border-black w-20"} disabled={disabled} type="number" value={formValue.precios[0]} onChange={onChange} />
                </div>

                <div className="flex gap-20">
                    <label htmlFor="precio1">Precio #2</label>
                    <div className="flex flex-col">
                        <input id="precio1" className={disabled ? "border border-black w-20 bg-gray-400" : "border border-black w-20"} disabled={disabled} type="number" value={formValue.precios[1]} onChange={onChange} />
                        <select name="moneda" id="moneda" className={disabled ? "border  bg-gray-400" : "border "} value={formValue.moneda} disabled={disabled} onChange={onChange}>
                            <option value="$">$</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-20">
                    <label htmlFor="precio2">Precio #3</label>
                    <input id="precio2" className={disabled ? "border border-black w-20 bg-gray-400" : "border border-black w-20"} disabled={disabled} type="number" value={formValue.precios[2]} onChange={onChange} />
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <label htmlFor="empleado">Empleado</label>
                <select id="empleado" value={formValue.empleado} onChange={onChange} className={disabled ? "w-24 border border-black bg-gray-400" : "w-24 border border-black"} disabled={disabled}>
                    <option value="pordefecto"></option>
                    <option value="Bruno">Bruno</option>
                    <option value="Facundo">Facundo</option>
                    <option value="Javier">Javier</option>
                    <option value="Eduardo envidioso">Eduardo envidioso</option>
                </select>

                <textarea id="observaciones" className={disabled ? "h-32 w-64 rounded-lg border border-black bg-gray-500" : "h-32 w-64 rounded-lg border border-black"} disabled={disabled} value={formValue.observaciones} onChange={onChange}></textarea>

                <div className="flex justify-center center items-center gap-2 m-6">
                </div>
            </div>
        </div>
    )
}

export default Workshop
