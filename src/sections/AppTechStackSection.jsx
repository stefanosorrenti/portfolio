import technologies from "../data/technologies";
import StackIcon from "tech-stack-icons";

export default function AppTechStackSection() {
    return (

        /* Tech Stack Section */

        <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas">

            {/* Title */}
            <h2 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase">Tech Stack</h2>

            {/* Tech stacks list */}

            <ul className="grid grid-cols-3 p-3 gap-4 md:grid-cols-4 md:gap-6 lg:flex lg:flex-wrap lg:justify-evenly">

                {technologies.map((tech) => (
                    <li key={tech.id}>
                        <div className="flex flex-col items-center gap-2">
                            <StackIcon name={tech.icon} className="w-10 h-10" /> {/* Icon */}
                            <span>{tech.name}</span> {/* Name */}
                        </div>
                    </li>
                ))}

            </ul>

        </section>
    )
}