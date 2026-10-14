export default function AppFooter() {
    return (

        /* FOOTER */

        <footer className="border-t border-line bg-canvas font-sans text-ink">

            <div className="container mx-auto flex flex-col items-start gap-8 px-4 py-5 md:flex-row md:flex-wrap md:items-center lg:flex-nowrap lg:justify-between">

                {/* Developer Name */}
                <div className="flex shrink-0 items-center gap-5 lg:grow">
                    <span className="font-logo text-[2.7rem] leading-none font-normal tracking-[-0.06em]">SS</span>
                    <p className="flex flex-col text-lg leading-6 font-medium">
                        Stefano Sorrenti
                        <small className="text-[0.6rem] leading-[0.9rem] font-semibold tracking-[0.2em] text-muted">WEB DEVELOPER</small>
                    </p>
                </div>

                {/* Separator */}
                <span aria-hidden="true" className="hidden h-8 w-px shrink-0 bg-optical lg:block" />

                {/* Motto and copyright */}
                <div className="flex min-w-0 flex-col items-start gap-5 text-muted md:ml-auto md:flex-row md:flex-wrap md:items-center md:gap-8 lg:ml-0 lg:flex-nowrap">
                    <p className="shrink-0 text-sm leading-5 tracking-[0.05em] whitespace-pre-line lg:text-xs lg:leading-4">
                        {"Precision today.\nA brighter tomorrow."}
                    </p>
                    <p className="text-sm leading-5 font-normal lg:flex lg:items-center lg:gap-8 lg:text-xs lg:whitespace-nowrap lg:before:block lg:before:h-px lg:before:w-28 lg:before:shrink-0 lg:before:bg-optical lg:before:content-['']">
                        © {new Date().getFullYear()} Stefano Sorrenti. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}
