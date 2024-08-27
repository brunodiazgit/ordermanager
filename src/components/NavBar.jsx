import { Link } from "react-router-dom"

function NavBar() {
    return (
        <header className="flex justify-around items-center mt-5">
            <nav>
                <ul className="flex gap-40 text-white text-lg bg-red-800 rounded-lg p-5">
                    <li>
                        <Link to={'/'}>Entrada de Datos</Link>
                    </li>
                    <li>
                        <Link to={'/workshop'}>Info Taller</Link>
                    </li>
                    <li>
                        <Link to={'/queries'}>Búsquedas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar