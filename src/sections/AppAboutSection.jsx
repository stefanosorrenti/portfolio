export default function AppAboutSection() {




    return (

        /* About section */

        <section className="bg-soft " aria-label="About-section">

            {/* Grid container */}

            <div className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]">

                {/* About */}

                <div className="grid items-start gap-[27px] lg:grid-cols-12">

                    {/* Title */}

                    <div className="lg:col-span-4">
                        <span className="mb-[9px] block text-[11px] leading-[14px] font-medium tracking-[0.32em] text-outline">ABOUT</span>
                        <h2 className="text-[34px] leading-[1.03] font-bold tracking-[-0.04em] text-ink sm:text-[38px]">A sharper way<br />to see <span className="text-brand">solutions.</span></h2>
                    </div>

                    {/* Description */}

                    <div className="lg:col-span-5 lg:pt-[11px]">
                        <p className="max-w-[420px] text-base leading-[1.5] text-body lg:text-[13.5px]">
                            My journey started in the world of optics, where I learned the value of precision, attention to detail and how a small adjustment can make a big difference. Today, I apply the same mindset to web development, combining technical skills with creativity to build clear, functional and meaningful digital experiences.
                        </p>
                    </div>

                    {/* Quote */}

                    <div className="border-l-2 border-line py-[7px] pl-[27px] lg:col-span-3 lg:mt-[18px] lg:min-h-[90px] lg:pl-[45px]">
                        <blockquote className="max-w-36 text-lg leading-6 text-muted italic">“Better vision<br />leads to<br />brighter ideas.”</blockquote>
                    </div>

                </div>

            </div>

        </section>

    )
}
