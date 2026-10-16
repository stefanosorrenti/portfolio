import technologies from "../data/technologies";
import StackIcon from "tech-stack-icons";

export default function AppTechStackSection() {
    return (

        /* Tech Stack Section */

        <div className="border-b border-line md:py-2 lg:py-3">
            <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas">

                {/* Title */}
                <h2 className="mb-4 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase md:mb-5 lg:mb-6">Tech Stack</h2>

                {/* Tech stacks list */}

                <ul className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-11 lg:gap-x-2 xl:gap-x-4">

                    {technologies.map((tech) => (
                        <li key={tech.id}>
                            <div className="flex flex-col items-center gap-2 lg:gap-3">
                                <StackIcon name={tech.icon} className="size-10 shrink-0 md:size-11 lg:size-12" /> {/* Icon */}
                                <span className="text-center text-xs leading-5 text-ink md:text-sm">{tech.name}</span> {/* Name */}
                            </div>
                        </li>
                    ))}

                </ul>

            </section>
        </div>
    )
}
