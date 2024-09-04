function ToolBar() {
    return (
        <header className="flex justify-around items-center min-h-20 bg-gray-900">
            <div>
                <h1 className="text-white text-2xl">OrderManager</h1>
            </div>
            <nav >
                <ul className="flex gap-10 text-white text-lg">
                    <li>
                        <button>Nuevo</button>
                    </li>
                    <li>
                        <button>Guardar</button>
                    </li>
                    <li>
                        <button>Editar</button>
                    </li>
                    <li>
                        <button>Eliminar</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default ToolBar
