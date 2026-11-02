import technologies from "../data/technologies";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

const midpoint = Math.ceil(technologies.length / 2); // Calculate the midpoint of the technologies array
const technologyRows = [technologies.slice(0, midpoint), technologies.slice(midpoint)]; // Split the technologies array into two rows based on the midpoint

export default function AppTechStackSection() {
    return (

        /* Tech Stack Section */

        <div className="border-b border-line md:py-2 lg:py-3">
            <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas">

                {/* Title */}
                <h2 className="mb-4 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase md:mb-5 lg:mb-6">Tech Stack</h2>

                {/* Tech stacks list */}

                <div className="flex flex-col gap-6 md:gap-8">
                    {technologyRows.map((row, rowIndex) => (

                        // Motion div for each row of technologies (2 rows in total)
                        <motion.div
                            key={rowIndex}
                            initial={{ opacity: 0, y: 12 }}
                            className="overflow-hidden"
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.85, delay: rowIndex * 0.12 }}
                        >

                            {/* Motion div for scrolling effect of technologies in each row */}
                            <motion.ul
                                className="flex flex-1 min-w-[200%] items-start justify-around gap-6 pr-6"
                                initial={{ x: rowIndex === 0 ? "0%" : "-50%" }}
                                animate={{ x: rowIndex === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                                transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                            >

                                {/* Duplicate the row for infinite scrolling effect */}

                                {[0, 1].map((list) => (
                                    row.map((tech) => ( // Map through each technology in the row and render it as a list item
                                        <li
                                            key={`${tech.id}-${list}`}
                                            aria-hidden={list === 1 ? true : undefined}
                                            className="flex flex-col items-center gap-2.5 shrink-0 w-[4.5rem] md:w-[5.5rem] lg:w-[6.5rem]"
                                        >
                                            <StackIcon name={tech.icon} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                                            <span className="text-[0.7rem] leading-[0.9rem] font-medium text-center md:text-[0.8rem] lg:text-[0.9rem]">{tech.name}</span>
                                        </li>
                                    ))
                                ))}



                            </motion.ul>


                        </motion.div>
                    ))}
                </div>

            </section>
        </div>
    )
}