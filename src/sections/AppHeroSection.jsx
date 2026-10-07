import { Link } from "react-router-dom";

export default function AppHeroSection() {



    return (
        /* Hero Section */

        <section className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-2 md:gap-4 md:px-3" aria-label="Hero Section">

            {/* Description column */}

            <div className="py-8 md:py-6 lg:py-10">

                {/* Title and description */}

                <div className="mb-5 md:mb-3 lg:mb-6">
                    <small className="mb-3 block text-[7px] leading-none font-semibold tracking-[0.32em] text-outline lg:mb-5 lg:text-[10px]">DIFFERENT BACKGROUND. SAME VISION.</small>
                    <h1 className="text-[44px] leading-[0.88] font-extrabold tracking-[-0.045em] text-ink md:text-[48px] lg:text-[64px] xl:text-[72px]">From optics<br />to <span className="text-brand">code.</span></h1>
                    <p className="mt-4 max-w-[285px] text-[11px] leading-[1.3] text-body lg:mt-6 lg:max-w-[430px] lg:text-base">
                        I'm Stefano Sorrenti, a Junior Full Stack Web Developer with a creative
                        mind, an eye for detail and a constant desire to learn.
                    </p>
                </div>


                {/* Links */}

                <div className="flex flex-wrap items-center gap-4">
                    <Link className="inline-flex h-7 items-center justify-center gap-2 rounded-[3px] bg-brand px-[19px] text-[9px] font-medium text-white lg:h-11 lg:px-6 lg:text-sm" to="/projects">
                        View projects <span aria-hidden="true">→</span>
                    </Link>
                    <Link className="inline-flex h-7 items-center justify-center rounded-[3px] border border-faint px-[22px] text-[9px] font-medium text-ink lg:h-11 lg:px-7 lg:text-sm" to="/#contact">
                        Download CV
                    </Link>
                </div>



            </div>

            {/* Potrait column */}

            <div className="hidden items-center justify-end gap-4 md:flex lg:gap-6">

                {/* Potrait picture */}
                <div className="flex-1 self-end">
                    <img src="src\assets\portrait-placeholder.svg" alt="Portrait" />
                </div>
                <ul className="relative shrink-0 pt-3 text-[7px] leading-[1.6] font-semibold tracking-[0.24em] text-muted before:absolute before:top-0 before:left-0 before:h-px before:w-[4.5] before:bg-brand before:content-[''] lg:pt-4 lg:text-[10px] lg:before:w-7">
                    <li>SAME</li>
                    <li>CURIOSITY.</li>
                    <li>NEW</li>
                    <li>PERSPECTIVE.</li>
                </ul>

            </div>

        </section>

    )
}
