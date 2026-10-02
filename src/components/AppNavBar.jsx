import { NavLink } from "react-router-dom";
import { useState } from "react";
import AppMobileMenu from "./AppMobileMenu";

export default function AppNavBar() {

    //USE STATE
    const [isOpen, setIsOpen] = useState(false)

    return (

        <nav className="container mx-auto bg-canvas min-h-14 flex justify-between md:justify-normal flex-wrap md:flex-nowrap items-center p-4 gap-11" id="home" aria-label="Main Navigation">

            {/* Developer Name */}

            <div className="flex items-center gap-5 shrink-0">
                <span className="font-logo text-[2.7rem] leading-none font-normal tracking-[-0.06em]">SS</span>
                <p className="flex flex-col text-lg leading-6 font-medium">
                    Stefano Sorrenti
                    <small className="text-muted text-[0.6rem] leading-[0.9rem] font-semibold tracking-[0.2em]">WEB DEVELOPER</small>
                </p>
            </div>

            {/* Menu toggle */}

            <button className={`md:hidden flex items-center justify-center p-2 rounded-md text-muted hover:text-brand hover:bg-brand/10 ${isOpen ? 'focus:bg-brand/10 focus:text-brand' : ''}`} aria-controls="mobile-menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span className="sr-only">{isOpen ? 'Close main menu?' : 'Open main menu'}</span>
                {isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>

            {/* Menu Mobile */}
       
            {isOpen &&  <AppMobileMenu  onClose={() => setIsOpen(false)} />}

            <span aria-hidden="true" className="hidden md:block h-12 w-px shrink-0 bg-line" /> {/* Separator */}

            {/* Navigation Links */}

            <div className="hidden md:flex items-center justify-end gap-5 text-[0.9rem] leading-[1.2rem] font-medium grow *:hover:bg-brand/10 *:hover:text-brand cursor-pointer shrink-0 p-3 *:p-1  *:focus:bg-brand/10 *:focus:text-brand *:rounded-full">

                <NavLink  to="#home" onClick={() => setIsOpen(false)}>Home</NavLink>
                <NavLink to="#about" onClick={() => setIsOpen(false)}>Chi sono</NavLink>
                <NavLink to="#projects" onClick={() => setIsOpen(false)}>Progetti</NavLink>
                <NavLink to="#contact" onClick={() => setIsOpen(false)}>Contatti</NavLink>

            </div>

            <span aria-hidden="true" className="hidden md:block h-12 w-px shrink-0 bg-line" /> {/* Separator */}

            {/* Settings menu */}

            <div className="hidden md:flex items-center gap-5 text-md font-medium cursor-pointer shrink-0 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

            </div>

        </nav>
    )
}
