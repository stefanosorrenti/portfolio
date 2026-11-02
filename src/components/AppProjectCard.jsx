//IMPORTS

import AppCardDetail from "./AppCardDetail";
import { useState } from "react";
import { motion } from "framer-motion";


export default function AppProjectCard({ project, animationDelay = 0 }) {


    // STATE FOR MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (

        <>
            {/* Modal */}
            {isModalOpen && <AppCardDetail onClose={() => setIsModalOpen(false)} project={project} />}


            {/* Project card */}

            <motion.div className="flex flex-col rounded border border-line bg-surface p-2 font-sans md:p-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: animationDelay }}
            >   
                {/* Image */}
                <div className="aspect-video w-full shrink-0 overflow-hidden rounded-sm">
                    <img className="h-full w-full object-cover" src={project.images[0]} alt="placeholder" />
                </div>

                {/* Title */}
                <div className="px-2 py-3">
                    <h2 className="text-lg leading-snug font-bold tracking-tight text-ink md:text-xl">{project.title}</h2>
                </div>


                {/* Description */}

                {project.description.length > 120 ?

                    (
                        <p className="px-2 text-sm leading-normal wrap-break-word text-body md:text-base md:leading-relaxed">
                            {project.description.substring(0, 120)} <button className="text-brand cursor-pointer italic" onClick={() => setIsModalOpen(true)}>...scopri di più</button>
                        </p>

                    )
                    :
                    (
                        <p className="px-2 text-sm leading-normal wrap-break-word text-body md:text-base md:leading-relaxed">
                            {project.description}
                        </p>
            )

                }


            {/* Technologies */}
            <div className="mt-auto flex flex-wrap gap-2 px-2 pt-4 pb-2 md:pt-5">
                {project.technologies.map((technology, i) => (
                    <span key={i} className="rounded-full bg-badge px-3 py-2 text-xs leading-4 text-brand lg:text-sm lg:leading-5">{technology}</span>
                ))}
            </div>
        </motion.div >
        </>
    )
}
