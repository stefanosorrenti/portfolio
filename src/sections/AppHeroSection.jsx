import portraitPlaceholder from "../assets/images/potrait-pic.png";
import AppNavigationLink from "../components/AppNavigationLinks";
import { motion } from "framer-motion";

export default function AppHeroSection() {
    return (
        <section id="home" className="container mx-auto flex min-h-dvh flex-col justify-around gap-10 px-4 pt-8 sm:gap-12 sm:px-6 sm:pt-10 lg:gap-16 lg:px-8 lg:pt-12 2xl:px-12">

            <div className="grid shrink-0 grid-cols-1 gap-6 md:grid-cols-2 md:items-start lg:gap-12 xl:gap-16 2xl:gap-20">

                {/* Description column */}

                <div className="min-w-0 md:pt-4 lg:pt-6">
                    <motion.span className="mb-3 block text-[10px] leading-relaxed font-semibold tracking-[0.2em] text-muted md:mb-5 lg:mb-6 lg:text-[11px] lg:tracking-[0.24em]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        UN NUOVO PERCORSO. LA STESSA VISIONE.
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[44px] leading-[0.98] font-extrabold tracking-[-0.03em] text-ink sm:text-[56px] md:text-[60px] lg:text-[80px] xl:text-[96px]"
                    >
                        Dall'ottica<br />
                        al <motion.span className="text-brand"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            codice.
                        </motion.span>
                    </motion.h1>
                    <motion.p className="mt-6 mb-6 max-w-sm text-sm leading-relaxed text-body sm:max-w-md md:mb-7 md:max-w-full lg:mt-8 lg:mb-8 lg:max-w-[420px] lg:text-base xl:max-w-[460px] xl:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Sono Stefano Sorrenti, sviluppatore web full stack junior. Porto nello sviluppo la mia creatività, l’attenzione ai dettagli e la voglia di imparare ogni giorno.
                    </motion.p>

                    {/* CTA buttons */}

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
                        <AppNavigationLink to={"projects"} smooth={true} spy hashSpy={true} duration={600} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] bg-brand px-4 py-2 text-sm font-medium text-white sm:px-6 lg:min-h-12 lg:px-8 hover:bg-brand/70">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Scopri i progetti <span aria-hidden="true">&rarr;</span>
                            </motion.span>
                        </AppNavigationLink>
                        <motion.a href="sorrenti-stefano-cv.pdf" target="_blank" className="inline-flex min-h-11 items-center justify-center rounded-[3px] border border-faint px-4 py-2 text-sm font-medium text-ink sm:px-6 lg:min-h-12 lg:px-8 hover:bg-faint/10"
                            whileHover={{ scale: 1.05 }}

                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Vedi CV
                            </motion.span>
                        </motion.a>
                    </div>
                </div>

                {/* Portrait and anchored caption */}

                <div className="relative hidden min-w-0 justify-start md:flex md:place-self-end xl:place-self-auto">

                    {/* Img container */}

                    <motion.div className="w-full min-w-0c xl:ml-[-30%]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <img className="h-auto w-full max-w-full lg:max-w-none xl:w-[110%]" src={portraitPlaceholder} alt="Portrait" />
                    </motion.div>
                    <motion.ul className="absolute top-1/2 right-0 w-18 -translate-y-1/2 text-start text-[9px] leading-[1.6] font-semibold tracking-[0.1em] text-muted uppercase before:mr-auto before:mb-3 before:block before:h-0.5 before:w-8 before:bg-brand lg:w-24 lg:text-[10px] lg:tracking-[0.15em] lg:before:w-7"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.2 }}>
                            Creatività.
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.4 }}>
                            Curiosità.
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.6 }}>
                            Inventivà
                        </motion.li>
                        <motion.li initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1.8 }}>
                            Prospettiva.
                        </motion.li>
                    </motion.ul>
                </div>
            </div>

            {/* Hero footer */}

            <div className="flex shrink-0 flex-col items-center gap-2 border-t border-faint pt-4 text-xs text-muted md:flex-row md:justify-between md:gap-6 md:border-0 md:pt-0 md:text-[10px] md:font-semibold md:tracking-[0.22em] md:uppercase lg:text-[11px]">
                <motion.p className="md:order-2 md:text-right"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.7 }}

                >Vivo in Toscana, Italia</motion.p>
                <motion.p className="md:order-1 md:flex md:min-h-10 md:items-center md:border-l md:border-faint md:pl-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}


                >
                    Scorri per scoprire di più <span className="text-brand md:hidden">&darr;</span>
                </motion.p>
            </div>

        </section>
    );
}
