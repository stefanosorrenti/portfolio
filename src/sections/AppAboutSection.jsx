import { motion } from "framer-motion";

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

                        <motion.div className="lg:col-span-4"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.75, delay: 0 }}
                        >
                            <span className="mb-[9px] block text-[11px] leading-[14px] font-medium tracking-[0.32em] text-muted md:mb-3 lg:text-xs lg:leading-4 xl:mb-4">CHI SONO</span>
                            <h2 className="text-[34px] leading-[1.03] font-bold tracking-[-0.04em] text-ink sm:text-[38px] md:text-[40px] xl:text-[48px]">Uno visione<br />attenta alle <span className="text-brand">soluzioni.</span></h2>
                        </motion.div>

                        {/* Description */}

                        <motion.div className="lg:col-span-5"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.12 }}
                        >
                            <p className="max-w-[420px] text-base leading-[1.5] text-body md:max-w-2xl md:leading-relaxed lg:max-w-none xl:text-lg">
                                Il mio percorso è iniziato nel mondo dell’ottica, dove ho imparato quanto contino la precisione e la cura dei dettagli: a volte basta un piccolo aggiustamento per fare la differenza. Oggi porto lo stesso approccio nello sviluppo web, unendo competenze tecniche e creatività per realizzare esperienze digitali chiare, funzionali e curate.
                            </p>
                        </motion.div>

                        {/* Quote */}

                        <motion.div className="border-l-2 border-line py-[7px] pl-[27px] md:py-3 lg:col-span-3 lg:flex lg:min-h-28 lg:items-center lg:pl-6 xl:min-h-32 xl:pl-10"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.65, delay: 0.24 }}
                        >
                            <blockquote className="max-w-36 text-lg leading-6 text-muted italic md:max-w-56 md:text-xl md:leading-7 xl:text-2xl xl:leading-8">“Cambiare prospettiva<br />per vedere<br />nuove idee.”</blockquote>
                        </motion.div>

                    </div>

                </div>

            </div>

        </section>

    )
}
