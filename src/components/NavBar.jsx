import { Link } from "react-router-dom"

function NavBar() {


    return (
        <header className="flex justify-around items-center min-h-20 bg-gray-900">
            <div className="flex">
                <h1 className="text-white text-2xl">OrderManager</h1>
            </div>
            <nav >
                <ul className="flex gap-10 text-white text-lg">
                    <li>
                        <Link to={'/'}>Ordenes</Link>
                    </li>
                    <li>
                        <Link to={'/queries'}>Busquedas</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Clientes</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Empleados</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
