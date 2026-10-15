import { Link } from "react-router-dom";

export default function AppHeroSection() {



    return (

        /* Hero Section */
        <>
            <section className="container mx-auto p-4 h-screen flex flex-col justify-around">

                {/* Grid container */}
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Description column */}

                    <div>
                        <span className="mb-3 block text-[8px] leading-none font-semibold tracking-[0.32em] text-outline md:text-[10px] lg:mb-5 lg:text-[13px]">DIFFERENT BACKGROUNDS. SAME VISION</span>
                        <h1 className="text-[44px] leading-[0.88] font-extrabold tracking-[-0.045em] text-ink md:text-[48px] lg:text-[64px] xl:text-[72px]">FORM OPTICS <br /> TO <span className="text-brand">CODE.</span></h1>
                        <p className="mt-10 mb-5 max-w-[285px] text-[13px] leading-[1.3] text-body lg:mt-6 lg:max-w-[430px] lg:text-base">I'm Stefano Sorrenti, a Junior Full Stack Web Developer with a creative
                            mind, an eye for detail and a constant desire to learn.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="inline-flex h-8 items-center justify-center gap-2 rounded-[3px] bg-brand px-[19px] text-[9px] font-medium text-white lg:h-11 lg:px-6 lg:text-sm">View Projects</button>
                            <button className=" inline-flex h-8 items-center justify-center rounded-[3px] border border-faint px-[22px] text-[9px] font-medium text-ink lg:h-11 lg:px-7 lg:text-sm">Downlaod CV</button>
                        </div>
                    </div>


                    {/* Portrait column */}
                    <div className="hidden md:flex flex-col items-end">
                        <img src="src\assets\portrait-placeholder.svg" alt="Portrait" />
                        {/* <p>Available for new opportunities</p> */}
                    </div>


                </div>
                {/* Scroll to explore */}
                <div className="flex flex-col items-center gap-2 *:text-xs *:text-muted border-t border-faint pt-4 md:border-t-0 md:border-l md:border-faint md:flex-row md:justify-between md:p-4 md::*:text-2xl">
                    <p>Based in Tuscany, Italy</p>
                    <p>Scroll to explore <span className="text-brand">↓</span></p>
                </div>
            </section >

        </>
    )
}
