

function Customer() {
    return (
        <>
            <h1 className="text-center mt-5 text-xl">Agregar Cliente</h1>
            <form className="flex flex-col items-center gap-3 m-6">
                <div className="flex flex-col">
                    <label htmlFor="id">ID</label>
                    <input className="h-10 rounded-lg border-2 border-black w-80" type="number" id="id" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nombrecompleto">Nombre Completo</label>
                    <input className="h-10 rounded-lg border-2 border-black w-80" type="number" id="nombrecompleto" required/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="celular">Celular</label>
                    <input className="h-10 rounded-lg border-2 border-black w-80" type="text" id="celular" required/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="correo">Correo Electrónico</label>
                    <input className="h-10 rounded-lg border-2 border-black w-80" type="email" id="correo" required/>
                </div>
            </form>
        </>
    )
}

export default Customer