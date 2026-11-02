import { motion } from "framer-motion";

export default function AppMyValuesSections() {
    return (
        <div className="border-b border-line md:py-2 lg:py-5 xl:py-7">

            {/* My values section */}
            
            <section
                className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas"
                aria-label="My values section"
            >
                <motion.h3 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase md:mb-4 lg:mb-6 xl:mb-8"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0 }}
                >
                    I miei valori
                </motion.h3>

                <ul className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">

                    {/* Creativity */}

                    <li className="pb-6 md:pb-8 lg:py-3 lg:pr-6 xl:pr-10">
                        <div className="flex items-start gap-6 md:gap-7 lg:gap-4 xl:gap-6">

                            {/* Icon */}

                            <motion.svg
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.12 }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-10 shrink-0 text-brand md:size-11 lg:size-12 xl:size-14"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M9 18h6v-2a7 7 0 1 0-6 0v2ZM9 21h6M10.5 23h3" />
                            </motion.svg>

                            {/* Content */}

                            <div>
                                <motion.h4 className="text-lg leading-snug font-semibold tracking-tight text-ink md:text-xl xl:text-2xl"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.85, delay: 0.22 }}
                                >
                                    Creatività
                                </motion.h4>
                                <motion.p className="mt-1 text-base leading-normal text-body md:mt-2 md:leading-relaxed xl:text-lg"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.85, delay: 0.32 }}
                                >
                                    Mi piace trasformare le idee in soluzioni semplici ed efficaci.
                                </motion.p>
                            </div>
                        </div>
                    </li>

                    {/* Precision */}

                    <li className="py-6 md:py-8 lg:px-6 lg:py-3 xl:px-10">
                        <div className="flex items-start gap-6 md:gap-7 lg:gap-4 xl:gap-6">

                            {/* Icon */}

                            <motion.svg
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.24 }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-10 shrink-0 text-brand md:size-11 lg:size-12 xl:size-14"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="4.5" />
                            </motion.svg>

                            {/* Content */}

                            <div>
                                <motion.h4 className="text-lg leading-snug font-semibold tracking-tight text-ink md:text-xl xl:text-2xl"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.85, delay: 0.34 }}
                                >
                                    Precisione
                                </motion.h4>
                                <motion.p className="mt-1 text-base leading-normal text-body md:mt-2 md:leading-relaxed xl:text-lg"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.85, delay: 0.44 }}
                                >
                                    L’esperienza nell’ottica mi ha insegnato a dare valore a ogni dettaglio.
                                </motion.p>
                            </div>

                        </div>
                    </li>

                    {/* Continuous Learning */}

                    <li className="pt-6 md:pt-8 lg:py-3 lg:pl-6 xl:pl-10">
                        <div className="flex items-start gap-6 md:gap-7 lg:gap-4 xl:gap-6">

                            {/* Icon */}
                            <motion.svg
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.36 }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-10 shrink-0 text-brand md:size-11 lg:size-12 xl:size-14"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M3 12h4v8H3zM10 8h4v12h-4zM17 3h4v17h-4z" />
                            </motion.svg>

                            {/* Content */}

                            <div>
                                <motion.h4 className="text-lg leading-snug font-semibold tracking-tight text-ink md:text-xl xl:text-2xl"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.85, delay: 0.46 }}
                                >
                                    Crescita continua
                                </motion.h4>
                                <motion.p className="mt-1 text-base leading-normal text-body md:mt-2 md:leading-relaxed xl:text-lg"
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.85, delay: 0.56 }}
                                >
                                    Esploro nuovi strumenti, tecnologie e punti di vista per migliorare ogni giorno.
                                </motion.p>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
