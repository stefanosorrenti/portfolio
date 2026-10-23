import portraitPlaceholder from "../assets/portrait-placeholder.svg";

export default function AppHeroSection() {
    return (
        <section className="container mx-auto flex min-h-[calc(100dvh-81px)] flex-col justify-around gap-10 px-4 py-8 sm:gap-12 sm:px-6 sm:py-10 lg:gap-16 lg:px-8 lg:py-12 2xl:px-12">
            
            <div className="grid shrink-0 grid-cols-1 gap-6 md:grid-cols-2 md:items-start lg:gap-12 xl:gap-16 2xl:gap-20">

                {/* Description column */}

                <div className="min-w-0 md:pt-4 lg:pt-6">
                    <span className="mb-3 block text-[10px] leading-relaxed font-semibold tracking-[0.2em] text-muted md:mb-5 lg:mb-6 lg:text-[11px] lg:tracking-[0.24em]">
                        DIFFERENT BACKGROUND. SAME VISION.
                    </span>
                    <h1 className="text-[44px] leading-[0.98] font-extrabold tracking-[-0.03em] text-ink sm:text-[56px] md:text-[60px] lg:text-[80px] xl:text-[96px]">
                        From optics<br />
                        to <span className="text-brand">code.</span>
                    </h1>
                    <p className="mt-6 mb-6 max-w-sm text-sm leading-relaxed text-body sm:max-w-md md:mb-7 md:max-w-full lg:mt-8 lg:mb-8 lg:max-w-[420px] lg:text-base xl:max-w-[460px] xl:text-lg">
                        I'm Stefano Sorrenti, a Junior Full Stack Web Developer with a creative
                        mind, an eye for detail and a constant desire to learn.
                    </p>

                    {/* CTA buttons */}

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
                        <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] bg-brand px-4 py-2 text-sm font-medium text-white sm:px-6 lg:min-h-12 lg:px-8">
                            View projects <span aria-hidden="true">&rarr;</span>
                        </button>
                        <button className="inline-flex min-h-11 items-center justify-center rounded-[3px] border border-faint px-4 py-2 text-sm font-medium text-ink sm:px-6 lg:min-h-12 lg:px-8">
                            Get in touch
                        </button>
                    </div>
                </div>

                {/* Portrait and anchored caption */}

                <div className="relative hidden min-w-0 justify-start md:flex md:place-self-end xl:place-self-auto">

                    {/* Img container */}

                    <div className="w-full min-w-0c xl:ml-[-30%]">
                        <img className="h-auto w-full max-w-full lg:max-w-none xl:w-[110%]" src={portraitPlaceholder} alt="Portrait" />
                    </div>
                    <p className="absolute top-1/2 right-0 w-18 -translate-y-1/2 text-start text-[9px] leading-[1.6] font-semibold tracking-[0.1em] text-muted uppercase before:mx-auto before:mb-3 before:block before:h-0.5 before:w-5 before:bg-brand lg:w-24 lg:text-[10px] lg:tracking-[0.15em] lg:before:w-7">
                        Curiosity.<br />New<br />Perspective.
                    </p>    
                </div>
            </div>

            {/* Hero footer */}

            <div className="flex shrink-0 flex-col items-center gap-2 border-t border-faint pt-4 text-xs text-muted md:flex-row md:justify-between md:gap-6 md:border-0 md:pt-0 md:text-[10px] md:font-semibold md:tracking-[0.22em] md:uppercase lg:text-[11px]">
                <p className="md:order-2 md:text-right">Based in Tuscany, Italy</p>
                <p className="md:order-1 md:flex md:min-h-10 md:items-center md:border-l md:border-faint md:pl-6">
                    Scroll to explore <span className="text-brand md:hidden">&darr;</span>
                </p>
            </div>

        </section>
    );
}
