export default function AppFooter() {




    return (

        /* FOOTER */
        <footer className="container mx-auto min-h-14 flex justify-between md:justify-normal flex-wrap md:flex-nowrap items-center p-4 gap-11">

            {/* Developer Name */}

            <div className="flex items-center gap-5 shrink-0">
                <span className="font-logo text-[2.7rem] leading-none font-normal tracking-[-0.06em]">SS</span>
                <p className="flex flex-col text-lg leading-6 font-medium">
                    Stefano Sorrenti
                    <small className="text-muted text-[0.6rem] leading-[0.9rem] font-semibold tracking-[0.2em]">WEB DEVELOPER</small>
                </p>
            </div>

            <span aria-hidden="true" className="hidden md:block h-12 w-px shrink-0 bg-line" /> {/* Separator */}


            {/* Copyright */}
            <div className="flex  gap-1">
                <p>Precision today. A brighter tomorrow.</p>
                <p className="text-muted text-[0.6rem] leading-[0.9rem] font-semibold tracking-[0.2em]">
                    © {new Date().getFullYear()} Stefano Sorrenti. All rights reserved.
                </p>
            </div>
        </footer>
    )
}