export default function AppAboutSection() {



    return (

        /* About section */

        <section className="bg-soft " aria-label="About-section">

            <div className="border-y border-line md:py-2 lg:py-5 xl:py-7">

                {/* Grid container */}

                <div className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]">

                    {/* About */}

                    <div className="grid items-start gap-[27px] md:gap-8 lg:min-h-40 lg:grid-cols-12 lg:items-center lg:gap-6 xl:min-h-44 xl:gap-10">

                        {/* Title */}

                        <div className="lg:col-span-4">
                            <span className="mb-[9px] block text-[11px] leading-[14px] font-medium tracking-[0.32em] text-muted md:mb-3 lg:text-xs lg:leading-4 xl:mb-4">ABOUT</span>
                            <h2 className="text-[34px] leading-[1.03] font-bold tracking-[-0.04em] text-ink sm:text-[38px] md:text-[40px] xl:text-[48px]">A sharper way<br />to see <span className="text-brand">solutions.</span></h2>
                        </div>

                        {/* Description */}

                        <div className="lg:col-span-5">
                            <p className="max-w-[420px] text-base leading-[1.5] text-body md:max-w-2xl md:leading-relaxed lg:max-w-none xl:text-lg">
                                My journey started in the world of optics, where I learned the value of precision, attention to detail and how a small adjustment can make a big difference. Today, I apply the same mindset to web development, combining technical skills with creativity to build clear, functional and meaningful digital experiences.
                            </p>
                        </div>

                        {/* Quote */}

                        <div className="border-l-2 border-line py-[7px] pl-[27px] md:py-3 lg:col-span-3 lg:flex lg:min-h-28 lg:items-center lg:pl-6 xl:min-h-32 xl:pl-10">
                            <blockquote className="max-w-36 text-lg leading-6 text-muted italic md:max-w-56 md:text-xl md:leading-7 xl:text-2xl xl:leading-8">“Better vision<br />leads to<br />brighter ideas.”</blockquote>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}
