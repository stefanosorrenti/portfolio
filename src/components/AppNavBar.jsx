import { NavLink } from "react-router-dom";

export default function AppNavBar() {



    return (

        <nav className="border-b border-line bg-canvas min-h-14" id="home">

            {/* Developer Name */}

            <div>
                <span >SS</span>
                <p>Stefano Sorrenti
                    <small>WEB DEVELOPER</small>
                </p>
            </div>

            {/* Navigation Links */}

            <div>

                <NavLink to="#home">Home</NavLink>
                <NavLink to="#about">Chi sono</NavLink>
                <NavLink to="#projects">Progetti</NavLink>
                <NavLink to="#contact">Contatti</NavLink>

            </div>

            {/* Settings menu */}
            <div>
                <button>Settings</button>
            </div>

        </nav>
    )
}