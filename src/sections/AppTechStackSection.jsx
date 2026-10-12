import technologies from "../data/technologies";
import StackIcon from "tech-stack-icons";

export default function AppTechStackSection() {
    return (

        /* Tech Stack Section */

        <section className="container mx-auto px-[27px] py-9 lg:pt-[18px] lg:pb-[26px]  bg-canvas">

            {/* Title */}
            <h2 className="mb-2 text-xs leading-4 font-medium tracking-[0.24em] text-muted uppercase">Tech Stack</h2>

            {/* Tech stacks list */}

            <ul className="flex flex-wrap gap-4 justify-evenly">
                {technologies.map((tech) => (
                    <li key={tech.id} >
                        <div className="w-8 h-8 mx-auto">
                            <StackIcon name={tech.icon} />
                        </div>
                        <span>{tech.name}</span>
                    </li>
                ))}
            </ul>

        </section>
    )
}