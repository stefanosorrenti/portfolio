import { NavLink } from "react-router-dom";

export default function AppMobileMenu({ onClose }) {

    return (

        
        <div className="basis-full md:hidden flex flex-col items-center gap-2.5 text-[0.9rem] leading-[1.2rem] font-medium grow *:hover:bg-brand/10 *:hover:text-brand cursor-pointer  p-3 *:p-1  *:focus:bg-brand/10 *:focus:text-brand *:rounded-full" id="mobile-menu" aria-label="Mobile Navigation">


            <NavLink to="#home" onClick={onClose}>Home</NavLink>
            <NavLink to="#about" onClick={onClose}>Chi sono</NavLink>
            <NavLink to="#projects" onClick={onClose}>Progetti</NavLink>
            <NavLink to="#contact" onClick={onClose}>Contatti</NavLink>


        </div>
    )
}